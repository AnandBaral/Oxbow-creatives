import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, ScaleIn, StaggerGroup, StaggerItem, EASE_EXPO } from "@/components/site/Kinetic";
import { MagneticButton } from "@/components/site/MagneticButton";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oxbow Creatives | Start Your Project" },
      { name: "description", content: "Get in touch with Oxbow Creatives. Branding, websites, Shopify stores and performance marketing — based in Jaipur, working with 100+ brands across worldwide." },
    ],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const contactRows = [
    { Icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneRaw}` },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <section className="forest-section pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <FadeUp><p className="kicker">Contact / Studio</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-8 text-cream font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.75rem,8vw,6rem)]">
                Let's start your <span className="text-mint">project.</span>
              </h1>
            </FadeUp>
          </div>
          <div className="lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="text-cream/80 leading-relaxed">
                Tell us a bit about your business and what you're looking to build.
                We'll reply within one business day.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: contact details */}
          <FadeUp className="lg:col-span-5">
            <motion.div
              className="bento-card bg-paper p-8 md:p-10"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <p className="kicker">Reach us directly</p>

              <div className="mt-8 space-y-1">
                {contactRows.map(({ Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    data-cursor="link"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    className="group grid grid-cols-12 items-center gap-4 py-5 border-t border-border"
                  >
                    <Icon className="col-span-1 h-4 w-4 text-forest" />
                    <div className="col-span-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
                    <div className="col-span-8 text-lg font-medium group-hover:text-forest transition-colors break-all">{value}</div>
                  </motion.a>
                ))}
                <div className="grid grid-cols-12 items-start gap-4 py-5 border-y border-border">
                  <MapPin className="col-span-1 h-4 w-4 text-forest mt-1.5" />
                  <div className="col-span-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground pt-1">Studio</div>
                  <div className="col-span-8 leading-relaxed text-sm">{site.address}</div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</span>
                <span className="h-px w-8 bg-border" />
                <StaggerGroup className="flex gap-3">
                  {[
                    { href: site.socials.instagram, Icon: Instagram, label: "Instagram" },
                    { href: site.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                    { href: site.socials.facebook, Icon: Facebook, label: "Facebook" },
                  ].map(({ href, Icon, label }) => (
                    <StaggerItem key={label}>
                      <motion.a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        className="p-2.5 rounded-full border border-border hover:bg-forest hover:text-cream transition-colors inline-flex"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </motion.div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bento-card bg-paper p-8 md:p-12 space-y-8">
              <input type="hidden" name="access_key" value="REPLACE_WITH_OXBOW_WEB3FORMS_KEY" />
              <input type="hidden" name="subject" value="New inquiry from Oxbow Creatives website" />
              <input type="hidden" name="from_name" value="Oxbow Creatives Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Your name" name="name" required />
                <Field label="Business name" name="business" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="What do you need" name="goal" placeholder="Website, Shopify, branding, ads…" />
              </div>

              <Field
                label="Tell us about your project"
                name="message"
                required
                textarea
                placeholder="What are you looking to build, and what's the timeline?"
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">We reply within one business day. Usually faster.</p>
                <MagneticButton strength={status === "idle" ? 0.3 : 0}>
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    data-cursor="link"
                    whileTap={{ scale: 0.96 }}
                    className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={status}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-2"
                      >
                        {status === "loading" && <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>}
                        {status === "success" && <><Check className="h-4 w-4" /> Message sent</>}
                        {status === "error" && <>Try again <Send className="h-4 w-4" /></>}
                        {status === "idle" && <>Send message <Send className="h-4 w-4" /></>}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </MagneticButton>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="flex items-center gap-3 rounded-xl bg-mint-soft border border-forest/25 px-4 py-3 text-sm text-forest-deep overflow-hidden"
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    Thank you. We'll get back to you within one business day.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="flex items-center gap-3 rounded-xl bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive overflow-hidden"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const base =
    "mt-3 w-full bg-transparent border-0 border-b border-ink/20 px-0 py-3 text-lg outline-none transition-colors duration-300 placeholder:text-ink/30";
  return (
    <label className="block relative">
      <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${focused ? "text-forest" : "text-muted-foreground"}`}>
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={base}
        />
      )}
      {/* Animated underline that expands from left on focus */}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-forest"
        initial={{ width: "0%" }}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
    </label>
  );
}
