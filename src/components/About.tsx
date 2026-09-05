import Reveal from "./Reveal";

const tags = [
  { label: "Python", variant: "default" },
  { label: "RAG & LLMs", variant: "default" },
  { label: "Hadoop & PostgreSQL", variant: "default" },
  { label: "Malay (Native)", variant: "terracotta" },
  { label: "English (Proficient)", variant: "terracotta" },
] as const;

export default function About() {
  return (
    <section id="about" className="relative mx-4 overflow-hidden rounded-[48px] bg-sand px-6 py-16 sm:mx-8 sm:px-16 sm:py-24">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-8 -bottom-8 z-0 opacity-15"
      >
        <text x="0" y="150" fontFamily="'Courier New', monospace" fontWeight="700" fontSize="150" fill="#3D2A1E">
          {"</>"}
        </text>
      </svg>

      <Reveal className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-18">
        <div className="lg:flex-[0.5]">
          <div className="text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">About Me</div>
          <h2 className="font-display mt-3.5 text-[32px] leading-[1.2] sm:text-[40px]">
            Where data quality meets applied AI.
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <p className="text-[17px] leading-[1.8] text-brown-soft">
            I&apos;m an AI Engineer and Data Engineer with hands-on experience designing and deploying
            production Machine Learning and LLM systems, including RAG pipelines, vLLM model serving,
            and chatflow orchestration, alongside large-scale ETL pipelines and data warehouses.
          </p>
          <p className="text-[17px] leading-[1.8] text-brown-soft">
            My background spans a Bachelor&apos;s in Intelligent Systems Engineering from UiTM Shah
            Alam and a machine learning research exchange in Japan, published at an international
            conference. I believe good AI starts with good data, and a lot of my work sits at exactly
            that intersection.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {tags.map((t) => (
              <span
                key={t.label}
                className={
                  t.variant === "terracotta"
                    ? "inline-flex items-center rounded-full bg-terracotta/16 px-4 py-2 text-[13px] font-semibold text-terracotta"
                    : "inline-flex items-center rounded-full bg-sage-soft px-4 py-2 text-[13px] font-semibold text-sage"
                }
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
