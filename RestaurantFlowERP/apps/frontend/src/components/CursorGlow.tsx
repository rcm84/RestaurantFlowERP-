"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    let raf = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.2;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--mx", `${x}px`);
          document.documentElement.style.setProperty("--my", `${y}px`);
          raf = 0;
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-glow" />;
}
