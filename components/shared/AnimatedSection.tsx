"use client";

import { useRef, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all ease-out";
  const duration = "duration-700";

  const getTransform = () => {
    if (direction === "up") return visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
    if (direction === "left") return visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0";
    if (direction === "right") return visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0";
    return visible ? "opacity-100" : "opacity-0";
  };

  return (
    <div
      ref={ref}
      className={`${base} ${duration} ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
