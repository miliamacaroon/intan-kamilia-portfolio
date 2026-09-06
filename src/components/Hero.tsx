import Image from "next/image";
import Reveal from "./Reveal";
import HeroBlobs from "./HeroBlobs";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:px-20 sm:pt-20">
      <svg
        width="360"
        height="300"
        viewBox="0 0 360 300"
        className="pointer-events-none absolute top-10 right-5 hidden opacity-35 lg:block"
      >
        <circle cx="60" cy="50" r="5" fill="#5C8752" />
        <circle cx="170" cy="30" r="4" fill="#E2703B" />
        <circle cx="260" cy="90" r="6" fill="#5C8752" />
        <circle cx="120" cy="140" r="4" fill="#E2703B" />
        <circle cx="300" cy="180" r="5" fill="#5C8752" />
        <circle cx="40" cy="200" r="4" fill="#5C8752" />
        <path d="M60,50 C110,20 140,20 170,30" stroke="#5C8752" strokeWidth="1.3" fill="none" />
        <path d="M170,30 C210,50 230,60 260,90" stroke="#E2703B" strokeWidth="1.3" fill="none" />
        <path d="M170,30 C150,70 140,100 120,140" stroke="#5C8752" strokeWidth="1.3" fill="none" />
        <path d="M120,140 C200,150 260,150 300,180" stroke="#5C8752" strokeWidth="1.3" fill="none" />
        <path d="M120,140 C90,160 60,180 40,200" stroke="#E2703B" strokeWidth="1.3" fill="none" />
        <path d="M260,90 C280,120 290,150 300,180" stroke="#5C8752" strokeWidth="1.3" fill="none" />
      </svg>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="flex flex-1 flex-col gap-6 text-center lg:text-left">
          <div className="text-[13px] font-semibold tracking-[3px] text-terracotta uppercase">
            AI Engineer &nbsp;&middot;&nbsp; Data Engineer
          </div>
          <h1 className="font-display text-[42px] leading-[1.08] font-medium sm:text-[58px]">
            Building intelligent
            <br />
            systems, one
            <br />
            <span className="text-terracotta italic">pipeline</span> at a time.
          </h1>
          <p className="mx-auto max-w-[480px] text-[17px] leading-[1.7] text-brown-soft lg:mx-0">
            I design and deploy production AI/LLM systems and large-scale data pipelines, from
            retrieval-augmented chatbots to Hadoop-to-warehouse ETL. Currently based in Putrajaya,
            Malaysia.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-terracotta to-[#D9531E] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(226,112,59,0.45)]"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-sage px-7 py-3.5 text-[15px] font-semibold text-sage"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-2 flex justify-center gap-3 lg:justify-start">
            <IconLink label="LinkedIn" href="https://www.linkedin.com/in/intan-kamilia-b518aa320/">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 17v-7" />
            </IconLink>
            <IconLink label="GitHub" href="https://github.com/miliamacaroon">
              <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.55-3.04-1.2-3.04-1.2-.4-1.05-1-1.33-1-1.33-.83-.57.06-.56.06-.56.9.06 1.38.94 1.38.94.8 1.4 2.1 1 2.62.76.08-.6.32-1 .58-1.23-2-.23-4.1-1-4.1-4.4 0-.98.35-1.77.92-2.4-.1-.23-.4-1.15.1-2.4 0 0 .75-.24 2.47.92a8.4 8.4 0 0 1 4.5 0c1.7-1.16 2.46-.92 2.46-.92.5 1.25.2 2.17.1 2.4.57.63.92 1.42.92 2.4 0 3.4-2.1 4.16-4.1 4.4.33.28.62.85.62 1.7v2.5c0 .24.16.52.63.43A9 9 0 0 0 12 3z" />
            </IconLink>
            <IconLink label="Email" href="mailto:intankamilia2201@gmail.com">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </IconLink>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative flex flex-1 justify-center">
          <div className="relative h-[420px] w-[420px]">
            <HeroBlobs />
            <div
              className="absolute overflow-hidden rounded-full"
              style={{ width: 280, height: 280, top: 68, left: 90 }}
            >
              <Image
                src="/profile-cutout.png"
                alt="Intan Kamilia"
                fill
                sizes="280px"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
            <div className="absolute right-2 bottom-14 flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3.5 shadow-[0_12px_30px_rgba(61,42,30,0.15)]">
              <div className="h-2 w-2 rounded-full bg-sage" />
              <div className="text-[13px] text-brown-soft">Open to new roles</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/35 transition-colors hover:border-terracotta hover:bg-gold-soft"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D2A1E" strokeWidth="1.8">
        {children}
      </svg>
    </a>
  );
}
