JILANI CONTACT FINDER - WINDOWS SETUP
=====================================

PURPOSE
Reads daily XLS, XLSX or CSV customs/import-export files, extracts unique
importer/exporter company names, searches public web sources and saves a
contact-enriched Excel file.

INSTALLATION
1. Extract this ZIP to a permanent folder such as C:\JilaniContactFinder.
2. Install Python 3.11+ from https://www.python.org/downloads/windows/
   and tick "Add Python to PATH" during installation.
3. Double-click install.bat once.

DAILY USE
Save or move the daily spreadsheet into:
  Downloads\Company_Lead_Files

Results will appear automatically in:
  Downloads\Contact_Finder_Results

WHILE FINDING CONTACTS
Open Downloads\Contact_Finder_Results\LIVE_CONTACTS.html in Chrome. It refreshes
every 10 seconds and shows each company as soon as it is found. Phone numbers,
WhatsApp buttons and source links are clickable. LIVE_CONTACTS.csv is updated
at the same time for Excel use. You do not need to wait for the full run.

ROUTE DETAILS
Live pages and CSV/Excel results include Origin Country, POL (Port of Loading),
POD (Port of Discharge), and Customs Station. Common column-name variations are
detected automatically. If a route field is absent, the result says
"Not provided in source file" instead of guessing.

SEPARATE RESULT FILES
- FOUND_CONTACTS.html / .csv: companies where a public number was found.
- NUMBER_NOT_FOUND.html / .csv: companies where no public number was found.
Both pages refresh automatically, saving time during outreach and manual search.

The agent starts automatically when you sign in to Windows. To test manually,
double-click run_once.bat.

LIVE/PUBLIC NUMBER REFRESH
Double-click run_refresh.bat to re-check every saved company. During the run,
the screen shows each public contact and WhatsApp number as it is found.

SAMPLE FILE RESULT
The supplied "4 oct 22.xls" contains 56 shipment rows and 17 unique importer
names in the "Importer Name on GD" column. The agent will research those 17
companies once, not all 56 repeated shipment rows.

OUTPUT COLUMNS
Company Name, Official Website, Business Email, Other Emails,
Public Contact Number, WhatsApp Number, WhatsApp Chat Link,
Number Verification, Number Source URL, LinkedIn Company Page, Source URLs,
Confidence, Status, Checked At.

IMPORTANT
- Only public business contact information is collected.
- Numbers are normalized to +92 format when they are Pakistani numbers.
- "Publicly listed" does not guarantee that a SIM/line is currently active.
- Search engines and websites can rate-limit or block automated requests.
- "Manual review" means no reliable public contact was found automatically.
- Always verify details from Source URLs before contacting a company.
- The original spreadsheet is never edited.
- Do not place unrelated private spreadsheets in Company_Lead_Files.
