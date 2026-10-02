import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";
import { EASE_EXPO } from "@/components/site/Kinetic";

/**
 * Wraps route content so every navigation gets a smooth, Apple-style
 * cross-fade + rise transition instead of an abrupt swap. Also resets
 * scroll position (native + Lenis) to the top on every route change.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [topBarKey, setTopBarKey] = useState(0);

  useEffect(() => {
    // Reset scroll on route change — both native and Lenis-driven
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    setTopBarKey((k) => k + 1);
  }, [pathname]);

  return (
    <>
      {/* Top loading accent bar — fires briefly on every route change */}
      <AnimatePresence>
        <motion.div
          key={topBarKey}
          className="fixed top-0 left-0 h-[2px] bg-mint z-[100] pointer-events-none"
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: "100%", opacity: [1, 1, 0] }}
          transition={{ duration: 0.6, times: [0, 0.8, 1], ease: EASE_EXPO }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: EASE_EXPO }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
