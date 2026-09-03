from __future__ import annotations

import argparse
import csv
import html
import json
import re
import sqlite3
import sys
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import parse_qs, quote_plus, urljoin, urlparse

import pandas as pd
import requests
from bs4 import BeautifulSoup


APP_NAME = "Jilani Contact Finder"
DEFAULT_INPUT = Path.home() / "Downloads" / "Company_Lead_Files"
DEFAULT_OUTPUT = Path.home() / "Downloads" / "Contact_Finder_Results"
STATE_DB = DEFAULT_OUTPUT / "contact_finder_state.sqlite3"
SUPPORTED = {".xls", ".xlsx", ".csv"}
BUSINESS_PREFIXES = ("info", "sales", "export", "import", "contact", "office", "marketing", "support", "hello", "admin")
EXCLUDED_DOMAINS = {
    "facebook.com", "instagram.com", "youtube.com", "x.com", "twitter.com",
    "linkedin.com", "scribd.com", "wikipedia.org", "lookup.pk", "businesslist.pk",
}
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; JilaniContactFinder/1.0; public-business-contact-research)"}
OUTPUT_FIELDS = [
    "Company Name", "Origin Country", "POL", "POD", "Customs Station",
    "Official Website", "Business Email", "Other Emails",
    "Public Contact Number", "WhatsApp Number", "WhatsApp Chat Link",
    "Number Verification", "Number Source URL", "LinkedIn Company Page",
    "Source URLs", "Confidence", "Status", "Checked At",
]


def clean_company(value: object) -> str:
    if pd.isna(value):
        return ""
    name = re.sub(r"\s+", " ", str(value)).strip(" ,.-")
    name = re.sub(r"^(M/S\.?|MESSRS)\s+", "", name, flags=re.I)
    return name


def company_key(name: str) -> str:
    key = name.upper()
    key = re.sub(r"\b(PRIVATE|PVT|LIMITED|LTD|COMPANY|CO)\b", "", key)
    return re.sub(r"[^A-Z0-9]+", "", key)


def choose_company_column(columns: list[str]) -> str | None:
    normalized = {str(c).strip().lower(): str(c) for c in columns}
    priorities = [
        "importer name on gd", "exporter name on gd", "importer name", "exporter name",
        "consignee name", "shipper name", "company name",
    ]
    for wanted in priorities:
        if wanted in normalized:
            return normalized[wanted]
    for c in columns:
        low = str(c).lower()
        if ("importer" in low or "exporter" in low or "company" in low) and "name" in low:
            return str(c)
    return None


def choose_route_column(columns: list[str], names: tuple[str, ...]) -> str | None:
    normalized = {re.sub(r"[^a-z0-9]+", " ", str(c).strip().lower()).strip(): str(c) for c in columns}
    for wanted in names:
        if wanted in normalized:
            return normalized[wanted]
    return None


def read_companies(path: Path) -> tuple[list[str], str, dict[str, dict[str, str]]]:
    if path.suffix.lower() == ".csv":
        df = pd.read_csv(path, dtype=str, encoding_errors="replace")
    else:
        df = pd.read_excel(path, dtype=str)
    df.columns = [str(c).strip() for c in df.columns]
    column = choose_company_column(list(df.columns))
    if not column:
        raise ValueError("Importer/Exporter/Company Name column not found")
    pol_col = choose_route_column(list(df.columns), ("pol", "port of loading", "loading port", "port loading", "origin port"))
    pod_col = choose_route_column(list(df.columns), ("pod", "port of discharge", "discharge port", "destination port"))
    origin_col = choose_route_column(list(df.columns), ("origin", "origin country", "country of origin"))
    station_col = choose_route_column(list(df.columns), ("clctd", "customs station", "custom station", "collectorate"))
    seen: dict[str, str] = {}
    routes: dict[str, dict[str, set[str]]] = {}
    for row_index, value in df[column].items():
        name = clean_company(value)
        if name:
            key = company_key(name)
            seen.setdefault(key, name)
            route = routes.setdefault(key, {"Origin Country": set(), "POL": set(), "POD": set(), "Customs Station": set()})
            for label, source_col in (("Origin Country", origin_col), ("POL", pol_col), ("POD", pod_col), ("Customs Station", station_col)):
                if source_col:
                    raw = df.at[row_index, source_col]
                    if not pd.isna(raw) and str(raw).strip():
                        route[label].add(str(raw).strip())
    normalized_routes = {
        key: {label: "; ".join(sorted(values)) if values else "Not provided in source file" for label, values in route.items()}
        for key, route in routes.items()
    }
    return sorted(seen.values()), column, normalized_routes


