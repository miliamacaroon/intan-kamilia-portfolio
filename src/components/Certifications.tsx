import Reveal from "./Reveal";

const items = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services, 2026",
    icon: "medal" as const,
  },
  {
    title: "Certified Artificial Intelligence Proficient",
    issuer: "SG Academy (M) Sdn Bhd, 2026",
    icon: "medal" as const,
  },
  {
    title: "Anugerah Inovasi (Innovation Award)",
    issuer: "Opensoft Technologies, Feb 2026",
    icon: "star" as const,
  },
  {
    title: "Vice Chancellor Award",
    issuer: "UiTM Shah Alam & UiTM Kedah",
    icon: "star" as const,
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="mx-4 rounded-[48px] bg-sand px-6 py-16 sm:mx-8 sm:px-16 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="text-center text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">
          Recognition
        </div>
        <h2 className="font-display mt-3.5 mb-14 text-center text-[32px] sm:text-[40px]">
          Certifications &amp; Achievements
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-[22px]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={item.icon === "medal" ? "#E2703B" : "#5C8752"}
                strokeWidth="1.8"
                className="mt-0.5 flex-shrink-0"
              >
                {item.icon === "medal" ? (
                  <>
                    <circle cx="12" cy="8" r="6" />
                    <path d="M9 14l-2 7 5-3 5 3-2-7" />
                  </>
                ) : (
                  <path d="M12 2l2.4 6.6L21 10l-5 4.4L17.5 21 12 17.3 6.5 21 8 14.4 3 10l6.6-1.4z" />
                )}
              </svg>
              <div>
                <div className="text-[14.5px] font-semibold">{item.title}</div>
                <div className="mt-0.5 text-[13px] text-brown-soft">{item.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
