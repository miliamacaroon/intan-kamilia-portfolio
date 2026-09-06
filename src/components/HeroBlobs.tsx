"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function HeroBlobs() {
  const goldRef = useRef<SVGSVGElement>(null);
  const sandRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (goldRef.current) {
        gsap.to(goldRef.current, {
          y: 60,
          scrollTrigger: {
            trigger: goldRef.current,
            start: "top top",
            end: "bottom+=600 top",
            scrub: 1,
          },
        });
      }
      if (sandRef.current) {
        gsap.to(sandRef.current, {
          y: 30,
          scrollTrigger: {
            trigger: sandRef.current,
            start: "top top",
            end: "bottom+=600 top",
            scrub: 1,
          },
        });
      }
    });
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <svg
        ref={goldRef}
        width="420"
        height="420"
        viewBox="0 0 420 420"
        className="pointer-events-none absolute -top-5 -left-5"
      >
        <path
          d="M210,30 C310,30 380,110 380,210 C380,320 300,390 195,385 C90,380 30,300 35,200 C40,105 115,30 210,30 Z"
          fill="#E0A429"
          opacity="0.3"
        />
      </svg>
      <svg
        ref={sandRef}
        width="420"
        height="420"
        viewBox="0 0 420 420"
        className="pointer-events-none absolute top-5 left-[30px]"
      >
        <path
          d="M215,55 C300,55 355,125 355,210 C355,300 285,355 200,350 C110,345 60,285 65,205 C70,120 135,55 215,55 Z"
          fill="#F4DFB2"
          opacity="0.9"
        />
      </svg>
    </>
  );
}