def db_connect() -> sqlite3.Connection:
    DEFAULT_OUTPUT.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(STATE_DB)
    con.execute("""
        CREATE TABLE IF NOT EXISTS companies (
            company_key TEXT PRIMARY KEY, company_name TEXT, processed_at TEXT,
            official_website TEXT, email TEXT, phone TEXT, linkedin TEXT,
            source_urls TEXT, confidence TEXT, status TEXT
        )
    """)
    con.execute("""
        CREATE TABLE IF NOT EXISTS files (
            file_path TEXT PRIMARY KEY, size INTEGER, modified REAL, processed_at TEXT, output_path TEXT
        )
    """)
    existing = {row[1] for row in con.execute("PRAGMA table_info(companies)")}
    for column in ("whatsapp", "number_source"):
        if column not in existing:
            con.execute(f"ALTER TABLE companies ADD COLUMN {column} TEXT DEFAULT ''")
    con.commit()
    return con


def root_domain(url: str) -> str:
    host = urlparse(url).netloc.lower().split(":")[0]
    return host[4:] if host.startswith("www.") else host


def is_excluded(url: str) -> bool:
    d = root_domain(url)
    return any(d == x or d.endswith("." + x) for x in EXCLUDED_DOMAINS)


def bing_results(query: str, limit: int = 8) -> list[dict[str, str]]:
    url = "https://www.bing.com/search?format=rss&q=" + quote_plus(query)
    response = requests.get(url, headers=HEADERS, timeout=20)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "xml")
    results = []
    for item in soup.find_all("item")[:limit]:
        results.append({
            "title": html.unescape(item.title.get_text(" ", strip=True)) if item.title else "",
            "url": item.link.get_text(strip=True) if item.link else "",
            "description": html.unescape(item.description.get_text(" ", strip=True)) if item.description else "",
        })
    return results


def score_result(company: str, result: dict[str, str]) -> int:
    url = result["url"]
    if not url or is_excluded(url):
        return -100
    tokens = [t.lower() for t in re.findall(r"[A-Za-z0-9]+", company) if len(t) > 2]
    hay = (result["title"] + " " + root_domain(url)).lower()
    score = sum(3 for t in tokens[:5] if t in hay)
    if any(x in hay for x in ("official", "pakistan", "contact", "about")):
        score += 2
    if urlparse(url).path in ("", "/"):
        score += 2
    return score


def fetch_page(url: str) -> tuple[str, str]:
    response = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
    response.raise_for_status()
    ctype = response.headers.get("content-type", "")
    if "text/html" not in ctype:
        return "", response.url
    return response.text[:2_000_000], response.url


def normalize_phone(raw: str) -> str:
    digits = re.sub(r"\D", "", raw)
    if digits.startswith("0092"):
        digits = digits[2:]
    if digits.startswith("92") and 11 <= len(digits) <= 12:
        return "+" + digits
    if digits.startswith("0") and 10 <= len(digits) <= 11:
        return "+92" + digits[1:]
    if digits.startswith("3") and len(digits) == 10:
        return "+92" + digits
    if raw.strip().startswith("+") and 10 <= len(digits) <= 15:
        return "+" + digits
    return ""


def whatsapp_link(number: str) -> str:
    digits = re.sub(r"\D", "", number.split(";")[0])
    return f"https://wa.me/{digits}" if digits else ""


