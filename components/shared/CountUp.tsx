"use client";

import { useEffect, useRef, useState } from "react";
interface CountUpProps { end: number; duration?: number; prefix?: string; suffix?: string; }

export default function CountUp({ end, duration = 1500, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!el || motion.matches || !("IntersectionObserver" in window) || duration <= 0) return;
    let frame = 0;
    const finish = () => { if (motion.matches) { cancelAnimationFrame(frame); setCount(end); } };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || motion.matches) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round((1 - (1 - progress) ** 3) * end));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.unobserve(el);
    }, { threshold: 0.5 });
    observer.observe(el);
    motion.addEventListener("change", finish);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); motion.removeEventListener("change", finish); };
  }, [end, duration]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
