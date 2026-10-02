import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small cream dot that morphs into a labelled circle
 * over interactive elements. Desktop only; respects prefers-reduced-motion.
 *
 * Targeted via `data-cursor` on links/buttons:
 *   data-cursor="link"       → small circle
 *   data-cursor="view"       → "View →" pill (case studies)
 *   data-cursor="drag"       → "Drag" label
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<"idle" | "link" | "view" | "drag">("idle");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      if (!el) { setState("idle"); setLabel(""); return; }
      const kind = el.dataset.cursor;
      if (kind === "view") { setState("view"); setLabel(el.dataset.cursorLabel || "View →"); }
      else if (kind === "drag") { setState("drag"); setLabel("Drag"); }
      else { setState("link"); setLabel(""); }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-dot" data-state={state}>{label}</div>;
}