def extract_contacts(text: str) -> tuple[list[str], list[str]]:
    emails = set(re.findall(r"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", text, flags=re.I))
    emails = {e.strip(".,;:()[]<>").lower() for e in emails if not e.lower().endswith((".png", ".jpg", ".jpeg"))}
    phones: set[str] = set()
    for raw in re.findall(r"(?:\+?92|0)?[\s().-]*(?:3\d{2}|21|42|51)[\s().-]*\d{3,4}[\s.-]*\d{3,4}", text):
        phone = normalize_phone(raw)
        if phone:
            phones.add(phone)
    ordered_emails = sorted(emails, key=lambda e: (not e.startswith(BUSINESS_PREFIXES), e))
    return ordered_emails, sorted(phones)


def extract_linked_numbers(page: str) -> tuple[list[str], list[str]]:
    """Return numbers explicitly linked as telephone and WhatsApp contacts."""
    phones: set[str] = set()
    whatsapp: set[str] = set()
    soup = BeautifulSoup(page, "html.parser")
    for anchor in soup.select("a[href]"):
        href = anchor.get("href", "").strip()
        low = href.lower()
        if low.startswith("tel:"):
            phone = normalize_phone(href[4:])
            if phone:
                phones.add(phone)
        if "wa.me/" in low:
            phone = normalize_phone(urlparse(href).path.strip("/"))
            if phone:
                whatsapp.add(phone)
        elif "api.whatsapp.com" in low or "web.whatsapp.com" in low:
            phone = normalize_phone(parse_qs(urlparse(href).query).get("phone", [""])[0])
            if phone:
                whatsapp.add(phone)
    return sorted(phones), sorted(whatsapp)


def research_company(company: str) -> dict[str, str]:
    queries = [f'"{company}" Pakistan official website contact', f'"{company}" email phone Pakistan']
    results: list[dict[str, str]] = []
    for query in queries:
        try:
            results.extend(bing_results(query))
        except Exception:
            pass
        time.sleep(1.0)
    unique = {r["url"]: r for r in results if r.get("url")}
    ranked = sorted(unique.values(), key=lambda r: score_result(company, r), reverse=True)
    candidates = [r for r in ranked if score_result(company, r) >= 3][:3]
    linkedin = next((r["url"] for r in ranked if "linkedin.com/company/" in r["url"]), "")
    website = candidates[0]["url"] if candidates else ""
    all_emails: list[str] = []
    all_phones: list[str] = []
    all_whatsapp: list[str] = []
    number_sources: list[str] = []
    sources: list[str] = []
    pages_to_visit: list[str] = []
    if website:
        pages_to_visit.append(website)
    for candidate in candidates[1:]:
        if root_domain(candidate["url"]) == root_domain(website):
            pages_to_visit.append(candidate["url"])
    visited = set()
    for page_url in pages_to_visit[:3]:
        try:
            page, final_url = fetch_page(page_url)
            visited.add(final_url)
            emails, phones = extract_contacts(BeautifulSoup(page, "html.parser").get_text(" ", strip=True))
            linked_phones, whatsapp = extract_linked_numbers(page)
            phones = list(dict.fromkeys(linked_phones + phones))
            all_emails.extend(emails); all_phones.extend(phones); sources.append(final_url)
            all_whatsapp.extend(whatsapp)
            if phones or whatsapp:
                number_sources.append(final_url)
            soup = BeautifulSoup(page, "html.parser")
            for a in soup.select("a[href]"):
                label = a.get_text(" ", strip=True).lower()
                href = urljoin(final_url, a.get("href", ""))
                if ("contact" in label or "contact" in href.lower()) and root_domain(href) == root_domain(final_url):
                    if href not in visited:
                        try:
                            cp, cf = fetch_page(href); visited.add(cf)
                            e2, p2 = extract_contacts(BeautifulSoup(cp, "html.parser").get_text(" ", strip=True))
                            linked_p2, w2 = extract_linked_numbers(cp)
                            p2 = list(dict.fromkeys(linked_p2 + p2))
                            all_emails.extend(e2); all_phones.extend(p2); sources.append(cf)
                            all_whatsapp.extend(w2)
                            if p2 or w2:
                                number_sources.append(cf)
                        except Exception:
                            pass
                    break
        except Exception:
            continue
    emails = list(dict.fromkeys(all_emails))
    phones = list(dict.fromkeys(all_phones))
    whatsapp = list(dict.fromkeys(all_whatsapp))
    public_numbers = list(dict.fromkeys(whatsapp + phones))
    confidence = "High" if website and (emails or phones) else "Medium" if website else "Low"
    status = "Found" if emails or phones else "Website found" if website else "Manual review"
    return {
        "Company Name": company,
        "Origin Country": "Not provided in source file",
        "POL": "Not provided in source file",
        "POD": "Not provided in source file",
        "Customs Station": "Not provided in source file",
        "Official Website": website,
        "Business Email": emails[0] if emails else "",
        "Other Emails": "; ".join(emails[1:5]),
        "Public Contact Number": "; ".join(public_numbers[:4]),
        "WhatsApp Number": "; ".join(whatsapp[:3]),
        "WhatsApp Chat Link": whatsapp_link(whatsapp[0]) if whatsapp else "",
        "Number Verification": "Publicly listed on official website" if public_numbers else "Not found",
        "Number Source URL": "; ".join(dict.fromkeys(number_sources)),
        "LinkedIn Company Page": linkedin,
        "Source URLs": "; ".join(dict.fromkeys(sources + ([linkedin] if linkedin else []))),
        "Confidence": confidence,
        "Status": status,
        "Checked At": datetime.now().strftime("%Y-%m-%d %H:%M"),
    }


