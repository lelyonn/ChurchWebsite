import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, select, textarea";

export default function PointerEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (reduceMotion.matches || !finePointer.matches) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      glowRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
      glowRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        INTERACTIVE_SELECTOR,
      );

      if (!target || target.closest("[data-no-click-effect='true']")) {
        return;
      }

      const ripple = document.createElement("span");

      ripple.className = "geis-click-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      document.body.appendChild(ripple);

      window.setTimeout(() => ripple.remove(), 620);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return <div ref={glowRef} className="geis-pointer-glow" aria-hidden="true" />;
}
