import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Framer Motion–powered marquee — no CSS animation, so it integrates with
 * the Lenis scroll raf loop, pauses cleanly on hover, and never flickers.
 * speed: pixels per second
 */
function InfiniteTrack({
  items,
  speed = 55,
  direction = 1,
  tone = "cream",
}: {
  items: string[];
  speed?: number;
  direction?: 1 | -1;
  tone?: "cream" | "ink";
}) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current || !trackRef.current) return;
    const w = trackRef.current.scrollWidth / 2;
    let next = x.get() + (speed * direction * delta) / 1000;
    if (direction === 1 && next > 0) next -= w;
    if (direction === -1 && next < -w) next += w;
    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {doubled.map((c, i) => (
          <span key={i} className="flex items-center gap-14 pr-14">
            <span
              className={`serif italic text-3xl md:text-4xl tracking-tight whitespace-nowrap transition-colors
                ${tone === "ink" ? "text-cream/70 hover:text-mint" : "text-ink/70 hover:text-forest"}`}
            >
              {c}
            </span>
            <span className={`h-1.5 w-1.5 rounded-full ${tone === "ink" ? "bg-mint/40" : "bg-forest/30"}`} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientMarquee({ tone = "cream" }: { tone?: "cream" | "ink" }) {
  return (
    <div className="relative py-10 select-none overflow-hidden">
      {/* edge fades */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-28 z-10 ${tone === "ink" ? "bg-gradient-to-r from-ink to-transparent" : "bg-gradient-to-r from-background to-transparent"}`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-28 z-10 ${tone === "ink" ? "bg-gradient-to-l from-ink to-transparent" : "bg-gradient-to-l from-background to-transparent"}`} />
      <InfiniteTrack items={site.clients} tone={tone} direction={-1} speed={50} />
    </div>
  );
}