def previous_result(con: sqlite3.Connection, key: str) -> dict[str, str] | None:
    row = con.execute("SELECT company_name, processed_at, official_website, email, phone, linkedin, source_urls, confidence, status, whatsapp, number_source FROM companies WHERE company_key=?", (key,)).fetchone()
    if not row:
        return None
    return {
        "Company Name": row[0], "Origin Country": "Not provided in source file",
        "POL": "Not provided in source file", "POD": "Not provided in source file",
        "Customs Station": "Not provided in source file",
        "Official Website": row[2], "Business Email": row[3],
        "Other Emails": "", "Public Contact Number": row[4], "WhatsApp Number": row[9] or "",
        "WhatsApp Chat Link": whatsapp_link(row[9]) if row[9] else "",
        "Number Verification": "Publicly listed — refresh recommended" if row[4] else "Not found",
        "Number Source URL": row[10] or "", "LinkedIn Company Page": row[5],
        "Source URLs": row[6], "Confidence": row[7], "Status": "Previously processed: " + row[8],
        "Checked At": row[1],
    }


def save_result(con: sqlite3.Connection, result: dict[str, str]) -> None:
    con.execute("""INSERT OR REPLACE INTO companies
        (company_key,company_name,processed_at,official_website,email,phone,linkedin,source_urls,confidence,status,whatsapp,number_source)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?)""", (
        company_key(result["Company Name"]), result["Company Name"], result["Checked At"],
        result["Official Website"], result["Business Email"], result["Public Contact Number"],
        result["LinkedIn Company Page"], result["Source URLs"], result["Confidence"], result["Status"],
        result["WhatsApp Number"], result["Number Source URL"],
    ))
    con.commit()


