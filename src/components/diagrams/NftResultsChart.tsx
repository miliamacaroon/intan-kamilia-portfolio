const metrics = [
  { label: "Accuracy", value: 90.83, color: "var(--sage)" },
  { label: "Precision", value: 90, color: "var(--terracotta)" },
  { label: "F1-Score", value: 90, color: "var(--gold)" },
];

const CHART_W = 480;
const BAR_MAX_W = 300;
const ROW_H = 40;

export default function NftResultsChart() {
  return (
    <figure className="m-0 rounded-2xl bg-bg p-4 pb-3">
      <svg
        viewBox={`0 0 ${CHART_W} ${metrics.length * ROW_H + 20}`}
        role="img"
        aria-label="Model performance on the NFT authenticity classification task: 90.83% accuracy, 90% precision, and 90% F1-score, all using the XGBoost model with an 80:20 cross-validated split."
        className="block h-auto w-full"
      >
        {metrics.map((m, i) => {
          const y = i * ROW_H + 10;
          const w = (m.value / 100) * BAR_MAX_W;
          return (
            <g key={m.label}>
              <text x="0" y={y + 14} fontSize="12.5" fontWeight="600" fill="var(--brown)">
                {m.label}
              </text>
              <rect x="90" y={y} width={BAR_MAX_W} height="18" rx="9" fill="var(--sage-soft)" />
              <rect x="90" y={y} width={w} height="18" rx="9" fill={m.color} />
              <text x={90 + BAR_MAX_W + 12} y={y + 14} fontSize="12.5" fontWeight="700" fill="var(--brown)">
                {m.value}%
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-1.5 text-center text-xs text-brown-soft">
        XGBoost performance, 80:20 cross-validated split.
      </figcaption>
    </figure>
  );
}
