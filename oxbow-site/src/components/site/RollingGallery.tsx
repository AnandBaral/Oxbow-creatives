import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { img } from "@/lib/img";
import { EASE_EXPO } from "@/components/site/Kinetic";

type Card = { seed: string; h: number };

const COLUMNS: Card[][] = [
  [
    { seed: "oxbow-roll-1a", h: 190 },
    { seed: "oxbow-roll-1b", h: 150 },
    { seed: "oxbow-roll-1c", h: 220 },
    { seed: "oxbow-roll-1d", h: 170 },
    { seed: "oxbow-roll-1e", h: 200 },
  ],
  [
    { seed: "oxbow-roll-2a", h: 160 },
    { seed: "oxbow-roll-2b", h: 210 },
    { seed: "oxbow-roll-2c", h: 180 },
    { seed: "oxbow-roll-2d", h: 200 },
    { seed: "oxbow-roll-2e", h: 150 },
  ],
  [
    { seed: "oxbow-roll-3a", h: 200 },
    { seed: "oxbow-roll-3b", h: 160 },
    { seed: "oxbow-roll-3c", h: 220 },
    { seed: "oxbow-roll-3d", h: 150 },
    { seed: "oxbow-roll-3e", h: 190 },
  ],
];

const DIRECTIONS: Array<"up" | "down"> = ["up", "down", "up"];
const DURATIONS = [30, 36, 26];

export function RollingGallery({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`roll-gallery relative h-[200px] sm:h-[280px] md:h-[360px] overflow-hidden rounded-[1.25rem] ${className}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.25 }}
    >
      <div className="grid grid-cols-3 gap-3 md:gap-4 h-full">
        {COLUMNS.map((col, ci) => {
          const items = [...col, ...col];
          const style: CSSProperties = { animationDuration: `${DURATIONS[ci % DURATIONS.length]}s` };
          return (
            <div key={ci} className="roll-col group/col">
              <div
                className={`roll-track ${DIRECTIONS[ci % DIRECTIONS.length] === "up" ? "roll-up" : "roll-down"}`}
                style={style}
              >
                {items.map((c, i) => (
                  <motion.div
                    key={`${c.seed}-${i}`}
                    className="roll-item overflow-hidden"
                    style={{ height: c.h }}
                    whileHover={{ scale: 1.04, zIndex: 10 }}
                    transition={{ duration: 0.55, ease: EASE_EXPO }}
                  >
                    <img
                      src={img(c.seed, 360, c.h * 2)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover/col:[animation-play-state:paused]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* edge fades */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-20 z-10"
        style={{ background: "linear-gradient(to bottom, var(--forest), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-20 z-10"
        style={{ background: "linear-gradient(to top, var(--forest), transparent)" }}
      />
    </motion.div>
  );
}
