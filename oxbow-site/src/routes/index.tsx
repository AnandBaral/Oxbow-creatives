import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, ScaleIn, StaggerGroup, StaggerItem, ParallaxImage, EASE_EXPO } from "@/components/site/Kinetic";
import { ClientMarquee } from "@/components/site/Marquee";
import { ServiceStrip } from "@/components/site/ServiceStrip";
import { RollingGallery } from "@/components/site/RollingGallery";
import { MagneticButton } from "@/components/site/MagneticButton";
import { site } from "@/lib/site";
import { img } from "@/lib/img";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oxbow Creatives — Branding, Web & Performance Marketing | Jaipur" },
      { name: "description", content: "Oxbow Creatives is a Jaipur-based studio. Brand identity, websites, Shopify stores, SEO, social media and performance marketing — built as one system." },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Social Media Marketing", desc: "Amplify your brand presence and drive engagement across all major social platforms.", stats: "1.3B views | 500+ brands | Scalable growth", seed: "oxbow-social" },
  { title: "Performance Marketing", desc: "Drive ROI-focused ad campaigns using data-driven strategies and real-time optimization.", stats: "4.5x ROAS | 5L+ leads | ROI-driven", seed: "oxbow-perf" },
  { title: "Branding & Design", desc: "Craft a memorable brand identity and packaging that differentiates in competitive markets.", stats: "150+ brands | 1,000+ designs | 70% recall", seed: "oxbow-brand" },
  { title: "Website & Shopify", desc: "Design and develop seamless, user-friendly websites that convert visitors into loyal customers.", stats: "120+ websites | 95% conversion | Custom builds", seed: "oxbow-web" },
  { title: "Photography & Videography", desc: "Capture brand moments with professional visuals tailored for maximum engagement.", stats: "1800+ shoots | 6x engagement | HQ production", seed: "oxbow-photo" },
  { title: "SEO & Remarketing", desc: "On-page SEO and technical fixes paired with retargeting that brings back visitors who didn't convert.", stats: "Top-3 rankings | 3x retargeting ROAS | Always-on funnel", seed: "oxbow-seo" },
];

const why = [
  "In-house team across design, development and marketing",
  "Clear scope and timelines — no open-ended retainers",
  "Custom design and builds, never recycled templates",
  "Pricing built for Indian SMBs and D2C founders",
  "One point of contact from kickoff through to launch",
  "Support after launch — not just a handover and goodbye",
];

