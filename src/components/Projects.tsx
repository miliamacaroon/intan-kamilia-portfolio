import Reveal from "./Reveal";
import TourgetherDiagram from "./diagrams/TourgetherDiagram";
import NftResultsChart from "./diagrams/NftResultsChart";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-brown/10 bg-sand px-6 py-16 sm:px-20 sm:py-24"
    >
      <Reveal className="mx-auto max-w-6xl">
        <div className="text-center text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">
          Selected Work
        </div>
        <h2 className="font-display mt-3.5 mb-14 text-center text-[32px] sm:text-[40px]">Key Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(224,110,50,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5C8752" strokeWidth="1.8">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
              </svg>
            </div>
            <h3 className="font-display text-[24px]">TourGether</h3>
            <p className="text-sm leading-relaxed text-brown-soft">
              AI-powered travel itinerary system using YOLOv11 for landmark recognition and a hybrid
              RAG pipeline (FAISS + BM25) with LangGraph agentic orchestration.
            </p>

            <TourgetherDiagram />

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">Python</span>
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">LangGraph</span>
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">Supabase</span>
            </div>
            <a
              href="https://aitourgether.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-sm font-medium text-terracotta"
            >
              View Live Demo &rarr;
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-[0_14px_40px_rgba(224,110,50,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/14">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E2703B" strokeWidth="1.8">
                <path d="M4 19V9M11 19V5M18 19v-7" />
              </svg>
            </div>
            <h3 className="font-display text-[24px]">NFT Authenticity Analysis</h3>
            <p className="text-sm leading-relaxed text-brown-soft">
              Classified genuine vs. fraudulent NFT projects from Twitter sentiment using XGBoost,
              Random Forest and SVM, reaching 90.83% accuracy on cross-validated splits.
            </p>

            <NftResultsChart />

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">XGBoost</span>
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">Power BI</span>
              <span className="rounded-full bg-sage-soft px-3 py-1.5 text-xs font-semibold text-sage">NLP</span>
            </div>
            <div className="mt-1 text-sm font-medium text-brown-soft">Final Year Project</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
