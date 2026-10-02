import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const items = [
  "PR & Influencer Marketing",
  "Campaign Shoot",
  "Photography & Videography",
  "Website Development",
  "Social Media Management",
  "Content Creation",
  "Branding & Design",
  "SEO & Digital Marketing",
  "Performance Marketing",
];

function Strip({ direction = 1, speed = 38 }: { direction?: 1 | -1; speed?: number }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const doubled = [...items, ...items];

  useAnimationFrame((_, delta) => {
    if (paused.current || !trackRef.current) return;
    const w = trackRef.current.scrollWidth / 2;
    let next = x.get() + (speed * direction * delta) / 1000;
    if (direction === 1 && next > 0) next -= w;
    if (direction === -1 && next < -w) next += w;
    x.set(next);
  });

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
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-10 px-8 text-2xl md:text-4xl font-semibold tracking-tight text-ink hover:text-forest transition-colors cursor-default"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-forest/40 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ServiceStrip() {
  return (
    <div className="bg-cream py-6 border-y border-border overflow-hidden">
      <Strip direction={-1} speed={42} />
    </div>
  );
}
