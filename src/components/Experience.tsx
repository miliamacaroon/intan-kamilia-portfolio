import Reveal from "./Reveal";
import MbpjDiagram from "./diagrams/MbpjDiagram";
import SwcorpDiagram from "./diagrams/SwcorpDiagram";

const subProjects = [
  {
    title: "MBPJ AI Chatbot",
    body: "Administered production RAG chatflows; diagnosed a scraper bug that flooded a document store with 6,000+ noise chunks, restoring answer accuracy.",
  },
  {
    title: "SWCORP Data Pipelines",
    body: "Built ETL/ELT pipelines (KNIME) from MariaDB into a Hadoop cluster, then into a PostgreSQL warehouse with star-schema data marts.",
  },
  {
    title: "KPDN Pipelines",
    body: "Maintain production Apache NiFi pipelines, reducing pipeline duration by trimming unnecessary transformation nodes.",
  },
  {
    title: "JDN Agentic AI Platform",
    body: "Currently building a 6-agent LangGraph supervisor system with a FastAPI services layer, at the requirements-gathering stage.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 sm:px-20 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="text-center text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">
          Career Path
        </div>
        <h2 className="font-display mt-3.5 mb-14 text-center text-[32px] sm:text-[40px]">Experience</h2>

        <div className="flex gap-8 sm:gap-10">
          <div
            className="mt-2 hidden w-[3px] flex-shrink-0 sm:block"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #5C8752 0, #5C8752 6px, transparent 6px, transparent 14px)",
            }}
          />

          <div className="flex flex-1 flex-col gap-8">
            <div className="rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(224,110,50,0.12)] sm:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-[22px] sm:text-[26px]">Opensoft Technologies Sdn Bhd</h3>
                <div className="text-sm text-sage italic">Oct 2024 &ndash; Present</div>
              </div>
              <div className="mt-1 text-[15px] font-medium text-terracotta">AI Engineer &amp; Data Engineer</div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {subProjects.map((p) => (
                  <div key={p.title} className="rounded-2xl bg-sage-soft p-5">
                    <div className="mb-2 text-[15px] font-semibold">{p.title}</div>
                    <p className="text-[13.5px] leading-relaxed text-brown-soft">{p.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <MbpjDiagram />
                <SwcorpDiagram />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-7 shadow-[0_14px_40px_rgba(224,110,50,0.12)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[21px]">Ube College, Japan</h3>
                  <div className="text-[13px] text-sage italic">Oct 2023 &ndash; Jan 2024</div>
                </div>
                <div className="mt-1 text-sm font-medium text-terracotta">
                  Researcher (Acoustic and Machine Learning) Intern
                </div>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-brown-soft">
                  Respiratory disease detection from auscultated sounds using VGG16; published at CGIP
                  2024, Kyoto University.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-7 shadow-[0_14px_40px_rgba(224,110,50,0.12)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[21px]">Northern Asia Resources</h3>
                  <div className="text-[13px] text-sage italic">Sep 2021 &ndash; Feb 2022</div>
                </div>
                <div className="mt-1 text-sm font-medium text-terracotta">
                  Business Analyst &amp; Website Designer Intern
                </div>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-brown-soft">
                  Built an automated payroll system with QR-based attendance tracking and leave
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
