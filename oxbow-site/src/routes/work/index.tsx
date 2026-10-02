import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, ScaleIn, SlideIn, StaggerGroup, StaggerItem, EASE_EXPO } from "@/components/site/Kinetic";
import { ProjectTile } from "@/components/site/ProjectTile";
import { img } from "@/lib/img";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Oxbow Creatives | Brands We've Built & Grown" },
      { name: "description", content: "Branding, Shopify stores, websites, content shoots and performance marketing for D2C and lifestyle brands — selected work from Oxbow Creatives, Jaipur." },
    ],
  }),
  component: WorkPage,
});

const activeProjects = [
  { name: "Akera",           category: "Medical Aesthetics",  services: ["Performance"] },
  { name: "Azurina",         category: "Sleepwear",           services: ["Performance", "Retention", "Creatives"] },
  { name: "Balance Breens",  category: "Supplements",         services: ["Performance", "Retention", "Web", "Social", "Creatives"] },
  { name: "Bird House",      category: "Sustainable Footwear",services: ["Performance", "Retention", "Content"] },
  { name: "Early Sunday",    category: "Kids Fashion",        services: ["Performance", "Retention", "Content"] },
  { name: "Humraha",         category: "Handcrafted Fabrics", services: ["Performance", "Retention", "Content"] },
  { name: "Inspire.Ai",      category: "AI / Tech",           services: ["Performance", "Creatives"] },
  { name: "Ishhaara",        category: "Jewellery",           services: ["Performance", "Retention", "Social", "Creatives", "Content"] },
  { name: "Janki",           category: "Fine Jewellery",      services: ["Performance", "Retention", "Creatives"] },
  { name: "Kameezy",         category: "Fashion",             services: ["Web", "Content", "Creatives"] },
  { name: "KM Label",        category: "Fashion",             services: ["Performance"] },
  { name: "LMC",             category: "Healthcare",          services: ["Performance", "Web", "Creatives"] },
  { name: "Mohana Poshak",   category: "Ethnic Clothing",     services: ["Performance", "Web", "Social", "Creatives", "Content"] },
  { name: "Mulltiply.ai",    category: "AI / SaaS",           services: ["Performance", "Social", "Creatives", "Content"] },
  { name: "Navya Fashion",   category: "Block Print Fashion", services: ["Performance", "Retention", "Web", "SEO", "Social", "Creatives", "Content"] },
  { name: "Noa Rooftop",     category: "Hospitality",         services: ["Performance", "Content"] },
  { name: "Phutari",         category: "Artisan Craft",       services: ["Performance", "Content"] },
  { name: "Savanna",         category: "Fashion",             services: ["Performance", "Content"] },
  { name: "Simply Soho",     category: "Tableware",           services: ["Performance", "Creatives"] },
  { name: "Tahiliya",        category: "Ethnic Wear",         services: ["Performance", "Retention", "Social", "Creatives", "Content"] },
  { name: "Tangerine",       category: "Jewellery",           services: ["Performance", "Retention", "Web", "Creatives", "Content"] },
  { name: "The Yellow Bow",  category: "Women's Fashion",     services: ["Performance", "Retention", "Creatives", "Content"] },
  { name: "Wibrion",         category: "D2C",                 services: ["Performance", "Creatives"] },
];

