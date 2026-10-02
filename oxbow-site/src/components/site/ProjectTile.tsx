import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { img } from "@/lib/img";
import { toSlug, getBrandBySlug } from "@/lib/brands";
import { EASE_EXPO } from "@/components/site/Kinetic";

export function ProjectTile({
  name,
  category,
  services,
}: {
  name: string;
  category: string;
  services: string[];
}) {
  const slug = toSlug(name);
  const brand = getBrandBySlug(slug);
  const accent = brand?.accent ?? "#2F4F32";
  const accentFg = brand?.accentFg ?? "#FFFFFF";

  return (
    <motion.div
      whileHover="hovered"
      initial="rest"
      animate="rest"
    >
      <Link
        to="/work/$slug"
        params={{ slug }}
        data-cursor="view"
        data-cursor-label="View →"
        className="group block bento-card overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-[5/6] overflow-hidden bg-cream-deep">
          <motion.img
            src={img(name, 700, 840)}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            variants={{
              rest: { scale: 1 },
              hovered: { scale: 1.06, transition: { duration: 1.1, ease: EASE_EXPO } },
            }}
          />

          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            variants={{
              rest: { opacity: 0 },
              hovered: { opacity: 1, transition: { duration: 0.5 } },
            }}
          />

          {/* Category tag — dark glass pill */}
          <div className="absolute inset-x-0 top-0 p-3.5 flex items-center justify-between">
            <motion.span
              className="px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.22em] font-semibold backdrop-blur-md border border-white/10"
              style={{ backgroundColor: `${accent}CC`, color: accentFg }}
              variants={{
                rest: { opacity: 0.85 },
                hovered: { opacity: 1 },
              }}
            >
              {category}
            </motion.span>

            <motion.span
              className="p-1.5 rounded-full border border-white/20 backdrop-blur-md"
              style={{ backgroundColor: accent, color: accentFg }}
              variants={{
                rest: { opacity: 0, scale: 0.7 },
                hovered: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE_EXPO } },
              }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.span>
          </div>

          {/* Brand name overlay on hover */}
          <motion.div
            className="absolute inset-x-0 bottom-0 p-4"
            variants={{
              rest: { opacity: 0, y: 8 },
              hovered: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
            }}
          >
            <p className="text-white font-semibold text-lg tracking-tight leading-none">
              View Project →
            </p>
          </motion.div>
        </div>

        {/* Card footer */}
        <div className="p-4 pt-3.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[1.05rem] font-semibold text-ink tracking-tight leading-snug">
              {name}
            </h3>
            {/* Accent dot */}
            <span
              className="mt-1.5 h-2 w-2 rounded-full shrink-0 opacity-80"
              style={{ backgroundColor: accent }}
            />
          </div>

          {/* Service tags — accent-tinted glass pills */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {services.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.18em] font-medium border"
                style={{
                  backgroundColor: `${accent}18`,
                  color: accent,
                  borderColor: `${accent}35`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
