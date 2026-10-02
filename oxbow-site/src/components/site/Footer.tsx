import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/site/Kinetic";
import { MagneticButton } from "@/components/site/MagneticButton";

export function Footer() {
  return (
    <footer className="forest-section overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeUp><p className="kicker">From Jaipur, with intent</p></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-cream">
                Let's build<br />
                <span className="text-mint">something honest.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <MagneticButton strength={0.3} className="mt-10">
                <Link
                  to="/contact"
                  data-cursor="view"
                  data-cursor-label="Start →"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-paper text-forest font-medium hover:bg-mint transition-colors"
                >
                  Start a project
                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10 justify-between">
            <FadeUp delay={0.1}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-mint">Office</p>
              <p className="mt-4 text-sm text-cream/80 leading-relaxed">{site.address}</p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-mint">Get in touch</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
                </li>
                <li>
                  <a href={`tel:${site.phoneRaw}`} className="link-underline">{site.phone}</a>
                </li>
              </ul>
              <StaggerGroup className="mt-6 flex gap-3">
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
                      className="p-2.5 rounded-full border border-cream/25 hover:bg-cream/10 hover:border-mint/50 transition-colors inline-flex"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-20 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream/55">
            <p>© {new Date().getFullYear()} Oxbow Creatives. Made in the Pink City.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <Link to="/services" className="link-underline">Services</Link>
              <Link to="/work" className="link-underline">Portfolio</Link>
              <Link to="/about" className="link-underline">About</Link>
              <Link to="/contact" className="link-underline">Contact</Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
