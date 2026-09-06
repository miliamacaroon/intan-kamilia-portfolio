"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function HeroBlobs() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: 40,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom+=600 top",
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="pointer-events-none absolute rounded-full bg-sand"
      style={{ width: 380, height: 380, top: 18, left: 40 }}
    />
  );
}
