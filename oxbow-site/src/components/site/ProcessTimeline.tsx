import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Discover", desc: "We learn about your business, audience and goals before suggesting anything." },
  { n: "02", title: "Plan",     desc: "A clear scope — what gets built, in what order, and by when." },
  { n: "03", title: "Design",   desc: "Brand and creative direction, shared for feedback before development begins." },
  { n: "04", title: "Build",    desc: "Development, content and campaign setup, with regular check-ins along the way." },
  { n: "05", title: "Launch & Support", desc: "We go live, watch closely, and stay on for updates and ongoing marketing." },
];

/**
 * Signature interactive: scroll-driven process timeline.
 * A vertical thread fills as you scroll; each step lights up as it crosses
 * the centre. Honors reduced motion (all steps revealed immediately).
 */
export function ProcessTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) { setProgress(1); return; }
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.4;
      const passed = vh * 0.7 - r.top;
      const p = Math.max(0, Math.min(1, passed / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="relative mt-20">
      {/* The thread */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px md:-translate-x-1/2 bg-cream/10" />
      <div
        className="absolute left-4 md:left-1/2 top-0 w-px -translate-x-px md:-translate-x-1/2 bg-gradient-to-b from-terracotta via-gold to-indigo origin-top transition-transform"
        style={{ height: "100%", transform: `scaleY(${progress})`, transitionDuration: "200ms" }}
      />

      <ol className="space-y-16 md:space-y-28">
        {steps.map((s, i) => {
          const active = progress > (i + 0.4) / steps.length;
          const side = i % 2 === 0 ? "md:pr-[55%] md:text-right" : "md:pl-[55%] md:ml-auto md:text-left";
          return (
            <li key={s.n} className="relative pl-14 md:pl-0">
              {/* Node */}
              <span
                className={`absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid place-items-center rounded-full transition-all duration-500 ${
                  active ? "h-5 w-5 bg-terracotta ring-4 ring-terracotta/20" : "h-3 w-3 bg-cream/30"
                }`}
                aria-hidden
              />
              <div
                className={`${side} transition-all duration-700`}
                style={{
                  opacity: active ? 1 : 0.35,
                  transform: active ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold">Step {s.n}</div>
                <h3 className="mt-3 font-display text-3xl md:text-5xl leading-[1] text-cream">{s.title}</h3>
                <p className="mt-4 max-w-md md:inline-block text-cream/70 leading-relaxed">{s.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
