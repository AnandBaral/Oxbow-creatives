import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Animates a numeric stat counting up from 0 when it scrolls into view.
 * Parses leading digits from strings like "100+", "4.5x", "1.3B" and
 * animates the numeric portion while preserving prefix/suffix text.
 * Falls back to a plain fade for non-numeric values (e.g. "Jaipur").
 */
export function AnimatedCounter({
  value,
  className = "",
  duration = 1.4,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) {
    // No numeric portion — simple fade
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {value}
      </motion.span>
    );
  }

  const [, prefix, numStr, suffix] = match;
  const hasDecimal = numStr.includes(".");
  const target = parseFloat(numStr.replace(/,/g, ""));

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(target);
  }, [inView, target, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(hasDecimal ? v.toFixed(1) : Math.round(v).toLocaleString());
    });
    return unsub;
  }, [spring, hasDecimal]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
