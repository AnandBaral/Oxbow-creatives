export interface ServiceDetail {
  service: string;
  description: string;
}

export interface Brand {
  name: string;
  slug: string;
  category: string;
  services: string[];
  accent: string;
  accentFg: string;
  tagline: string;
  about: string;
  whatWeDo: ServiceDetail[];
  growth: string;
  growthStats: { label: string; value: string }[];
  website: string;
}

export const toSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/×/g, "x")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const brands: Brand[] = [
  /* ─────────────────────────────────────────── AKERA ──── */
  {
    name: "Akera",
    slug: "akera",
    category: "Medical Aesthetics",
    services: ["Performance"],
    accent: "#0D6B5F",
    accentFg: "#FFFFFF",
    tagline: "Filling clinic chairs with the right patients — not just any patients.",
    about:
      "Akera is a premium medical aesthetics clinic offering a full menu of skin, hair, and body treatments — from Morpheus8 microneedling and chemical peels to Botox, dermal fillers, laser toning, and plasma hair restoration. The clinic positions itself at the quality end of the market, attracting patients who value expertise and results over discounts. With a clean, clinical brand identity and a growing reputation, Akera is building a loyal patient base in a competitive space.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta and Google Ads campaigns built specifically for clinic bookings — not vanity metrics. Every ad is written to speak to a high-intent audience: people actively researching treatments, comparing clinics, and ready to book. We structure campaigns around treatment categories (skin, hair, injectables, laser) so budget flows to what's actually converting. Creatives lead with clinical credibility, before-and-after framing, and trust signals rather than generic offers.",
      },
    ],
    growth:
      "Since we took over Akera's performance marketing, the clinic has seen a steady increase in qualified appointment bookings. The shift away from broad, discounted ad targeting toward treatment-specific, intent-first campaigns has improved lead quality significantly — meaning the front desk spends less time fielding low-quality enquiries and more time converting warm, serious patients.",
    growthStats: [
      { value: "3.2x", label: "More qualified leads vs. before" },
      { value: "40%", label: "Drop in cost-per-booking" },
      { value: "5+", label: "Treatment categories running profitably" },
      { value: "↑ Quality", label: "Higher-value patients, fewer no-shows" },
    ],
    website: "https://akerahealth.com/",
  },

  /* ─────────────────────────────────────────── AZURINA ──── */
  {
    name: "Azurina",
    slug: "azurina",
    category: "Sleepwear",
    services: ["Performance", "Retention", "Creatives"],
    accent: "#C4965A",
    accentFg: "#FFFFFF",
    tagline: "Luxury sleepwear — acquired smartly, kept through retention.",
    about:
      "Azurina is a modern sleep and loungewear label built for the woman who refuses to compromise on comfort or elegance. Their range covers silk-feel pajamas, modal nightgowns, cotton caftans, chemises, tunic sets, and more — each piece designed to feel as good as it looks. With a dark, luxurious brand identity and strong product photography, Azurina is a label on the rise in the premium Indian sleepwear market.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta and Google Ads campaigns targeting women who already shop premium fashion and gifting — audiences likely to value and pay for quality sleepwear. Ad creatives are styled to match the brand's editorial identity: dark, elegant, confident. We test angles around self-gifting, gifting for occasions, and the everyday luxury of feeling good at home.",
      },
      {
        service: "Retention Marketing",
        description:
          "Sleepwear buyers come back — if you stay in front of them. We've set up email and WhatsApp flows that trigger around key moments: post-purchase welcome, product care tips, reorder nudges, and seasonal drops. The goal is to turn a one-time buyer into a repeat customer who thinks of Azurina first for their next purchase or a gift.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad creatives — static images, carousels, and short-form video edits — styled to match Azurina's brand aesthetic. Every asset is built for platform-native performance: formats that stop the scroll on Meta Reels, and visuals that look premium in Stories without being overproduced.",
      },
    ],
    growth:
      "Azurina's growth with us has been built on two parallel tracks: bringing in new buyers profitably through performance marketing, and keeping them with a solid retention system. The combination of strong ad creatives and timely post-purchase flows has turned a healthy first-order business into one with a growing repeat customer base.",
    growthStats: [
      { value: "2.8x", label: "ROAS on Meta Ads" },
      { value: "32%", label: "Repeat purchase rate via retention flows" },
      { value: "↑ AOV", label: "Higher basket through upsell flows" },
      { value: "3 flows", label: "Active retention journeys running" },
    ],
    website: "https://www.azurina.in/",
  },

  /* ─────────────────────────────────────────── BALANCE BREENS ──── */
  {
    name: "Balance Breens",
    slug: "balance-breens",
    category: "Supplements",
    services: ["Performance", "Retention", "Content", "Web", "Social", "Creatives"],
    accent: "#3D8B37",
    accentFg: "#FFFFFF",
    tagline: "A US supplement brand — managed entirely from Jaipur.",
    about:
      "Balance Breens is a US-focused health and wellness brand selling vitamins, supplements, tablets, and capsules for fitness and general wellbeing. Operating in the highly competitive American supplements market, the brand competes on product quality, fast shipping, and a digital presence built for conversion. With a strong product range and a growing customer base, Balance Breens is scaling across multiple channels.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We manage their Meta and Google Ads campaigns for the US market — structuring campaigns around product categories, building lookalike audiences from purchaser data, and testing creative angles around fitness goals, daily wellness, and specific supplement benefits. US markets require different bidding strategies and creative sensibilities, and we've built a system that works.",
      },
      {
        service: "Retention Marketing",
        description:
          "Supplement buyers are some of the best retention candidates — they need to reorder. We've built email flows that time reorder reminders to purchase cycles, educate buyers on product stacking and benefits, and run win-back sequences for customers who haven't ordered in 60+ days.",
      },
      {
        service: "Content",
        description:
          "We produce content that educates and converts — ingredient breakdowns, health benefit posts, testimonial formats, and comparison content. Informed buyers convert faster and churn slower.",
      },
      {
        service: "Web",
        description:
          "We manage and update the Shopify store — keeping product pages optimised, updating banners for campaigns, and ensuring the site performs across devices. A fast, clear store is the difference between an add-to-cart and a bounce.",
      },
      {
        service: "Social Media",
        description:
          "We manage their social presence — consistent posting, community engagement, and a content calendar that keeps the brand visible between paid bursts.",
      },
      {
        service: "Creatives",
        description:
          "All ad and social creatives are produced in-house — designed for the US market aesthetic: clean, benefit-forward, and trust-building.",
      },
    ],
    growth:
      "Balance Breens is one of our most complete partnerships — we manage the entire digital operation. The result is a brand that doesn't need to coordinate between multiple agencies or freelancers. Everything runs through one team, which means campaigns, content, and store updates are always aligned. The brand has seen consistent month-on-month growth in the US market.",
    growthStats: [
      { value: "4.1x", label: "ROAS on US Meta Ads" },
      { value: "28%", label: "Repeat purchase rate via email" },
      { value: "6", label: "Channels managed simultaneously" },
      { value: "↑ MoM", label: "Consistent revenue growth month-on-month" },
    ],
    website: "https://balancebreens.com/",
  },

  /* ─────────────────────────────────────────── BIRD HOUSE ──── */
  {
    name: "Bird House",
    slug: "bird-house",
    category: "Sustainable Footwear",
    services: ["Performance", "Retention", "Content"],
    accent: "#9B6B47",
    accentFg: "#FFFFFF",
    tagline: "Sustainable footwear — built on craft, grown with purpose-led marketing.",
    about:
      "Bird House makes comfortable, sustainable footwear crafted from natural materials — while reviving the stories of Indian artisan traditions. Every pair connects a buyer to a heritage of craft and a commitment to sustainability. The brand has built a loyal community around these values, attracting buyers who care about what they wear and where it comes from. Bird House is proof that sustainability and beautiful design aren't a trade-off.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns that target sustainability-conscious buyers — people who follow slow fashion brands, buy organic and eco products, and are willing to pay more for something made right. Creatives lead with the craft story, the natural materials, and the artisan connection rather than generic lifestyle imagery.",
      },
      {
        service: "Retention Marketing",
        description:
          "We've built retention flows that keep Bird House buyers engaged between purchases — with post-purchase care guides, product stories, and early access to new drops for existing customers. The brand's community ethos translates well into email and WhatsApp, where subscribers expect a conversation, not just promotions.",
      },
      {
        service: "Content",
        description:
          "Content for Bird House is always rooted in the brand's mission. We produce artisan-story posts, behind-the-scenes of the making process, sustainability explainers, and product content that shows the quality of natural materials in action.",
      },
    ],
    growth:
      "Bird House's growth has been built on the right audience, not the largest one. By targeting buyers who genuinely align with the brand's values, we've kept acquisition costs lean and retention rates high. Their community feels curated rather than bought — which is exactly what a brand like Bird House needs to maintain its positioning.",
    growthStats: [
      { value: "3.4x", label: "ROAS targeting sustainability-first buyers" },
      { value: "38%", label: "Email open rate on retention flows" },
      { value: "↑ LTV", label: "Higher lifetime value vs. broad audiences" },
      { value: "Low CAC", label: "Lean acquisition through precise targeting" },
    ],
    website: "https://birdhouse.life/",
  },

  /* ─────────────────────────────────────────── EARLY SUNDAY ──── */
  {
    name: "Early Sunday",
    slug: "early-sunday",
    category: "Kids Fashion",
    services: ["Performance", "Retention", "Content"],
    accent: "#D4849A",
    accentFg: "#FFFFFF",
    tagline: "Premium baby clothing — seen by the right parents at exactly the right moment.",
    about:
      "Early Sunday makes premium baby clothing and kids fashion for parents who want their little ones dressed beautifully and comfortably. Every piece is made from soft, carefully selected fabrics — designed for joyful everyday moments and special occasions alike. The brand speaks to a specific kind of parent: one who views dressing their child as an expression of care, not just a practical task.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads targeting new parents, expecting parents, and gift-givers — reaching them through interest signals, parenting communities, and baby product purchase behaviour. Creatives show the softness, the quality, and the joy of the brand in a way that resonates with parents who want the best. Seasonal campaigns around birthdays, baby showers, and festivals drive strong peaks.",
      },
      {
        service: "Retention Marketing",
        description:
          "Parents who buy once tend to buy again — their child keeps growing. We've built retention flows timed to purchase patterns: size-up reminders, seasonal drops, gifting nudges around birthdays, and post-purchase care content that builds trust and loyalty between orders.",
      },
      {
        service: "Content",
        description:
          "We produce content that feels warm, genuine, and parent-first — not overly polished or corporate. The content library covers product features, styling ideas, new arrivals, and real moments that the brand's audience connects with.",
      },
    ],
    growth:
      "Early Sunday has grown by finding and keeping the right buyers — parents who return season after season as their child grows. The combination of precise performance targeting and well-timed retention flows means the brand is building a base of loyal customers who don't need to be re-acquired with every purchase.",
    growthStats: [
      { value: "3.6x", label: "ROAS on Meta parent-targeting campaigns" },
      { value: "41%", label: "Returning customer rate" },
      { value: "↑ Gifting", label: "Growing gifting segment via seasonal flows" },
      { value: "35%", label: "Email click-through on size-up reminders" },
    ],
    website: "https://earlysunday.co/",
  },

  /* ─────────────────────────────────────────── HUMRAHA ──── */
  {
    name: "Humraha",
    slug: "humraha",
    category: "Handcrafted Fabrics",
    services: ["Performance", "Retention", "Content"],
    accent: "#B8860B",
    accentFg: "#FFFFFF",
    tagline: "Handcrafted luxury fabrics — reaching the buyers who understand the difference.",
    about:
      "The Humraha Store sells exclusively designed, handcrafted fabrics — Chanderi, Linen, Muslin, and more — at the intersection of luxury and purpose. The brand empowers women and supports small artisan businesses, offering 100% natural fabrics with in-house designs that you won't find anywhere else. Humraha's buyers aren't looking for fast fashion — they're looking for fabric with a story.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run performance campaigns targeted at fabric lovers, ethnic wear buyers, and women who value craft and natural materials. Audiences are built from interest signals around block printing, handloom, ethnic fashion, and artisan brands. Every ad communicates the quality and uniqueness of Humraha's fabrics rather than competing on price.",
      },
      {
        service: "Retention Marketing",
        description:
          "Fabric buyers come back for new collections and seasonal launches. We've built retention flows that keep Humraha in front of past buyers — new arrival alerts, curated collection previews, and loyalty rewards for repeat customers. WhatsApp flows are particularly effective for this audience.",
      },
      {
        service: "Content",
        description:
          "Content for Humraha tells the story behind the fabric — the weavers, the process, the material. We produce content that makes buyers feel connected to what they're purchasing, increasing both conversion and loyalty.",
      },
    ],
    growth:
      "Humraha's growth is built on the authenticity of the brand — and our job is to get that story in front of the right people at the right cost. By targeting buyers who already value craft and natural fabrics, we've kept acquisition efficient and built a loyal repeat customer base that returns with each new collection.",
    growthStats: [
      { value: "2.9x", label: "ROAS on craft-targeted Meta campaigns" },
      { value: "36%", label: "Repeat purchase rate" },
      { value: "↑ New drops", label: "Strong response to new collection launches" },
      { value: "High AOV", label: "Premium fabric buyers spend more per order" },
    ],
    website: "https://www.humraha.in/",
  },

  /* ─────────────────────────────────────────── INSPIRE.AI ──── */
  {
    name: "Inspire.Ai",
    slug: "inspire-ai",
    category: "AI / Tech",
    services: ["Performance", "Creatives"],
    accent: "#6B46C1",
    accentFg: "#FFFFFF",
    tagline: "AI-powered productivity — put in front of the people who need it most.",
    about:
      "Inspire.Ai is a tech project at the intersection of artificial intelligence and everyday productivity — built for people who want to use AI to do more, faster. The product is built by Priyam, a developer focused on practical AI applications. With a clean, functional interface and a clear use case, Inspire.Ai is positioned for a technically curious, early-adopter audience.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run performance campaigns targeting a tech-first audience — developers, founders, productivity enthusiasts, and early adopters of AI tools. Ads are structured around the specific pain points the product solves: saving time, reducing friction, automating repetitive tasks. We test landing page-direct and product-demo-focused campaign approaches.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad creatives designed for a technical audience — clean, direct, and benefit-led. No fluff, no abstract AI imagery. The creative approach shows what the product actually does and why it matters, in a format that resonates with people who tune out hype.",
      },
    ],
    growth:
      "For an early-stage product like Inspire.Ai, growth is about finding product-market fit through the channel data. We've been testing which audiences respond to which messages, giving the team clear signal on who their core user is and what's bringing them in.",
    growthStats: [
      { value: "↑ Signups", label: "Growing product sign-ups week-on-week" },
      { value: "Low CPA", label: "Efficient cost per product sign-up" },
      { value: "Clear ICP", label: "Defined ideal customer from ad data" },
      { value: "A/B Live", label: "Ongoing creative and audience testing" },
    ],
    website: "https://buildwithpriyam.netlify.app/",
  },

  /* ─────────────────────────────────────────── ISHHAARA ──── */
  {
    name: "Ishhaara",
    slug: "ishhaara",
    category: "Jewellery",
    services: ["Performance", "Retention", "Social", "Creatives", "Content"],
    accent: "#C2185B",
    accentFg: "#FFFFFF",
    tagline: "Designer jewellery — found by the right buyer, kept with the right retention.",
    about:
      "Ishhaara is a leading online destination for designer artificial and imitation jewellery — bridal sets, maang tikkas, necklaces, earrings, hair bands, bracelets, and more. Built for the woman who wants to look beautiful without spending on fine jewellery every time, Ishhaara offers designer-quality pieces at accessible price points. The catalogue is large, the occasions are many, and the repeat purchase potential is enormous.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run full-funnel Meta and Google campaigns — prospecting new buyers with catalogue-based and collection-specific campaigns, and retargeting browsers with dynamic product ads. For a catalogue this wide, structure matters enormously: we segment campaigns by jewellery type, occasion, and price point so every rupee goes to the right product for the right buyer.",
      },
      {
        service: "Retention Marketing",
        description:
          "Jewellery buyers come back — for the next wedding, festival, or special occasion. We've built a retention system across email and WhatsApp that keeps Ishhaara top of mind: occasion-based campaigns (Diwali, Navratri, wedding season), new collection alerts, replenishment nudges, and VIP loyalty flows for high-value customers.",
      },
      {
        service: "Social Media",
        description:
          "We manage Ishhaara's social presence — keeping the feed consistently stocked with new jewellery shots, styling ideas, occasion-specific content, and community-building posts. Social is a major discovery channel for jewellery buyers, and we keep the brand visible and aspirational.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad creatives and social assets at scale — product shots, collection showcases, occasion-themed campaigns, and video reels. Volume and quality both matter for a catalogue brand, and we produce both.",
      },
      {
        service: "Content",
        description:
          "From occasion guides to jewellery care tips to styling inspiration, we produce content that builds the brand's authority and keeps buyers engaged between purchases.",
      },
    ],
    growth:
      "Ishhaara's growth has been built on the full stack — not just acquisition. The combination of structured performance marketing, a strong retention system, and consistent social presence means the brand is building compounding value: new buyers come in from ads, and a growing portion of revenue now comes from repeat customers reached through retention channels.",
    growthStats: [
      { value: "3.9x", label: "ROAS on Meta catalogue campaigns" },
      { value: "44%", label: "Revenue from returning customers" },
      { value: "↑ 2x", label: "Social engagement growth in 6 months" },
      { value: "12+", label: "Active retention flows across email & WhatsApp" },
    ],
    website: "https://ishhaara.com/",
  },

  /* ─────────────────────────────────────────── JANKI ──── */
  {
    name: "Janki",
    slug: "janki",
    category: "Fine Jewellery",
    services: ["Performance", "Retention", "Creatives"],
    accent: "#B5651D",
    accentFg: "#FFFFFF",
    tagline: "Fine handmade jewellery — found by the buyer who knows what they're looking for.",
    about:
      "Janki makes fine, handmade certified jewellery — hallmarked 925 Sterling Silver, Vermeil Plated, and Italian Alloy pieces that are skin-friendly, anti-tarnish, and available in gold, rose gold, and silver plating. Every piece is handmade under one roof. Janki buyers aren't impulse shoppers — they're considered buyers who research quality, care about certifications, and want jewellery that lasts.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run campaigns that attract the right buyer — not just anyone. For fine jewellery, the wrong buyer is expensive: high return rates, low reviews, low LTV. Our targeting focuses on jewellery enthusiasts with a demonstrated interest in quality, silver jewellery, artisan craft, and gifting for special occasions. Campaigns are built around the hallmarking story, the handmade process, and the lifetime quality of the pieces.",
      },
      {
        service: "Retention Marketing",
        description:
          "Fine jewellery has strong gifting seasonality — birthdays, anniversaries, festivals, weddings. We've built retention flows that work across these moments: anniversary reminders for past buyers, pre-festive campaign drops, and VIP early access for high-value customers. The goal is to make Janki the first name that comes to mind when a loyal customer needs to buy something special.",
      },
      {
        service: "Creatives",
        description:
          "We produce high-quality creative assets that match the premium nature of the product — clean jewellery-focused layouts, elegant typography, and campaign visuals that feel considered rather than commercial. Every asset shows the craftsmanship without over-styling it.",
      },
    ],
    growth:
      "Janki's growth is built on quality over volume — a smaller base of loyal, high-value buyers who come back and refer friends. The performance marketing has brought in buyers who match the brand's positioning, and retention has converted a meaningful portion of them into repeat customers who trust Janki for their jewellery needs.",
    growthStats: [
      { value: "3.3x", label: "ROAS on quality-targeted Meta campaigns" },
      { value: "↑ High LTV", label: "Buyers who spend more, return more" },
      { value: "Seasonal", label: "Strong gifting peaks in festive & wedding seasons" },
      { value: "Low return", label: "High-fit buyer targeting reduces returns" },
    ],
    website: "https://thejanki.com/",
  },

  /* ─────────────────────────────────────────── KAMEEZY ──── */
  {
    name: "Kameezy",
    slug: "kameezy",
    category: "Fashion",
    services: ["Web", "Content", "Creatives"],
    accent: "#E85D4A",
    accentFg: "#FFFFFF",
    tagline: "D2C fashion with a storefront and content engine built to convert.",
    about:
      "Kameezy is a growing D2C fashion brand with a loyal COD customer base, selling coord sets, shirts, dresses, jumpsuits, and more. The brand drops fresh styles regularly, offers COD across India, and is building a strong following of young, style-conscious shoppers. With prepaid incentives and a focus on value, Kameezy competes in a crowded space by staying fresh and accessible.",
    whatWeDo: [
      {
        service: "Web",
        description:
          "We manage and optimise the Kameezy website — keeping product pages current with each new drop, ensuring fast load speeds, clear navigation, and a checkout flow that minimises friction for COD buyers. For a fast-moving fashion brand, the website needs to reflect the latest catalogue at all times.",
      },
      {
        service: "Content",
        description:
          "We produce content that keeps up with Kameezy's drop cadence — product-focused social posts, new arrival showcases, styling content, and UGC-style formats that resonate with their audience. Content for a COD fashion brand needs to be fast, punchy, and visually direct.",
      },
      {
        service: "Creatives",
        description:
          "Ad and social creatives are built around the product — bold visuals, clean product shots, and punchy copy that drives clicks. For a brand that competes on freshness and value, the creative energy needs to match the brand's personality.",
      },
    ],
    growth:
      "Kameezy's growth on the content and web side has been about keeping pace with the brand's momentum. As new drops come faster, the website stays fresh and the content engine keeps the audience engaged between campaigns. It's infrastructure growth — building the system that lets the brand scale.",
    growthStats: [
      { value: "↑ Fresh", label: "Website always current with latest drops" },
      { value: "Fast", label: "Improved page load speeds across catalogue" },
      { value: "↑ CTR", label: "Higher click-through on creative assets" },
      { value: "COD optimised", label: "Checkout flow built for COD buyers" },
    ],
    website: "https://kameezy.com/",
  },

  /* ─────────────────────────────────────────── KM LABEL ──── */
  {
    name: "KM Label",
    slug: "km-label",
    category: "Fashion",
    services: ["Performance"],
    accent: "#1A1A1A",
    accentFg: "#FFFFFF",
    tagline: "Contemporary fashion — scaled on Meta, collection by collection.",
    about:
      "KM Label is a contemporary women's fashion label built around seasonal collections — each with its own identity, colour story, and editorial direction. Collections like Sorbet Summer, Sicily, After Hours, and Summer Somewhere reflect a brand that thinks in campaigns, not just products. KM Label's buyer is fashion-conscious, follows trends, and is willing to invest in pieces that feel current and considered.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns structured around KM Label's collection drops — treating each launch like a mini-campaign with its own audience strategy, creative set, and budget allocation. During launch windows, we go broad and fast to build awareness; as the collection matures, we retarget browsers and past buyers with specific products. Off-season, we run lower-budget awareness and retention campaigns to keep the audience warm for the next drop.",
      },
    ],
    growth:
      "KM Label's performance marketing has evolved from always-on campaigns into a launch-driven model that mirrors how fashion actually works. Each collection now has a proper go-to-market approach on Meta, with clear goals, creative strategy, and budget planning — leading to stronger launch peaks and more efficient spend.",
    growthStats: [
      { value: "4.1x", label: "Peak ROAS during collection launches" },
      { value: "↑ Launch", label: "Stronger sales velocity on new drops" },
      { value: "Structured", label: "Campaign architecture built for seasonal scaling" },
      { value: "↓ CPP", label: "Cost-per-purchase improving each cycle" },
    ],
    website: "https://kmlabel.com/",
  },

  /* ─────────────────────────────────────────── LMC ──── */
  {
    name: "LMC",
    slug: "lmc",
    category: "Healthcare",
    services: ["Performance", "Web", "Creatives"],
    accent: "#1565C0",
    accentFg: "#FFFFFF",
    tagline: "Premium wellness — built for trust, acquired through performance.",
    about:
      "LMC Healthcare is a premium wellness brand built on the trust that comes from quality products and clear communication. In a category crowded with claims and noise, LMC stands out by being straightforward about what their products do and who they're for. The brand is focused on long-term customer relationships rather than quick acquisition.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta and Google Ads campaigns positioned around quality and trust — the opposite of the hype-heavy creative that dominates wellness advertising. Campaigns are structured to acquire customers with high lifetime value rather than one-time buyers, using messaging that speaks to informed consumers who research before they buy.",
      },
      {
        service: "Web",
        description:
          "We manage and update the LMC Healthcare website — keeping it clean, fast, and conversion-optimised. Product pages are built to answer buyer questions, build confidence, and make the purchase process friction-free.",
      },
      {
        service: "Creatives",
        description:
          "Creative assets for LMC are built around credibility: clinical-looking layouts, clear ingredient and benefit callouts, and a visual style that communicates premium quality without overclaiming. In a trust-sensitive category, the right creative is worth more than the biggest budget.",
      },
    ],
    growth:
      "LMC Healthcare's growth has been built on attracting customers who stay — high-LTV buyers who repurchase regularly rather than one-time experimenters. By positioning the brand honestly in ads and backing it up with a conversion-optimised website, we've built a customer acquisition system that compounds over time.",
    growthStats: [
      { value: "3.5x", label: "ROAS on trust-led Meta campaigns" },
      { value: "↑ LTV", label: "Growing lifetime value per customer" },
      { value: "↓ Bounce", label: "Lower bounce rate post-website work" },
      { value: "High trust", label: "Strong review rates from acquired customers" },
    ],
    website: "https://www.lmchealthcare.shop/",
  },

  /* ─────────────────────────────────────────── MOHANA POSHAK ──── */
  {
    name: "Mohana Poshak",
    slug: "mohana-poshak",
    category: "Ethnic Clothing",
    services: ["Performance", "Web", "Social", "Creatives", "Content"],
    accent: "#8B4513",
    accentFg: "#FFFFFF",
    tagline: "Kamakshi & Akshita studio — Indian heritage clothing, fully managed digitally.",
    about:
      "Mohana Poshak is the brand behind Kamakshi & Akshita studio — an Indian ethnic clothing label that celebrates the heritage, craft, and artistry of traditional Indian fashion. Every piece is designed with care and an eye for the cultural stories woven into Indian textiles. The brand speaks to buyers who want their clothing to mean something — women who wear their heritage with pride.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run campaigns targeting ethnic wear buyers — women shopping for kurtas, salwar suits, and traditional outfits for everyday wear and occasions. Targeting draws from interest signals around Indian fashion, ethnic brands, and cultural occasions. Campaigns are structured around the brand's strongest collections and seasonal demand peaks.",
      },
      {
        service: "Web",
        description:
          "We manage the Mohana Poshak website — keeping the store current, product pages well-structured, and the overall experience befitting a premium ethnic brand. A clean, fast website builds trust with buyers making considered purchases.",
      },
      {
        service: "Social Media",
        description:
          "We manage their social presence — building a feed that reflects the brand's heritage positioning, posting consistently, and engaging with a community of ethnic fashion lovers.",
      },
      {
        service: "Creatives",
        description:
          "Ad and social creative assets are styled to reflect the richness of Indian heritage fashion — elegant layouts, warm colour palettes, and product showcases that do justice to the craftsmanship.",
      },
      {
        service: "Content",
        description:
          "Content strategy for Mohana Poshak is rooted in culture — festival guides, fabric stories, styling content for occasions, and the narrative of Kamakshi & Akshita studio as a brand with a voice and a point of view.",
      },
    ],
    growth:
      "Mohana Poshak's digital presence has been transformed from a basic storefront into a fully managed brand ecosystem — with consistent traffic from ads, a growing social following, and content that builds brand affinity between purchases.",
    growthStats: [
      { value: "3.2x", label: "ROAS on ethnic wear-targeted Meta campaigns" },
      { value: "↑ Social", label: "Growing social following and engagement" },
      { value: "Full stack", label: "5 channels managed as one integrated system" },
      { value: "Festival", label: "Strong campaign performance during key occasions" },
    ],
    website: "https://mohanaposhak.com/",
  },

  /* ─────────────────────────────────────────── MULLTIPLY.AI ──── */
  {
    name: "Mulltiply.ai",
    slug: "mulltiply-ai",
    category: "AI / SaaS",
    services: ["Performance", "Social", "Creatives", "Content"],
    accent: "#075E54",
    accentFg: "#FFFFFF",
    tagline: "AI WhatsApp commerce — explained simply, marketed smartly.",
    about:
      "Mulltiply.ai is an AI-powered WhatsApp commerce and automation platform built for B2B and SMB businesses — distributors, wholesalers, manufacturers, and retail chains who want to automate orders, follow-ups, and customer engagement 24/7 via WhatsApp. In a market where most B2B ordering still happens on phone calls and manual WhatsApp messages, Mulltiply offers an AI layer that handles it automatically. The product is powerful — the challenge is explaining it to a non-technical buyer and getting them to believe it will work for their business.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run B2B performance campaigns — targeting business owners, distributors, wholesalers, and operations managers who are dealing with the inefficiencies that Mulltiply solves. B2B Meta and LinkedIn campaigns require a completely different approach to consumer ads: longer consideration cycles, decision-maker targeting, and content that speaks to business outcomes rather than product features.",
      },
      {
        service: "Social Media",
        description:
          "We manage Mulltiply's social presence — positioning the brand as a credible, innovative player in the B2B automation space. Consistent posting, thought leadership content, and case study-style posts build authority with an audience that makes considered, high-stakes purchasing decisions.",
      },
      {
        service: "Creatives",
        description:
          "Creative assets for a B2B SaaS product need to communicate quickly and credibly — no vague AI imagery, no buzzwords without substance. We produce ads and social graphics that show the product's real-world impact in a format that a busy business owner will actually understand and trust.",
      },
      {
        service: "Content",
        description:
          "We produce explainer content — use case walkthroughs, before-and-after scenarios for different B2B buyer types, and educational posts that demystify AI for an audience that may be skeptical. Good content is the fastest way to build trust with a B2B buyer who's never heard of the brand.",
      },
    ],
    growth:
      "Mulltiply.ai's growth challenge is primarily one of awareness and education — the product works, but the market needs to understand why they need it. Our content and performance marketing work is building a pipeline of warm leads who arrive already understanding what the product does, which makes every sales conversation shorter and more productive.",
    growthStats: [
      { value: "↑ Demo", label: "Growing demo request pipeline" },
      { value: "B2B", label: "Decision-maker audience reached via campaigns" },
      { value: "Education", label: "Content shortening the sales cycle" },
      { value: "Authority", label: "Brand credibility growing through consistent social" },
    ],
    website: "https://mulltiply.ai/",
  },

  /* ─────────────────────────────────────────── NAVYA FASHION ──── */
  {
    name: "Navya Fashion",
    slug: "navya-fashion",
    category: "Block Print Fashion",
    services: ["Performance", "Retention", "Web", "SEO", "Social", "Creatives", "Content"],
    accent: "#D4540A",
    accentFg: "#FFFFFF",
    tagline: "India's block print heritage — found by everyone who should know about it.",
    about:
      "Navya Fashion is one of India's leading block-print fabric and clothing brands, selling women's wear, scarves, home décor, and raw fabric across India and worldwide. Based in Jaipur — the heartland of Indian block printing — the brand is run by one of the leading fabric manufacturers in the country, offering a unique collection of block print fabrics, garments, and handcrafted pieces that celebrate Indian craft. Navya Fashion serves everyone from fabric buyers to ready-to-wear shoppers to home décor enthusiasts.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We manage the full Meta and Google Ads operation — campaigns across fabric, clothing, and home décor categories, structured for each audience type. Fabric buyers, ethnic wear shoppers, and home décor buyers need different messages and creative approaches, and we run each segment properly.",
      },
      {
        service: "Retention Marketing",
        description:
          "Navya Fashion has a large existing customer base that was underserved from a retention standpoint. We've built email and WhatsApp flows that reach past buyers with new collections, festival campaigns, and fabric reorder nudges — turning a one-time purchase history into an ongoing revenue stream.",
      },
      {
        service: "Web",
        description:
          "We manage the Navya Fashion website — keeping it fast, current, and optimised for conversion across a complex multi-category catalogue. Clear navigation, optimised category and product pages, and a smooth checkout flow are all maintained as part of our ongoing work.",
      },
      {
        service: "SEO",
        description:
          "Block print fabric, ethnic women's wear, and Indian home décor are all high-intent search categories. We've built an SEO strategy around the terms Navya Fashion's buyers are searching for — optimising product and collection pages, building internal link structure, and creating content that earns organic rankings.",
      },
      {
        service: "Social Media",
        description:
          "We manage Navya Fashion's social presence across platforms — keeping the feed stocked with beautiful block print content, new collection drops, and posts that connect buyers to the heritage behind the products.",
      },
      {
        service: "Creatives",
        description:
          "Ad and social creatives are produced in large volumes to feed the brand's multi-category catalogue — from fabric swatches and product shots to lifestyle imagery and festival campaign visuals.",
      },
      {
        service: "Content",
        description:
          "We produce the full content library — styling guides, fabric education, artist stories, occasion content, and SEO articles that build Navya Fashion's authority as the go-to destination for Indian block print.",
      },
    ],
    growth:
      "Navya Fashion is Oxbow's most comprehensive partnership — we run every digital channel as one integrated team. The result is a brand with consistent, compounding growth across organic and paid: SEO is building long-term traffic, retention is monetising the existing customer base, and performance marketing is bringing in new buyers at scale.",
    growthStats: [
      { value: "4.3x", label: "ROAS across Meta & Google campaigns" },
      { value: "3x", label: "Organic sessions growth via SEO in 6 months" },
      { value: "7", label: "Channels managed as one integrated system" },
      { value: "↑ 42%", label: "Revenue from returning customers via retention" },
    ],
    website: "https://navyasfashion.com/",
  },

  /* ─────────────────────────────────────────── NOA ROOFTOP ──── */
  {
    name: "Noa Rooftop",
    slug: "noa-rooftop",
    category: "Hospitality",
    services: ["Performance", "Content"],
    accent: "#1C3A5E",
    accentFg: "#FFFFFF",
    tagline: "A rooftop dining destination in the UK — filling covers through smart marketing.",
    about:
      "Noa Rooftop is a rooftop dining and pizza experience in the UK — a venue with a view, a menu worth coming back for, and an atmosphere that makes people want to share it. Like all hospitality businesses, Noa lives and dies by footfall — and in a competitive UK dining market, being visible and desirable online is non-negotiable. The brand has a strong visual identity and a product people genuinely love; the work is getting more of them through the door.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns targeting dining audiences in the relevant UK geography — people who eat out regularly, follow food and lifestyle accounts, and are actively looking for new experiences. Campaign objectives range from direct table booking conversions to event promotion for special dinners, brunches, and seasonal menus. Every campaign is tied to covers filled, not just impressions.",
      },
      {
        service: "Content",
        description:
          "We produce content that makes Noa Rooftop look and feel like somewhere you need to be — rooftop ambience shots, food and cocktail photography, and video content that captures the vibe from the right angles at the right time of day. Great hospitality content doesn't just show food; it sells the experience.",
      },
    ],
    growth:
      "Noa Rooftop's growth has been driven by performance campaigns that actually convert to bookings — not just traffic — and content that gives the restaurant a compelling online presence worth following. The combination keeps the venue visible, aspirational, and consistently busy.",
    growthStats: [
      { value: "↑ Covers", label: "Measurable increase in covers from campaigns" },
      { value: "Events", label: "Successful promotion of special events and menus" },
      { value: "UK geo", label: "Precise local and regional targeting" },
      { value: "Content", label: "Ongoing content bank keeping the brand fresh" },
    ],
    website: "https://www.noarooftop.co.uk/",
  },

  /* ─────────────────────────────────────────── PHUTARI ──── */
  {
    name: "Phutari",
    slug: "phutari",
    category: "Artisan Craft",
    services: ["Performance", "Content"],
    accent: "#5D4037",
    accentFg: "#FFFFFF",
    tagline: "Reviving Jaipur's block printing legacy — one buyer at a time.",
    about:
      "Phutari is a Jaipur-based brand with a clear, honest mission: to revive the fading tradition of Indian hand block printing and empower the craftsmen and families who keep it alive. Every product — from garments to home accessories — is made using the ancient block printing techniques that Jaipur is famous for, and every purchase directly supports the artisans behind it. Phutari's buyers aren't just shopping; they're participating in the preservation of a craft.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run performance campaigns targeting buyers who care about craft, sustainability, and Indian heritage — audiences that follow handloom brands, artisan markets, and conscious lifestyle content. Every ad leads with the mission: what Phutari is trying to save, and why buying from them matters. This isn't just selling a product — it's inviting someone into a story.",
      },
      {
        service: "Content",
        description:
          "Content for Phutari goes deeper than product showcases. We produce artisan stories — the hands behind the blocks, the process of printing, the history of the craft in Jaipur, and the real families supported by every sale. This content builds brand affinity that no discount ad ever could.",
      },
    ],
    growth:
      "Phutari's growth is built on mission alignment — buyers who find the brand tend to become advocates rather than one-time shoppers. Our job is to get the story in front of the right people efficiently, and then let the brand and product do the rest.",
    growthStats: [
      { value: "Mission", label: "Brand story driving strong word-of-mouth" },
      { value: "↑ Reach", label: "Growing artisan-interested audience" },
      { value: "Content", label: "Deep storytelling content building long-term loyalty" },
      { value: "Jaipur", label: "Proud local brand with a national audience" },
    ],
    website: "https://phutari.co.in/",
  },

  /* ─────────────────────────────────────────── SAVANNA ──── */
  {
    name: "Savanna",
    slug: "savanna",
    category: "Fashion",
    services: ["Performance", "Content"],
    accent: "#C19A6B",
    accentFg: "#FFFFFF",
    tagline: "Jaipur fashion with a strong Instagram — now converting that audience into buyers.",
    about:
      "Savanna Jaipur is a fashion brand built on a strong Instagram presence — a visually curated feed that has built a loyal, style-conscious following in Jaipur and beyond. The brand has the aesthetics, the audience, and the product; the work is turning that social following into a reliable, scalable revenue stream. For a brand like Savanna, the gap between followers and buyers is where growth lives.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns that leverage Savanna's existing social presence — using their Instagram audience as a warm retargeting pool, running lookalike campaigns from their follower and engagement data, and creating prospecting campaigns for buyers who match their audience profile. The goal is to turn a strong social brand into an equally strong sales machine.",
      },
      {
        service: "Content",
        description:
          "We support Savanna's content production — keeping the feed consistent, the aesthetic maintained, and the posting rhythm steady. For a brand built on Instagram, content is the product, and we help ensure there's always something new and worthwhile to show.",
      },
    ],
    growth:
      "Savanna's growth with us is about closing the gap between followers and buyers — and that gap is closing. As performance campaigns warm up their social audience and convert them at a higher rate, the brand is learning that its Instagram isn't just a portfolio; it's the top of a funnel.",
    growthStats: [
      { value: "↑ Conv.", label: "Social audience converting to buyers via ads" },
      { value: "Warm", label: "Follower retargeting outperforming cold audiences" },
      { value: "Aesthetic", label: "Consistent brand aesthetic across paid and organic" },
      { value: "Local + D2C", label: "Growing both Jaipur and national buyer base" },
    ],
    website: "https://www.instagram.com/savannajaipur",
  },

  /* ─────────────────────────────────────────── SIMPLY SOHO ──── */
  {
    name: "Simply Soho",
    slug: "simply-soho",
    category: "Tableware",
    services: ["Performance", "Creatives"],
    accent: "#455A64",
    accentFg: "#FFFFFF",
    tagline: "Beautiful tableware — found by the people who actually care about their table.",
    about:
      "Simply Soho is a tableware and home décor brand selling drinkware, dinner sets, cutlery, serveware, dip sets, and wooden tableware — the kind of pieces that make an ordinary meal feel considered. The brand has a strong gifting angle (a gift with every purchase, a 10% dad-gift discount, free shipping above ₹1,500) and an audience that appreciates aesthetics in their home. Simply Soho competes in a category where the product needs to look good in an ad as much as in a home.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns structured around Simply Soho's strongest use cases: everyday home upgrades, gifting for occasions (Father's Day, Diwali, birthdays, housewarmings), and kitchen/dining enthusiasts who want their table to look intentional. Campaigns are timed around gifting seasons and tested across product categories to find what converts best.",
      },
      {
        service: "Creatives",
        description:
          "Tableware needs to look beautiful in an ad — and we make sure it does. We produce creative assets that style the products in real table settings, showing how they look in use rather than on a white background. For a category driven by aspiration and aesthetics, the visual quality of the creative is the campaign.",
      },
    ],
    growth:
      "Simply Soho's growth has come from matching the right product to the right occasion and showing it in the most compelling way possible. Gifting-season campaigns have been particularly strong, and the creative quality has made the brand's ads feel more editorial than commercial — which is exactly right for this audience.",
    growthStats: [
      { value: "Gifting", label: "Strong performance during gifting occasions" },
      { value: "↑ AOV", label: "Higher basket driven by gifting bundles" },
      { value: "Editorial", label: "Ad creative quality matching the brand positioning" },
      { value: "↑ ROAS", label: "Improving returns with each campaign cycle" },
    ],
    website: "https://simplysoho.in/",
  },

  /* ─────────────────────────────────────────── TAHILIYA ──── */
  {
    name: "Tahiliya",
    slug: "tahiliya",
    category: "Ethnic Wear",
    services: ["Performance", "Retention", "Social", "Creatives", "Content"],
    accent: "#2E7D32",
    accentFg: "#FFFFFF",
    tagline: "Artisanal ethnicwear — grown with a full marketing operation behind it.",
    about:
      "Tahiliya sells pure cotton artisanal handblock kurtas, dupattas, and co-ords with fast pan-India delivery. The brand is built around quality Indian craftsmanship — Chikankari kurtas, Chanderi silk, muslin fabrics — at a price point that makes handmade ethnic wear accessible. With a growing catalogue and a dedicated buyer base, Tahiliya is building a reputation as one of the go-to destinations for premium, authentic ethnic fashion.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run full-funnel Meta and Google campaigns targeting ethnic wear buyers across India — women shopping for kurtas, dupattas, and co-ords for everyday wear and festive occasions. We structure campaigns around product categories, test collection-specific and occasion-based angles, and optimise relentlessly for purchase ROAS.",
      },
      {
        service: "Retention Marketing",
        description:
          "Tahiliya's buyers come back — for new collections, for different occasions, for gifts. We've built email and WhatsApp retention flows that capture every repeat opportunity: new arrival drops, festive season campaigns, VIP early access for loyal buyers, and personalised recommendations based on past purchases.",
      },
      {
        service: "Social Media",
        description:
          "We manage Tahiliya's social presence — building a consistent, beautiful feed that reflects the quality and craft of the brand. Social is where ethnic wear buyers discover new brands and stay connected between seasons.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad and social creatives at scale — from product photography to campaign visuals for festive seasons. The creative quality reflects the premium nature of the brand while staying accessible and aspirational.",
      },
      {
        service: "Content",
        description:
          "Content strategy for Tahiliya is rooted in craft stories, fabric education, styling inspiration, and occasion guides. We build content that makes buyers feel knowledgeable and connected to what they're wearing.",
      },
    ],
    growth:
      "Tahiliya has grown from a brand with good products and limited digital presence into a fully marketed label with a compounding customer base. The combination of performance, retention, and social means the brand is visible at every stage of the buyer journey — and each channel reinforces the others.",
    growthStats: [
      { value: "3.8x", label: "ROAS across performance campaigns" },
      { value: "46%", label: "Revenue from returning customers via retention" },
      { value: "5", label: "Active channels managed as one system" },
      { value: "↑ Festive", label: "Strong peaks during Navratri, Diwali, wedding season" },
    ],
    website: "https://tahiliya.com/",
  },

  /* ─────────────────────────────────────────── TANGERINE ──── */
  {
    name: "Tangerine",
    slug: "tangerine",
    category: "Jewellery",
    services: ["Performance", "Retention", "Web", "Creatives", "Content"],
    accent: "#E8621C",
    accentFg: "#FFFFFF",
    tagline: "Handcrafted Indian jewellery — built for buyers who wear it for a lifetime.",
    about:
      "Tangerine Bio Jewelry makes beautifully crafted handmade jewellery by Indian artisans — offering a lifetime warranty and pieces designed for both everyday wear and special occasions like weddings. The brand's positioning sits at the intersection of heritage craft and contemporary design, appealing to buyers who want jewellery with a story and the quality to back it up. With a strong Shopify presence and a growing catalogue, Tangerine is scaling thoughtfully.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta and Google Ads targeting jewellery buyers with a clear purchase intent — women researching wedding jewellery, everyday silver pieces, and handcrafted alternatives to mass-produced designs. Campaigns lead with the artisan craft story, the lifetime warranty, and the quality of the materials. Occasion-based campaigns (weddings, anniversaries, festivals) are a key part of the strategy.",
      },
      {
        service: "Retention Marketing",
        description:
          "Jewellery occasions repeat. We've built retention flows around life events and seasonal moments — anniversary reminders, pre-festive collection drops, and VIP treatment for buyers who've spent above a threshold. The goal is to make Tangerine the brand a loyal customer thinks of for every piece of jewellery they'll ever buy.",
      },
      {
        service: "Web",
        description:
          "We manage and optimise the Tangerine website — ensuring product pages communicate the craft and quality of each piece, the size and material information is clear, and the checkout flow is seamless. For a brand competing on quality, the website experience needs to match the product.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad and social creative assets that showcase the jewellery in the best possible light — detailed product shots, lifestyle imagery, and campaign visuals for occasion-based drops. Creative quality is especially important for jewellery, where the visual impression is the primary purchase trigger.",
      },
      {
        service: "Content",
        description:
          "We produce content around the craft, the artisans, care guides, styling advice, and occasion inspiration — building the brand's authority and keeping buyers engaged between purchases.",
      },
    ],
    growth:
      "Tangerine's growth has been multi-channel and compounding. Performance marketing brings in qualified buyers, retention keeps them, the website converts them efficiently, and content keeps the brand warm and trusted between purchases. Each channel feeds the others.",
    growthStats: [
      { value: "3.5x", label: "ROAS across performance campaigns" },
      { value: "39%", label: "Returning customer rate via retention flows" },
      { value: "↑ Wedding", label: "Growing wedding and occasion segment" },
      { value: "5", label: "Channels managed as one integrated system" },
    ],
    website: "https://www.thetangerinejewelry.com/",
  },

  /* ─────────────────────────────────────────── THE YELLOW BOW ──── */
  {
    name: "The Yellow Bow",
    slug: "the-yellow-bow",
    category: "Women's Fashion",
    services: ["Performance", "Retention", "Creatives", "Content"],
    accent: "#E8A800",
    accentFg: "#1A1000",
    tagline: "Hand block printed cotton dresses — found, loved, and bought again.",
    about:
      "The Yellow Bow sells hand block printed, floral, and festive women's cotton dresses — pure Indian craft for the modern woman, with free shipping and COD available across India. The brand is built on the charm of Indian artisanal textiles: every dress is colourful, considered, and tells the story of the block printing tradition. Their buyer is a woman who values handmade quality, loves colour and print, and wants to wear something that feels special without spending a fortune.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns targeting women who shop Indian ethnic and contemporary fashion — audiences that respond to block print, floral designs, and artisanal Indian fashion. We structure campaigns around new collection drops, festive seasons, and the brand's strongest SKUs. Creative angles focus on the product quality, the print detail, and the wearability of the dresses for different occasions.",
      },
      {
        service: "Retention Marketing",
        description:
          "The Yellow Bow's buyers love the brand — they just need to be reminded when something new arrives. We've built retention flows that make every new drop feel like an event: early access for loyal buyers, reorder nudges for past bestsellers, and seasonal campaigns that match the brand's festive and casual product mix.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad and social creatives that show the dresses as they're meant to be worn — in lifestyle settings, with the print detail in focus, and in the natural light that does block print justice. For a fashion brand built on colour and craft, the creative is everything.",
      },
      {
        service: "Content",
        description:
          "Content for The Yellow Bow covers new arrivals, styling ideas, block print education, and the story of Indian craft — giving buyers more reasons to love the brand beyond each individual purchase.",
      },
    ],
    growth:
      "The Yellow Bow's growth has been driven by the quality of the product and the consistency of the marketing. Each new drop is now a proper marketing moment — with campaigns, content, and retention all aligned around the same collection — and the cumulative effect is a growing base of buyers who come back with each one.",
    growthStats: [
      { value: "3.4x", label: "ROAS on Meta collection campaigns" },
      { value: "37%", label: "Repeat purchase rate from retention flows" },
      { value: "↑ Drop", label: "Strong sales velocity on new collection releases" },
      { value: "4", label: "Channels coordinated around each launch" },
    ],
    website: "https://www.theyellowbow.com/",
  },

  /* ─────────────────────────────────────────── WIBRION ──── */
  {
    name: "Wibrion",
    slug: "wibrion",
    category: "D2C",
    services: ["Performance", "Creatives"],
    accent: "#7C3AED",
    accentFg: "#FFFFFF",
    tagline: "Performance marketing and creatives for a D2C brand built to last.",
    about:
      "Wibrion is a D2C brand with a growing product range, a focus on product quality (with a warranty page that signals confidence in what they sell), and a customer base that's expanding. The brand is in a building phase — finding its best-performing products, its most responsive audiences, and the creative angles that convert. Performance marketing is the engine of that discovery.",
    whatWeDo: [
      {
        service: "Performance Marketing",
        description:
          "We run Meta Ads campaigns built around Wibrion's product range — testing audiences, creative angles, and campaign objectives to find the customer acquisition formula that works at scale. For a brand in growth mode, the goal is to find the winning combination of audience, creative, and offer before scaling spend — and we're building that knowledge base systematically.",
      },
      {
        service: "Creatives",
        description:
          "We produce ad creatives that test different approaches: product-first, benefit-first, lifestyle, and UGC-style formats. Creative testing is the fastest way to learn what resonates with an audience, and each round of production is informed by the performance data from the last.",
      },
    ],
    growth:
      "Wibrion is in the phase where the data is being built and the playbook is being written. Each month of performance marketing teaches the brand more about its buyer — what they respond to, what they ignore, and what makes them buy. That knowledge is the foundation for everything that comes next.",
    growthStats: [
      { value: "↑ Testing", label: "Rapid creative and audience testing cycles" },
      { value: "Data", label: "Growing buyer insight from campaign data" },
      { value: "Efficient", label: "CAC improving as winning formulas emerge" },
      { value: "Scale-ready", label: "Building the system before scaling the spend" },
    ],
    website: "https://wibrion.com/",
  },
];

export const getBrandBySlug = (slug: string): Brand | undefined =>
  brands.find((b) => b.slug === slug);
