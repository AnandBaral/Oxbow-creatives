import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, ScaleIn, SlideIn, StaggerGroup, StaggerItem, ParallaxImage, EASE_EXPO } from "@/components/site/Kinetic";
import { MagneticButton } from "@/components/site/MagneticButton";
import { img } from "@/lib/img";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Oxbow Creatives | 360° Marketing & Creative Services" },
      { name: "description", content: "Performance marketing, websites, Shopify development, social media, branding, content shoots and SEO — 360-degree services from one in-house team in Jaipur." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Performance Marketing",
    seed: "svc-perf",
    problem: "You're spending on Meta or Google Ads but can't tell what's actually driving sales versus what's burning budget.",
    outcome: "Ad spend that earns its place.",
    what: ["Meta Ads setup, creative & management", "Google Ads (search & shopping)", "Retargeting & audience strategy", "Plain-language performance reporting"],
  },
  {
    n: "02",
    title: "Website & Shopify Development",
    seed: "svc-web",
    problem: "Your current site is slow, hard to update, or built on a template that doesn't fit how your business actually works.",
    outcome: "A site that's actually yours.",
    what: ["Custom Shopify store setup & theming", "Business websites & landing pages (React / Next.js)", "Mobile-first, fast-loading builds", "On-page SEO structure from day one"],
  },
  {
    n: "03",
    title: "Social Media & Retention",
    seed: "svc-social",
    problem: "You're posting, but it's inconsistent — and customers who buy once rarely hear from you again.",
    outcome: "A presence people stick around for.",
    what: ["Monthly content planning & design", "Reels, posts & story templates", "Email / WhatsApp retention flows", "Community & DM response support"],
  },
  {
    n: "04",
    title: "Branding & Graphic Design",
    seed: "svc-brand",
    problem: "Your visuals don't feel like one brand — different fonts, colours and styles across your site, packaging and social.",
    outcome: "An identity that feels considered.",
    what: ["Logo & visual identity systems", "Brand guidelines (colours, type, voice)", "Packaging & label design", "Social, ad & marketing collateral"],
  },
  {
    n: "05",
    title: "Content & Product Shoot",
    seed: "svc-shoot",
    problem: "Your product photos look inconsistent or under-lit, which makes even good products feel less premium online.",
    outcome: "Visuals worth stopping for.",
    what: ["Product & flat-lay photography", "Lifestyle & model shoots", "Reels & short-form video content", "Editing, retouching & art direction"],
  },
  {
    n: "06",
    title: "SEO & Local SEO",
    seed: "svc-seo",
    problem: "People search for what you sell, but your site and Google listing don't show up — your competitors do.",
    outcome: "Found by the people looking for you.",
    what: ["On-page SEO & technical fixes", "Google Business Profile setup & optimisation", "Local citations & schema markup", "Keyword-led content recommendations"],
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="forest-section pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <FadeUp><p className="kicker">Services / 2026</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-8 text-cream font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.75rem,8vw,6rem)]">
                360° capabilities, working as <span className="text-mint">one team.</span>
              </h1>
            </FadeUp>
          </div>
          <div className="lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="text-cream/80 leading-relaxed">
                Every service stands alone. They're designed to work together. Brief us
                on one piece — or let us run the full system from brand to launch to
                marketing.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 space-y-20 md:space-y-28">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                  <SlideIn direction={flip ? "right" : "left"}>
                    <div className="bento-card overflow-hidden">
                      <ParallaxImage
                        src={img(s.seed, 900, 700)}
                        alt={s.title}
                        className="aspect-[4/3] w-full"
                        speed={0.12}
                      />
                    </div>
                  </SlideIn>
                </div>

                <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                  <SlideIn direction={flip ? "left" : "right"} delay={0.1}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-forest">{s.n}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Service
                      </span>
                    </div>
                    <h2 className="mt-4 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 text-forest text-lg md:text-xl font-medium">
                      {s.outcome}
                    </p>
                    <p className="mt-4 text-ink/70 leading-relaxed">{s.problem}</p>

                    <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                      {s.what.map((w, wi) => (
                        <motion.li
                          key={w}
                          className="flex items-start gap-3 py-2.5 border-t border-border"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
                          transition={{ duration: 0.5, ease: EASE_EXPO, delay: wi * 0.06 }}
                        >
                          <Plus className="h-3.5 w-3.5 text-forest mt-1.5 shrink-0" />
                          <span className="text-sm text-ink/85">{w}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <MagneticButton strength={0.25} className="mt-8">
                      <Link
                        to="/contact"
                        data-cursor="link"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink link-underline"
                      >
                        Discuss this service <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </MagneticButton>
                  </SlideIn>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <ScaleIn>
            <p className="kicker mx-auto justify-center">Not sure where to start?</p>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
              Tell us what's <span className="text-forest">not working.</span>
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              We'll suggest where to start — even if that's just one part of the 360°.
            </p>
            <MagneticButton strength={0.3} className="mt-10">
              <Link to="/contact" data-cursor="link" className="btn btn-primary">
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