def write_contact_group(base_name: str, title: str, rows: list[dict[str, str]]) -> tuple[Path, Path]:
    csv_path = DEFAULT_OUTPUT / f"{base_name}.csv"
    html_path = DEFAULT_OUTPUT / f"{base_name}.html"
    with csv_path.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=OUTPUT_FIELDS)
        writer.writeheader()
        writer.writerows(rows)

    def cell(value: object) -> str:
        return html.escape(str(value or ""))

    table_rows = []
    for row in rows:
        whatsapp_url = html.escape(row.get("WhatsApp Chat Link", ""), quote=True)
        whatsapp = row.get("WhatsApp Number", "")
        phone = row.get("Public Contact Number", "")
        source = html.escape(row.get("Number Source URL", "").split(";")[0], quote=True)
        whatsapp_cell = f"<a class='wa' target='_blank' href='{whatsapp_url}'>WhatsApp {cell(whatsapp)}</a>" if whatsapp_url else "Not found"
        source_cell = f"<a target='_blank' href='{source}'>Source</a>" if source else ""
        table_rows.append(
            "<tr>"
            f"<td>{cell(row.get('Company Name'))}</td>"
            f"<td>{cell(row.get('Origin Country'))}</td>"
            f"<td>{cell(row.get('POL'))}</td>"
            f"<td>{cell(row.get('POD'))}</td>"
            f"<td>{cell(row.get('Customs Station'))}</td>"
            f"<td><a href='tel:{cell(phone.split(';')[0])}'>{cell(phone)}</a></td>"
            f"<td>{whatsapp_cell}</td>"
            f"<td>{cell(row.get('Business Email'))}</td>"
            f"<td>{source_cell}</td>"
            f"<td>{cell(row.get('Status'))}</td>"
            "</tr>"
        )
    page = """<!doctype html><html><head><meta charset='utf-8'>
<meta http-equiv='refresh' content='10'><meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Jilani Contact Finder</title><style>
body{font-family:Arial,sans-serif;margin:20px;background:#f5f7fb;color:#13213c}h1{margin-bottom:4px}
.note{margin-bottom:18px;color:#53627a}table{border-collapse:collapse;width:100%;background:white}
th,td{border:1px solid #dce3ed;padding:10px;text-align:left;vertical-align:top}th{background:#173f7a;color:white;position:sticky;top:0}
.wa{background:#18a957;color:white;padding:7px 10px;border-radius:6px;text-decoration:none;display:inline-block}
tr:nth-child(even){background:#f6f9fd}a{color:#114fc4}</style></head><body>
<h1>""" + cell(title) + "</h1><div class='note'>Auto-refreshes every 10 seconds. Companies: " + str(len(rows)) + "</div><p><a href='FOUND_CONTACTS.html'>Numbers Found</a> | <a href='NUMBER_NOT_FOUND.html'>Numbers Not Found</a> | <a href='LIVE_CONTACTS.html'>All Results</a></p><table><thead><tr><th>Company</th><th>Origin</th><th>POL</th><th>POD</th><th>Customs Station</th><th>Public Number</th><th>WhatsApp</th><th>Email</th><th>Number Source</th><th>Status</th></tr></thead><tbody>" + "".join(table_rows) + "</tbody></table></body></html>"
    html_path.write_text(page, encoding="utf-8")
    return csv_path, html_path


def write_live_files(rows: list[dict[str, str]]) -> None:
    """Update all, found and not-found files after every company."""
    found = [row for row in rows if row.get("Public Contact Number", "").strip()]
    not_found = [row for row in rows if not row.get("Public Contact Number", "").strip()]
    write_contact_group("LIVE_CONTACTS", "All Live Results", rows)
    write_contact_group("FOUND_CONTACTS", "Numbers Found", found)
    write_contact_group("NUMBER_NOT_FOUND", "Numbers Not Found", not_found)


