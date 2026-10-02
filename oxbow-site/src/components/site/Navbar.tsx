import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/site/MagneticButton";
import { EASE_EXPO } from "@/components/site/Kinetic";

// Logo lives at /public/images/logo.png — replace that file with your real logo.
const LOGO_URL = "/images/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/work", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Hide on scroll down (past navbar height), show on scroll up
      if (y > lastY.current && y > 140) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: EASE_EXPO }}
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : "bg-paper"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" data-cursor="link" className="flex items-center gap-2.5 group">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-ink"
            >
              <img src={LOGO_URL} alt="Oxbow Creatives" className="h-8 w-8 md:h-9 md:w-9 object-contain" />
            </motion.span>
            <span className="flex items-baseline gap-2">
              <span className="logo-font text-2xl md:text-3xl text-ink tracking-tight leading-none">
                Oxbow
              </span>
              <span className="logo-font text-[10px] uppercase tracking-[0.32em] text-muted-foreground hidden sm:inline pb-0.5">
                creatives
              </span>
            </span>
          </Link>

          {/* Desktop nav with sliding active-pill indicator */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {links.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  data-cursor="link"
                  className="relative px-4 py-2 text-sm transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-ink/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${active ? "text-ink font-medium" : "text-ink/65 hover:text-ink"}`}>
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <MagneticButton strength={0.4}>
              <Link
                to="/contact"
                data-cursor="link"
                className="inline-flex items-center px-7 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:bg-mint hover:text-ink transition-colors"
              >
                Hire Us
              </Link>
            </MagneticButton>
          </div>

          <motion.button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-full border border-border"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_EXPO }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 pt-2 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: EASE_EXPO, delay: i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block px-2 py-3 text-lg ${isActive(l.to) ? "text-ink font-medium" : "text-ink/75"}`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO, delay: links.length * 0.05 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex justify-center items-center w-full px-7 py-3 rounded-full bg-ink text-paper text-sm font-medium"
                  >
                    Hire Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
