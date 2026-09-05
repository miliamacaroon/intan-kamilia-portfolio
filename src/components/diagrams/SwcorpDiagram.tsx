export default function SwcorpDiagram() {
  return (
    <figure className="m-0 rounded-2xl bg-sage-soft p-4 pb-2 text-brown">
      <svg
        viewBox="0 0 660 175"
        role="img"
        aria-label="SWCORP ETL pipeline: source data moves from MariaDB and MySQL through a 3-node Hadoop HDFS cluster via HDFS Connector and SSH ingestion, into a PostgreSQL data warehouse using star-schema data marts, which Tableau queries for dashboards."
        className="block h-auto w-full"
      >
        <defs>
          <marker id="swcorp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        <rect x="10" y="70" width="130" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--brown)" }} strokeWidth={2} />
        <circle cx="10" cy="70" r="11" style={{ fill: "var(--brown)" }} />
        <text x="10" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">1</text>
        <ellipse cx="75" cy="90" rx="8" ry="3" fill="none" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <line x1="67" y1="90" x2="67" y2="100" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <line x1="83" y1="90" x2="83" y2="100" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <path d="M67,100 A8,3 0 0 0 83,100" fill="none" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <text x="75" y="122" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--brown)">MariaDB / MySQL</text>

        <rect x="170" y="70" width="150" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--sage)" }} strokeWidth={2} />
        <circle cx="170" cy="70" r="11" style={{ fill: "var(--sage)" }} />
        <text x="170" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">2</text>
        <rect x="238" y="83" width="14" height="14" rx="2" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="245" y1="80" x2="245" y2="83" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="245" y1="97" x2="245" y2="100" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="235" y1="90" x2="238" y2="90" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <line x1="252" y1="90" x2="255" y2="90" style={{ stroke: "var(--sage)" }} strokeWidth={1.4} />
        <text x="245" y="114" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">Hadoop / HDFS</text>
        <text x="245" y="128" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(3-node cluster)</text>

        <rect x="350" y="70" width="150" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} />
        <circle cx="350" cy="70" r="11" style={{ fill: "var(--terracotta)" }} />
        <text x="350" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">3</text>
        <ellipse cx="425" cy="84" rx="8" ry="3" fill="none" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="417" y1="84" x2="417" y2="94" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="433" y1="84" x2="433" y2="94" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <path d="M417,94 A8,3 0 0 0 433,94" fill="none" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <text x="425" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">PostgreSQL</text>
        <text x="425" y="128" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(star schema)</text>

        <rect x="530" y="70" width="110" height="64" rx="10" fill="var(--white)" style={{ stroke: "var(--gold)" }} strokeWidth={2} />
        <circle cx="530" cy="70" r="11" style={{ fill: "var(--gold)" }} />
        <text x="530" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--white)">4</text>
        <rect x="577" y="83" width="16" height="12" rx="2" fill="none" style={{ stroke: "var(--gold)" }} strokeWidth={1.4} />
        <line x1="577" y1="88" x2="593" y2="88" style={{ stroke: "var(--gold)" }} strokeWidth={1.2} />
        <line x1="583" y1="83" x2="583" y2="95" style={{ stroke: "var(--gold)" }} strokeWidth={1.2} />
        <text x="585" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">Tableau</text>

        <line x1="140" y1="102" x2="168" y2="102" style={{ stroke: "var(--sage)" }} strokeWidth={2} markerEnd="url(#swcorp-arrow)" />
        <line x1="320" y1="102" x2="348" y2="102" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} markerEnd="url(#swcorp-arrow)" />
        <line x1="500" y1="102" x2="528" y2="102" style={{ stroke: "var(--gold)" }} strokeWidth={2} markerEnd="url(#swcorp-arrow)" />

        <text x="154" y="55" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">HDFS Connector, SSH</text>
        <text x="334" y="55" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">star-schema load</text>
        <text x="514" y="55" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">dashboard query</text>
      </svg>
      <figcaption className="mt-1.5 text-center text-xs text-brown-soft">
        SWCORP: source systems to warehouse to dashboard.
      </figcaption>
    </figure>
  );
}
