import Reveal from "./Reveal";

const categories = [
  { title: "Machine Learning / NLP", tags: ["RAG", "LLM Orchestration", "Vector DBs", "vLLM"] },
  { title: "Data Engineering", tags: ["ETL/ELT (KNIME)", "Hadoop/HDFS", "Star Schema", "Apache NiFi"] },
  { title: "Languages", tags: ["Python", "SQL", "R", "JavaScript"] },
  { title: "Infrastructure", tags: ["Linux / Windows Server", "SSH", "Watchdog Automation"] },
  { title: "Visualization & BI", tags: ["Tableau", "Power BI", "Jupyter"] },
  { title: "Databases", tags: ["PostgreSQL", "MySQL", "MongoDB"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-16 sm:px-20 sm:py-24">
      <svg width="140" height="90" viewBox="0 0 140 90" className="absolute top-16 left-16 hidden opacity-50 lg:block">
        <rect x="0" y="50" width="18" height="40" fill="#5C8752" rx="3" />
        <rect x="26" y="30" width="18" height="60" fill="#E2703B" rx="3" />
        <rect x="52" y="10" width="18" height="80" fill="#5C8752" rx="3" />
        <rect x="78" y="40" width="18" height="50" fill="#E0A429" rx="3" />
      </svg>

      <Reveal className="mx-auto max-w-6xl">
        <div className="text-center text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">Toolkit</div>
        <h2 className="font-display mt-3.5 mb-14 text-center text-[32px] sm:text-[40px]">Skills &amp; Tools</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-3xl bg-white p-[26px] shadow-[0_14px_40px_rgba(224,110,50,0.12)]">
              <div className="mb-3.5 text-[15px] font-semibold text-sage">{c.title}</div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-sage-soft px-4 py-2 text-[13px] font-semibold text-sage">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
