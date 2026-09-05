export default function MbpjDiagram() {
  return (
    <figure className="m-0 rounded-2xl bg-sage-soft p-4 pb-2 text-brown">
      <svg
        viewBox="0 0 680 175"
        role="img"
        aria-label="MBPJ chatbot retrieval pipeline: a user query is embedded and matched against the pgvector document store, the retrieved context feeds the vLLM-served chat model, which generates the answer; 6,000 noise chunks are filtered out of the store before retrieval."
        className="block h-auto w-full"
      >
        <defs>
          <marker id="mbpj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        <rect x="10" y="70" width="130" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--brown)" }} strokeWidth={2} />
        <circle cx="10" cy="70" r="11" style={{ fill: "var(--brown)" }} />
        <text x="10" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">1</text>
        <circle cx="73" cy="90" r="4.5" fill="none" style={{ stroke: "var(--brown)" }} strokeWidth={1.6} />
        <line x1="76" y1="93" x2="80" y2="97" style={{ stroke: "var(--brown)" }} strokeWidth={1.6} strokeLinecap="round" />
        <text x="75" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">User Query</text>

        <rect x="180" y="70" width="140" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--sage)" }} strokeWidth={2} />
        <circle cx="180" cy="70" r="11" style={{ fill: "var(--sage)" }} />
        <text x="180" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">2</text>
        <ellipse cx="250" cy="84" rx="8" ry="3" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="242" y1="84" x2="242" y2="94" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="258" y1="84" x2="258" y2="94" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <path d="M242,94 A8,3 0 0 0 258,94" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <text x="250" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">pgvector Store</text>
        <text x="250" y="152" textAnchor="middle" fontSize="11" style={{ fill: "var(--terracotta)" }}>&#8722;6,000 noise chunks</text>

        <rect x="360" y="70" width="150" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} />
        <circle cx="360" cy="70" r="11" style={{ fill: "var(--terracotta)" }} />
        <text x="360" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">3</text>
        <rect x="428" y="83" width="14" height="14" rx="2" fill="none" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="435" y1="80" x2="435" y2="83" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="435" y1="97" x2="435" y2="100" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="425" y1="90" x2="428" y2="90" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="442" y1="90" x2="445" y2="90" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <text x="435" y="114" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">vLLM</text>
        <text x="435" y="128" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(chat model)</text>

        <rect x="550" y="70" width="120" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--gold)" }} strokeWidth={2} />
        <circle cx="550" cy="70" r="11" style={{ fill: "var(--gold)" }} />
        <text x="550" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">4</text>
        <rect x="602" y="83" width="16" height="11" rx="3" fill="none" style={{ stroke: "var(--gold)" }} strokeWidth={1.4} />
        <path d="M606,94 L604,98 L609,94 Z" style={{ fill: "var(--gold)" }} />
        <text x="610" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">Answer</text>

        <line x1="140" y1="102" x2="178" y2="102" style={{ stroke: "var(--sage)" }} strokeWidth={2} markerEnd="url(#mbpj-arrow)" />
        <line x1="320" y1="102" x2="358" y2="102" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} markerEnd="url(#mbpj-arrow)" />
        <line x1="510" y1="102" x2="548" y2="102" style={{ stroke: "var(--gold)" }} strokeWidth={2} markerEnd="url(#mbpj-arrow)" />

        <text x="159" y="55" textAnchor="middle" fontSize="11" fill="var(--brown-soft)">embed + search</text>
        <text x="339" y="55" textAnchor="middle" fontSize="11" fill="var(--brown-soft)">top-k context</text>
        <text x="529" y="55" textAnchor="middle" fontSize="11" fill="var(--brown-soft)">generate</text>
      </svg>
      <figcaption className="mt-1.5 text-center text-xs text-brown-soft">
        MBPJ chatbot: how a query becomes an answer, after the noise-chunk cleanup.
      </figcaption>
    </figure>
  );
}
