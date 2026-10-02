import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  SlideIn,
  ParallaxImage,
  EASE_EXPO,
} from "@/components/site/Kinetic";
import { img } from "@/lib/img";
import { getBrandBySlug } from "@/lib/brands";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const brand = getBrandBySlug(params.slug);
    return {
      meta: brand
        ? [
            { title: `${brand.name} — Oxbow Creatives` },
            { name: "description", content: brand.tagline },
          ]
        : [{ title: "Brand Not Found — Oxbow Creatives" }],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { slug } = Route.useParams();
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return (
      <section className="forest-section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="kicker">404</p>
          <h1 className="mt-6 text-cream font-semibold text-4xl">Brand not found.</h1>
          <Link to="/work" className="btn btn-primary mt-8 inline-flex">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  const { accent, accentFg } = brand;

  /* tiny helper — overlay colour on accent bg */
  const glass = (opacity = 0.15) =>
    `rgba(${accentFg === "#FFFFFF" ? "255,255,255" : "0,0,0"},${opacity})`;

  return (
    <>
      {/* ══════════════════════════════════ HERO ══ */}
      <section
        className="relative pt-36 pb-28 overflow-hidden"
        style={{ backgroundColor: accent }}
      >
        {/* dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${accentFg}22 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          {/* Back */}
          <FadeIn>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm mb-14 transition-opacity hover:opacity-100 opacity-55"
              style={{ color: accentFg }}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Portfolio
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              {/* Tags */}
              <FadeUp>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.28em] font-bold border"
                    style={{ backgroundColor: glass(0.25), color: accentFg, borderColor: glass(0.3) }}
                  >
                    {brand.category}
                  </span>
                  {brand.services.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] border"
                      style={{ backgroundColor: glass(0.12), color: accentFg, borderColor: glass(0.18) }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </FadeUp>

              {/* Name */}
              <FadeUp delay={0.07}>
                <h1
                  className="font-semibold tracking-[-0.04em] leading-[0.88] text-[clamp(3.5rem,10vw,8rem)]"
                  style={{ color: accentFg }}
                >
                  {brand.name}
                </h1>
              </FadeUp>

              {/* Tagline */}
              <FadeUp delay={0.15}>
                <p
                  className="mt-7 text-xl md:text-2xl font-medium max-w-2xl leading-snug"
                  style={{ color: `${accentFg}BB` }}
                >
                  {brand.tagline}
                </p>
              </FadeUp>
            </div>

            {/* Visit link */}
            <FadeUp delay={0.2} className="lg:col-span-3 lg:text-right">
              <a
                href={brand.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95"
                style={{ borderColor: glass(0.35), color: accentFg, backgroundColor: glass(0.14) }}
              >
                Visit site <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ ABOUT THE BRAND ══ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Sticky image */}
            <SlideIn direction="left" className="lg:col-span-5 lg:sticky lg:top-28">
              <ScaleIn>
                <div className="bento-card overflow-hidden">
                  <ParallaxImage
                    src={img(brand.name, 700, 840)}
                    alt={brand.name}
                    className="aspect-[4/5] w-full"
                    speed={0.1}
                  />
                </div>
                {/* meta strip */}
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span
                    className="h-3 w-3 rounded-full shrink-0 border border-black/10"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="text-xs text-muted-foreground">{brand.category}</span>
                  <span className="text-xs text-muted-foreground opacity-40">·</span>
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground hover:text-ink transition-colors truncate max-w-[200px]"
                  >
                    {brand.website.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                </div>
              </ScaleIn>
            </SlideIn>

            {/* About text */}
            <SlideIn direction="right" delay={0.08} className="lg:col-span-7">
              <FadeUp>
                <p
                  className="text-[10px] uppercase tracking-[0.32em] font-semibold mb-5"
                  style={{ color: accent }}
                >
                  About the brand
                </p>
                <h2 className="text-ink font-semibold tracking-[-0.03em] leading-[0.96] text-3xl md:text-4xl mb-8">
                  Who is {brand.name}?
                </h2>
                <p className="text-ink/75 leading-[1.8] text-lg">{brand.about}</p>
              </FadeUp>
            </SlideIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════ WHAT WE DO ══ */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "#111" }}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <FadeUp>
            <p
              className="text-[10px] uppercase tracking-[0.32em] font-semibold mb-5"
              style={{ color: accent }}
            >
              Our work
            </p>
            <h2 className="text-cream font-semibold tracking-[-0.03em] leading-[0.96] text-3xl md:text-5xl mb-16">
              What we do for {brand.name}.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {brand.whatWeDo.map((item, i) => (
              <motion.div
                key={item.service}
                className="rounded-[1.5rem] p-8 md:p-10 border border-white/8 flex flex-col gap-6"
                style={{ backgroundColor: "#1A1A1A" }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.75, ease: EASE_EXPO, delay: i * 0.08 }}
              >
                {/* Number + service name */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="block text-[10px] uppercase tracking-[0.3em] mb-3 font-semibold"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-cream font-semibold text-xl md:text-2xl tracking-tight">
                      {item.service}
                    </h3>
                  </div>
                  <span
                    className="mt-1 h-8 w-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accent}25`, color: accent }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ backgroundColor: `${accent}30` }} />

                {/* Description */}
                <p className="text-white/60 leading-[1.75] text-base flex-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ GROWTH SECTION ══ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Growth narrative */}
            <SlideIn direction="left" className="lg:col-span-6">
              <p
                className="text-[10px] uppercase tracking-[0.32em] font-semibold mb-5"
                style={{ color: accent }}
              >
                Growth with Oxbow
              </p>
              <h2 className="text-ink font-semibold tracking-[-0.03em] leading-[0.96] text-3xl md:text-4xl mb-8">
                How {brand.name} is growing.
              </h2>
              <p className="text-ink/75 leading-[1.8] text-lg">{brand.growth}</p>

              <a
                href={brand.website}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
                style={{ color: accent }}
              >
                See {brand.name} live <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </SlideIn>

            {/* Stats grid */}
            <SlideIn direction="right" delay={0.1} className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {brand.growthStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-[1.25rem] p-7 border border-black/8"
                    style={{ backgroundColor: `${accent}0D` }}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                    transition={{ duration: 0.65, ease: EASE_EXPO, delay: i * 0.07 }}
                  >
                    <p
                      className="font-semibold tracking-[-0.03em] leading-none text-3xl md:text-4xl mb-3"
                      style={{ color: accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-ink/60 text-sm leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </SlideIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CTA ══ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: accent }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${accentFg}20 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <ScaleIn>
            <p
              className="text-[10px] uppercase tracking-[0.32em] font-semibold mb-6"
              style={{ color: `${accentFg}99` }}
            >
              Work with Oxbow
            </p>
            <h2
              className="font-semibold tracking-[-0.035em] leading-[0.95] text-4xl md:text-5xl lg:text-6xl mb-10"
              style={{ color: accentFg }}
            >
              Want results like this<br />for your brand?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: accentFg, color: accent }}
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
