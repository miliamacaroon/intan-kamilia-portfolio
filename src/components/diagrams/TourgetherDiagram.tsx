export default function TourgetherDiagram() {
  return (
    <figure className="m-0 mt-1 rounded-2xl bg-bg p-4 pb-2 text-brown">
      <svg
        viewBox="0 0 720 225"
        role="img"
        aria-label="TourGether hybrid retrieval: a user photo is identified by YOLOv11 into a landmark, while a text query is matched by FAISS plus BM25 hybrid search; both results converge into the LLM, which generates the final itinerary."
        className="block h-auto w-full"
      >
        <defs>
          <marker id="tg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        <rect x="10" y="25" width="130" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--brown)" }} strokeWidth={2} />
        <circle cx="10" cy="25" r="10" style={{ fill: "var(--brown)" }} />
        <text x="10" y="29" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">1</text>
        <rect x="65" y="38" width="20" height="15" rx="2" fill="none" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <circle cx="70" cy="43" r="1.8" style={{ fill: "var(--brown)" }} />
        <path d="M68,52 L76,45 L85,52" fill="none" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <text x="75" y="72" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">User Photo</text>

        <rect x="210" y="25" width="160" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--sage)" }} strokeWidth={2} />
        <circle cx="210" cy="25" r="10" style={{ fill: "var(--sage)" }} />
        <text x="210" y="29" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">2</text>
        <rect x="280" y="38" width="20" height="15" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <path d="M276,38 v-4 h4 M300,38 v-4 h-4 M276,53 v4 h4 M300,53 v4 h-4" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <text x="290" y="65" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">YOLOv11</text>
        <text x="290" y="79" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(landmark ID)</text>

        <rect x="10" y="155" width="130" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--brown)" }} strokeWidth={2} />
        <circle cx="10" cy="155" r="10" style={{ fill: "var(--brown)" }} />
        <text x="10" y="159" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">1</text>
        <line x1="65" y1="171" x2="85" y2="171" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <line x1="65" y1="178" x2="85" y2="178" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <line x1="65" y1="185" x2="85" y2="185" style={{ stroke: "var(--brown)" }} strokeWidth={1.4} />
        <circle cx="70" cy="171" r="2" style={{ fill: "var(--brown)" }} />
        <circle cx="80" cy="178" r="2" style={{ fill: "var(--brown)" }} />
        <circle cx="72" cy="185" r="2" style={{ fill: "var(--brown)" }} />
        <text x="75" y="202" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">Query / Prefs</text>

        <rect x="210" y="155" width="160" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--sage)" }} strokeWidth={2} />
        <circle cx="210" cy="155" r="10" style={{ fill: "var(--sage)" }} />
        <text x="210" y="159" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">2</text>
        <ellipse cx="290" cy="170" rx="8" ry="3" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <line x1="282" y1="170" x2="282" y2="180" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <line x1="298" y1="170" x2="298" y2="180" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <path d="M282,180 A8,3 0 0 0 298,180" fill="none" style={{ stroke: "var(--sage)" }} strokeWidth={1.3} />
        <text x="290" y="198" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">FAISS + BM25</text>
        <text x="290" y="212" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(hybrid retrieval)</text>

        <rect x="430" y="90" width="160" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--terracotta)" }} strokeWidth={2.2} />
        <circle cx="430" cy="90" r="10" style={{ fill: "var(--terracotta)" }} />
        <text x="430" y="94" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">3</text>
        <rect x="503" y="103" width="14" height="14" rx="2" fill="none" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="510" y1="100" x2="510" y2="103" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="510" y1="117" x2="510" y2="120" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="500" y1="110" x2="503" y2="110" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <line x1="517" y1="110" x2="520" y2="110" style={{ stroke: "var(--terracotta)" }} strokeWidth={1.4} />
        <text x="510" y="134" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">LLM Itinerary</text>
        <text x="510" y="147" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">(GPT)</text>

        <rect x="630" y="90" width="80" height="60" rx="10" fill="var(--white)" style={{ stroke: "var(--gold)" }} strokeWidth={2} />
        <circle cx="630" cy="90" r="10" style={{ fill: "var(--gold)" }} />
        <text x="630" y="94" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--white)">4</text>
        <line x1="670" y1="102" x2="670" y2="122" style={{ stroke: "var(--gold)" }} strokeWidth={1.5} />
        <path d="M670,103 L682,107 L670,111 Z" style={{ fill: "var(--gold)" }} />
        <text x="670" y="139" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--brown)">Trip</text>

        <line x1="140" y1="55" x2="208" y2="55" style={{ stroke: "var(--sage)" }} strokeWidth={2} markerEnd="url(#tg-arrow)" />
        <line x1="140" y1="185" x2="208" y2="185" style={{ stroke: "var(--sage)" }} strokeWidth={2} markerEnd="url(#tg-arrow)" />
        <line x1="370" y1="55" x2="428" y2="112" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} markerEnd="url(#tg-arrow)" />
        <line x1="370" y1="185" x2="428" y2="132" style={{ stroke: "var(--terracotta)" }} strokeWidth={2} markerEnd="url(#tg-arrow)" />
        <line x1="590" y1="120" x2="628" y2="120" style={{ stroke: "var(--gold)" }} strokeWidth={2} markerEnd="url(#tg-arrow)" />

        <text x="174" y="43" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">detect</text>
        <text x="174" y="173" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">search</text>
        <text x="610" y="105" textAnchor="middle" fontSize="10.5" fill="var(--brown-soft)">generate</text>
      </svg>
      <figcaption className="mt-1.5 text-center text-xs text-brown-soft">
        Two retrieval paths (image and text) run in parallel and converge before the LLM writes the itinerary.
      </figcaption>
    </figure>
  );
}
