import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, ScaleIn, StaggerGroup, StaggerItem, ParallaxImage } from "@/components/site/Kinetic";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { MagneticButton } from "@/components/site/MagneticButton";
import { site } from "@/lib/site";
import { img } from "@/lib/img";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oxbow Creatives | An In-House Creative Team in Jaipur" },
      { name: "description", content: "Oxbow Creatives is an in-house team of designers, developers and marketers in Jaipur, building brand identity, websites and marketing for D2C and local businesses." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Transparency", d: "Clear updates and honest reporting — no jargon, no overpromising." },
  { t: "Craft", d: "We sweat the details others skip — typography, spacing, motion, copy." },
  { t: "Consistency", d: "Site, packaging, ads and social all speak the same visual language." },
  { t: "Client-Centric", d: "We build around how your business actually works, not a fixed template." },
  { t: "Integrity", d: "If something isn't right for your brand, we'll say so — even if it costs us a sale." },
  { t: "Accountability", d: "One team, one point of contact — no passing the buck between vendors." },
  { t: "Collaboration", d: "Your context, plus our craft — better outcomes than either could reach alone." },
  { t: "Excellence", d: "Good enough isn't. We'd rather take a little longer and get it right." },
];

const founderStats = [
  { k: site.founded, v: "Founded" },
  { k: "100+", v: "Brands partnered" },
  { k: "360°", v: "In-house services" },
  { k: "Jaipur", v: "Based & operating" },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="forest-section pt-28 md:pt-32 lg:pt-24 pb-10 md:pb-12 lg:pb-10 lg:h-[100dvh] lg:flex lg:flex-col lg:justify-center overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeUp><p className="kicker">About Oxbow Creatives</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-6 lg:mt-7 text-cream font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)] lg:text-[clamp(2.5rem,4.2vw,4.5rem)]">
                We are a passionate creative agency delivering <span className="text-mint">impactful results.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 lg:mt-7 max-w-lg text-cream/80 leading-relaxed">
                A small, in-house team working with 100+ brands across worldwide.
              </p>
              <MagneticButton strength={0.3} className="mt-7">
                <Link to="/contact" data-cursor="link" className="btn btn-primary">
                  Hire Us <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <div className="bento-card overflow-hidden lg:h-[440px]">
                <ParallaxImage
                  src={img("oxbow-studio", 700, 800)}
                  alt="Oxbow studio"
                  className="aspect-[5/6] w-full lg:h-full lg:aspect-auto"
                  speed={0.1}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 paper-section">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp><p className="kicker">Redefining trust in marketing</p></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                A partner — not just another vendor.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeUp delay={0.15}>
              <p className="text-lg text-ink/80 leading-relaxed">
                Oxbow started with a simple observation: most growing brands end up
                working with a different designer, developer, ads person and content
                creator for every piece — and the result rarely feels like one brand.
              </p>
              <p className="mt-5 text-ink/70 leading-relaxed">
                We built Oxbow as a single, in-house team handling branding,
                websites, Shopify stores, content and marketing together — so every
                touchpoint, from your logo to your store, feels considered.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <FadeUp><p className="kicker">Operating principles</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl max-w-3xl">
              Eight principles behind every project.
            </h2>
          </FadeUp>

          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <StaggerItem key={v.t}>
                <motion.div
                  className="bento-card bg-paper p-6 h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <span className="font-mono text-xs text-forest">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{v.t}</h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{v.d}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="forest-section py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="bento-card overflow-hidden">
                <img
                  src={img("oxbow-founder", 700, 800)}
                  alt="Founder"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <p className="kicker">The mind behind</p>
              <h2 className="mt-6 text-cream font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
                Building brands that feel <span className="text-mint">complete.</span>
              </h2>
              <p className="mt-8 text-lg text-cream/80 leading-relaxed">
                Rahul founded Oxbow Creatives in {site.founded} with a straightforward
                idea — growing brands shouldn't have to choose between good design,
                a website that works, and marketing that brings in customers.
              </p>
              <p className="mt-5 text-cream/70 leading-relaxed">
                Based in Jaipur, working with 100+ brands across worldwide. The focus stays on
                getting the fundamentals — brand, site and marketing — right before
                adding anything else.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-cream/15">
                {founderStats.map((s, i) => (
                  <FadeUp key={s.v} delay={0.05 + i * 0.06} className="border-b border-cream/15 py-5 pr-4">
                    <div className="text-3xl font-semibold text-cream tracking-tight">
                      <AnimatedCounter value={s.k} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-mint">{s.v}</div>
                  </FadeUp>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton strength={0.3}>
                  <Link to="/contact" data-cursor="link" className="btn btn-primary">
                    Get in touch <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
                <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 rounded-full border border-cream/25 hover:bg-cream/10"><Instagram className="h-4 w-4" /></a>
                <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-cream/25 hover:bg-cream/10"><Linkedin className="h-4 w-4" /></a>
                <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 rounded-full border border-cream/25 hover:bg-cream/10"><Facebook className="h-4 w-4" /></a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 paper-section">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <ScaleIn>
            <p className="kicker mx-auto justify-center">Our mission</p>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[1.02] text-4xl md:text-6xl">
              To make Indian brands feel <span className="text-forest">considered</span> — from the logo on the box to the ad in the feed.
            </h2>
            <MagneticButton strength={0.3} className="mt-12">
              <Link to="/contact" data-cursor="link" className="btn btn-primary">
                Let's see if we're a fit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
