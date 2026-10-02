import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth-scroll provider — gives the whole site Apple/Linear-style
 * momentum scrolling instead of the browser's native instant scroll.
 * Respects prefers-reduced-motion and is a no-op during SSR.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      syncTouch: false,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Expose globally so other components (e.g. anchor links) can hook in
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as any).__lenis = undefined;
    };
  }, []);

  return null;
}