def write_output(source: Path, rows: list[dict[str, str]], source_column: str) -> Path:
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output = DEFAULT_OUTPUT / f"{source.stem}_contacts_{stamp}.xlsx"
    df = pd.DataFrame(rows, columns=OUTPUT_FIELDS)
    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="Contacts")
        ws = writer.book["Contacts"]
        ws.freeze_panes = "A2"
        ws.auto_filter.ref = ws.dimensions
        widths = {"A": 38, "B": 38, "C": 34, "D": 42, "E": 32, "F": 25, "G": 42,
                  "H": 36, "I": 55, "J": 42, "K": 65, "L": 12, "M": 22, "N": 18}
        for col, width in widths.items():
            ws.column_dimensions[col].width = width
        for cell in ws[1]:
            cell.font = cell.font.copy(bold=True, color="FFFFFF")
            cell.fill = __import__("openpyxl").styles.PatternFill("solid", fgColor="173F7A")
        for row in ws.iter_rows(min_row=2):
            for cell in row:
                cell.alignment = __import__("openpyxl").styles.Alignment(vertical="top", wrap_text=True)
        notes = writer.book.create_sheet("Run Summary")
        notes.append(["Source File", str(source)])
        notes.append(["Detected Company Column", source_column])
        notes.append(["Unique Companies", len(rows)])
        notes.append(["Important", "Numbers are publicly listed; telecom-active status is not guaranteed. Verify before outreach."])
    return output


def already_processed(con: sqlite3.Connection, path: Path) -> bool:
    stat = path.stat()
    return con.execute("SELECT 1 FROM files WHERE file_path=? AND size=? AND modified=?", (str(path), stat.st_size, stat.st_mtime)).fetchone() is not None


def process_file(con: sqlite3.Connection, path: Path, refresh: bool = False) -> None:
    if already_processed(con, path) and not refresh:
        return
    print(f"[{APP_NAME}] Reading {path.name}")
    companies, source_column, routes = read_companies(path)
    rows = []
    live_html = DEFAULT_OUTPUT / "LIVE_CONTACTS.html"
    print(f"  Live file: {live_html}")
    for index, company in enumerate(companies, 1):
        print(f"  {index}/{len(companies)} {company}")
        old = previous_result(con, company_key(company))
        if old and not refresh:
            old.update(routes.get(company_key(company), {}))
            rows.append(old)
            write_live_files(rows)
            continue
        result = research_company(company)
        result.update(routes.get(company_key(company), {}))
        print(f"    Public number: {result['Public Contact Number'] or 'Not found'}")
        print(f"    WhatsApp: {result['WhatsApp Number'] or 'Not found'}")
        save_result(con, result)
        rows.append(result)
        write_live_files(rows)
        print("    Live file updated - open LIVE_CONTACTS.html in your browser")
        time.sleep(2.0)
    output = write_output(path, rows, source_column)
    stat = path.stat()
    con.execute("INSERT OR REPLACE INTO files VALUES (?,?,?,?,?)", (str(path), stat.st_size, stat.st_mtime, datetime.now().isoformat(timespec="seconds"), str(output)))
    con.commit()
    print(f"[{APP_NAME}] Saved: {output}")


def scan_once(refresh: bool = False) -> None:
    DEFAULT_INPUT.mkdir(parents=True, exist_ok=True)
    DEFAULT_OUTPUT.mkdir(parents=True, exist_ok=True)
    con = db_connect()
    files = sorted(p for p in DEFAULT_INPUT.iterdir() if p.is_file() and p.suffix.lower() in SUPPORTED and not p.name.startswith("~$"))
    if not files:
        print(f"Put daily Excel/CSV files in: {DEFAULT_INPUT}")
    for path in files:
        try:
            process_file(con, path, refresh=refresh)
        except Exception as exc:
            print(f"ERROR {path.name}: {exc}", file=sys.stderr)
    con.close()


def main() -> None:
    parser = argparse.ArgumentParser(description=APP_NAME)
    parser.add_argument("--once", action="store_true", help="Scan once and exit")
    parser.add_argument("--refresh", action="store_true", help="Research previously processed companies again")
    parser.add_argument("--interval", type=int, default=60, help="Folder scan interval in seconds")
    args = parser.parse_args()
    if args.once:
        scan_once(refresh=args.refresh)
        return
    print(f"{APP_NAME} is watching {DEFAULT_INPUT}")
    while True:
        scan_once(refresh=args.refresh)
        time.sleep(max(30, args.interval))


if __name__ == "__main__":
    main()
