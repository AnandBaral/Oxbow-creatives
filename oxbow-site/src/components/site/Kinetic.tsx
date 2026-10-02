"use client";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

/* ─── Shared easing curves (Apple-grade) ─────────────────────────────────── */
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const SPRING = { type: "spring", stiffness: 90, damping: 22, mass: 0.6 };
export const SPRING_FAST = { type: "spring", stiffness: 160, damping: 28, mass: 0.4 };

/* ─── FadeUp ─────────────────────────────────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 36,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── FadeIn (opacity only, no vertical movement) ──────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.1, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container — wraps FadeUp children for coordinated reveals ── */
const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_EXPO },
  },
};

export function StaggerGroup({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

/* ─── Kinetic word-by-word heading reveal ────────────────────────────────── */
export function Kinetic({
  text,
  as: As = "h2",
  className = "",
  stagger = 0.04,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const words = text.replace(/\n/g, " \n ").split(" ");

  return (
    <As ref={ref as never} className={className} style={{ display: "block" }}>
      {words.map((w, i) => {
        if (w === "\n") return <br key={i} />;
        return (
          <span
            key={i}
            style={{ overflow: "hidden", display: "inline-block", verticalAlign: "bottom" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "105%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 0.75,
                ease: EASE_EXPO,
                delay: delay + i * stagger,
              }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </As>
  );
}

/* ─── ParallaxImage — Apple-style scroll-driven parallax ─────────────────── */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.25,
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1 + speed * 2 }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

/* ─── ScaleIn — scale + fade reveal, great for cards ────────────────────── */
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── SlideIn — horizontal slide for alternating sections ───────────────── */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}
