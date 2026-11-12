"use client";

import { useRef, useEffect } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    let animation: Animation | undefined;
    const stop = () => { if (motion.matches) animation?.cancel(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      // Animate within the layout box; content remains visible without JavaScript.
      if (!motion.matches && el.animate) {
        animation = el.animate(
          [{ opacity: 0.35, clipPath: direction === "none" ? "inset(0)" : "inset(0 0 8% 0)" },
           { opacity: 1, clipPath: "inset(0)" }],
          { duration: 500, delay, easing: "ease-out" }
        );
      }
      observer.unobserve(el);
    }, { threshold: 0.08 });
    observer.observe(el);
    motion.addEventListener("change", stop);
    return () => { observer.disconnect(); animation?.cancel(); motion.removeEventListener("change", stop); };
  }, [delay, direction]);
  return <div ref={ref} className={`min-w-0 ${className}`}>{children}</div>;
}