function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="forest-section pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-24 lg:pb-0 min-h-[100dvh] lg:h-[100dvh] overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-full flex flex-col justify-center lg:block">
          <div className="grid gap-7 sm:gap-9 lg:grid-cols-12 lg:gap-14 items-stretch lg:h-full lg:auto-rows-fr">
            <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
              <FadeUp>
                <p className="kicker">Full-service creative agency, based in Jaipur</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="mt-3 sm:mt-4 md:mt-6 lg:mt-5 text-cream font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.25rem,9vw,2.75rem)] sm:text-[clamp(2.5rem,7vw,3.5rem)] md:text-[clamp(2.75rem,8vw,6.5rem)] lg:text-[clamp(2.75rem,4.6vw,5rem)] whitespace-pre-line">
                  The Growth Partner&nbsp;{"\n"}
                  <span className="text-mint">Behind Your Next Revenue Milestone</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-5 max-w-lg text-cream/80 leading-relaxed text-sm sm:text-base">
                  <span className="md:hidden">
                    Brand, web, Shopify &amp; performance marketing — one in-house team in Jaipur.
                  </span>
                  <span className="hidden md:inline">
                    Trusted by 100+ brands across worldwide. Brand identity, websites,
                    Shopify, content and performance marketing — built together, by one
                    in-house team in the Pink City.
                  </span>
                </p>
                <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-7 flex flex-wrap gap-3">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="btn btn-primary">
                      Schedule a call <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/work"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-colors text-sm font-medium"
                    >
                      Case Studies <ArrowRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                </div>
              </FadeUp>
            </div>

            {/* Rolling image gallery — flush with the hero's top and bottom edges */}
            <div className="lg:col-span-6">
              <FadeUp delay={0.2} className="lg:h-full">
                <RollingGallery className="lg:h-full" />

              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE STRIP ============ */}
      <ServiceStrip />

      {/* ============ TRUSTED BY ============ */}
      <section className="paper-section border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-6 flex items-center gap-4">
          <span className="kicker shrink-0">Trusted by</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">100+ brands across worldwide</span>
        </div>
        <ClientMarquee />
      </section>

      {/* ============ WHY VISIONARY BRANDS ============ */}
      <section className="py-24 md:py-32 paper-section">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp>
              <p className="kicker">Why visionary brands choose us</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                Blending data, insights, creativity &amp; expertise.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeUp delay={0.15}>
              <p className="text-lg text-ink/80 leading-relaxed">
                Our approach is deeply data-driven, combining strategic insight with
                creative execution to craft campaigns that resonate and perform. We
                engage closely with each client to understand their unique story and
                business goals, tailoring every strategy to drive bold, authentic growth.
              </p>
              <MagneticButton strength={0.3} className="mt-10">
                <Link
                  to="/contact"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-paper hover:bg-forest-deep transition-colors text-sm font-medium"
                >
                  Let's build together <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============ TOP-NOTCH SERVICES ============ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <FadeUp><p className="kicker">Top-notch services</p></FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                  A comprehensive suite of marketing solutions tailored to your goals.
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton strength={0.3}>
                <Link to="/services" data-cursor="link" className="btn btn-primary">
                  All services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.article
                  className="group bento-card flex flex-col h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img(s.seed, 700, 525)}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-forest">{s.stats}</p>
                    <Link
                      to="/services"
                      data-cursor="link"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink link-underline self-start"
                    >
                      View Work
                      <motion.span
                        className="inline-flex"
                        animate={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ WHY OXBOW (forest) ============ */}
      <section className="forest-section py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <FadeUp><p className="kicker">Why Oxbow</p></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 text-cream font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                Built for brands that want it <span className="text-mint">whole.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-cream/80 leading-relaxed max-w-md">
                We work with founders and small teams who want their brand, site and
                marketing to actually fit together — not patched from five different freelancers.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <StaggerGroup className="divide-y divide-cream/15 border-y border-cream/15">
              {why.map((w) => (
                <StaggerItem key={w}>
                  <motion.li
                    className="py-6 flex items-start gap-5 list-none"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <Check className="h-5 w-5 text-mint shrink-0 mt-1" />
                    </motion.span>
                    <span className="text-lg md:text-xl text-cream leading-snug">{w}</span>
                  </motion.li>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 md:py-32 paper-section">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <FadeUp><p className="kicker">In their words</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl max-w-4xl">
              Founders saying nice things, in their own words.
            </h2>
          </FadeUp>

          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {site.reviews.map((r) => (
              <StaggerItem key={r.role}>
                <motion.figure
                  className="bento-card p-7 h-full flex flex-col bg-cream"
                  whileHover={{ y: -6, boxShadow: "0 20px 60px -12px rgba(0,0,0,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                >
                  <span className="serif italic text-5xl text-forest leading-none">“</span>
                  <blockquote className="mt-3 text-lg text-ink leading-snug flex-1">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t border-border text-sm">
                    <span className="font-medium text-ink">{r.role}</span>
                    <span className="text-muted-foreground"> · {r.name}</span>
                  </figcaption>
                </motion.figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="pb-24 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <ScaleIn>
            <div className="relative bg-ink text-cream rounded-3xl overflow-hidden p-10 md:p-20">
              {/* Animated ambient glow */}
              <motion.div
                className="pointer-events-none absolute -top-1/2 -right-1/4 h-[600px] w-[600px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(233,188,63,0.18) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-mint">Have something in mind?</p>
                  <h2 className="mt-6 font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                    Tell us about it. <br />
                    <span className="text-mint">We'll reply within a day.</span>
                  </h2>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                  <MagneticButton strength={0.35}>
                    <Link
                      to="/contact"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-paper text-ink font-medium hover:bg-mint transition-colors text-sm"
                    >
                      Start a project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.35}>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-colors text-sm font-medium"
                    >
                      Email us
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