const caseStudies = [
  {
    tag: "Shopify & Performance",
    client: "House of Chikankari",
    seed: "case-chikankari",
    url: "https://www.houseofchikankari.in/",
    accent: "#1B4332",
    problem: "A heritage Chikankari label with stunning craft but a storefront that wasn't converting — especially on mobile.",
    strategy: "Rebuilt the Shopify store with a mobile-first layout, collection architecture that told the craft story, and Meta Ads campaigns targeting ethnic-wear buyers at the right moment.",
    result: "A storefront that matches the product's quality, with Meta ROAS of 3.8x in peak season.",
  },
  {
    tag: "Branding & Social",
    client: "Bare Wear",
    seed: "case-barewear",
    url: "https://barewear.in/",
    accent: "#3D3D3D",
    problem: "A sustainable clothing brand with strong values but no visual language to communicate them consistently.",
    strategy: "Developed a minimal brand identity that matched the 'less is more' philosophy — clean type, muted palette, and a social system rooted in slow content.",
    result: "A cohesive brand presence across packaging, site and Instagram that mirrors the brand's values.",
  },
  {
    tag: "Performance Marketing",
    client: "Saadaa",
    seed: "case-saadaa",
    url: "https://saadaa.in/",
    accent: "#7C3A00",
    problem: "Meta Ads were burning budget without a clear picture of which creatives or audiences were driving sales.",
    strategy: "Restructured the campaign architecture, introduced a creative testing framework, and moved from broad to intent-first targeting with cleaner creative sets.",
    result: "ROAS improved from 1.4x to 3.1x within 60 days of the restructure.",
  },
  {
    tag: "Content & Social",
    client: "Showoffff",
    seed: "case-showoffff",
    url: "https://showoffff.in/",
    accent: "#1C1C3A",
    problem: "A bold fashion label whose social content wasn't landing — inconsistent styling, no posting rhythm, and no creative direction.",
    strategy: "Shot a campaign-style content bank with a defined aesthetic, then built a social calendar with weekly themes that gave the feed a consistent, recognisable look.",
    result: "Instagram engagement up 3x, with a consistent feed identity the team can maintain independently.",
  },
  {
    tag: "Shopify & Branding",
    client: "Spunkies",
    seed: "case-spunkies",
    url: "https://spunkies.com/",
    accent: "#7B2D8B",
    problem: "A fun, vibrant brand whose online store felt flat — not matching the energy of the products or the audience.",
    strategy: "Rebuilt the Shopify store with a bolder visual treatment, improved product page layouts and a checkout flow optimised for the brand's younger buyer persona.",
    result: "A store that feels as energetic as the brand, with a 24% improvement in mobile conversion rate.",
  },
];

function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="forest-section pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <FadeUp><p className="kicker">Portfolio</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-8 text-cream font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.75rem,8vw,6rem)]">
                Brands we've built, refined <span className="text-mint">&amp; grown.</span>
              </h1>
            </FadeUp>
          </div>
          <div className="lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="text-cream/80 leading-relaxed">
                A selection of D2C and lifestyle brands we work with — across
                branding, Shopify, websites, content and marketing.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ACTIVE PROJECTS */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <FadeUp>
            <div className="flex items-end justify-between gap-4 mb-12">
              <div>
                <p className="kicker">Active projects</p>
                <h2 className="mt-4 text-ink font-semibold tracking-[-0.03em] text-3xl md:text-5xl">
                  Brands currently in motion.
                </h2>
              </div>
              <span className="hidden md:inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-forest animate-pulse" />
                Live as of today
              </span>
            </div>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {activeProjects.map((p) => (
              <StaggerItem key={p.name}>
                <ProjectTile {...p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="paper-section py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <FadeUp><p className="kicker">Case studies</p></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl max-w-4xl">
              Short stories about doing the work.
            </h2>
          </FadeUp>

          <div className="mt-16 space-y-28">
            {caseStudies.map((w, i) => {
              const flip = i % 2 === 1;
              return (
                <article key={w.client} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <SlideIn direction={flip ? "right" : "left"} className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                    <a href={w.url} target="_blank" rel="noreferrer" className="group block">
                      <div className="bento-card overflow-hidden">
                        <motion.img src={img(w.seed, 900, 700)} alt={w.client} loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                          whileHover={{ scale: 1.04 }} transition={{ duration: 0.8, ease: EASE_EXPO }} />
                      </div>
                    </a>
                  </SlideIn>
                  <SlideIn direction={flip ? "left" : "right"} delay={0.1} className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-xs" style={{ color: w.accent }}>No. {String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{w.tag}</span>
                    </div>
                    <h3 className="text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-3xl md:text-5xl">{w.client}</h3>
                    <div className="mt-5 h-px w-12" style={{ backgroundColor: w.accent }} />
                    <div className="mt-6 space-y-5">
                      {[{ label: "Problem", text: w.problem }, { label: "What we did", text: w.strategy }].map(({ label, text }) => (
                        <div key={label}>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
                          <p className="mt-2 text-ink/80 leading-relaxed">{text}</p>
                        </div>
                      ))}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: w.accent }}>Outcome</p>
                        <p className="mt-2 text-ink font-semibold leading-snug text-lg">{w.result}</p>
                      </div>
                    </div>
                    <a href={w.url} target="_blank" rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                      style={{ color: w.accent }}>
                      Visit {w.client} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </SlideIn>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <ScaleIn>
            <h2 className="text-ink font-semibold tracking-[-0.035em] leading-[0.98] text-4xl md:text-6xl">
              Your brand, <span className="text-forest">next on this page.</span>
            </h2>
            <Link to="/contact" data-cursor="link" className="btn btn-primary mt-10">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
