export type Section = {
  title: string;
  paras?: string[];
  items?: string[];
  steps?: string[];
  table?: { head: string[]; rows: string[][] };
};

export default function ContentSections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.title} className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">{s.title}</h2>
          {s.paras?.map((p, i) => (
            <p key={i} className="mt-3 leading-7 text-gray-700">{p}</p>
          ))}
          {s.items && (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              {s.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          )}
          {s.steps && (
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
              {s.steps.map((it, i) => <li key={i}>{it}</li>)}
            </ol>
          )}
          {s.table && (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border text-left">
                <thead className="bg-gray-100">
                  <tr>{s.table.head.map((h) => <th key={h} className="border p-3">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r, i) => (
                    <tr key={i}>{r.map((c, j) => <td key={j} className={`border p-3 ${j === 0 ? "font-bold" : ""}`}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </>
  );
}
