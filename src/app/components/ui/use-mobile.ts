import * as React from "react";

const MOBILE_BREAKPOINT = 1024;

function isMobileUserAgent() {
  if (typeof navigator === "undefined") {
    return false;
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    navigator.userAgent,
  );
}

function hasMobilePointer() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches ||
    navigator.maxTouchPoints > 0
  );
}

function getViewportWidth() {
  if (typeof window === "undefined") {
    return Number.POSITIVE_INFINITY;
  }

  return Math.min(
    window.innerWidth,
    window.visualViewport?.width ?? window.innerWidth,
  );
}

function detectMobileViewport() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    getViewportWidth() < MOBILE_BREAKPOINT ||
    isMobileUserAgent() ||
    hasMobilePointer()
  );
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    () => (typeof window === "undefined" ? undefined : detectMobileViewport()),
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const pointerMql = window.matchMedia("(pointer: coarse)");
    const hoverMql = window.matchMedia("(hover: none)");
    const onChange = () => {
      setIsMobile(detectMobileViewport());
    };

    mql.addEventListener("change", onChange);
    pointerMql.addEventListener("change", onChange);
    hoverMql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.visualViewport?.addEventListener("resize", onChange);
    setIsMobile(detectMobileViewport());

    return () => {
      mql.removeEventListener("change", onChange);
      pointerMql.removeEventListener("change", onChange);
      hoverMql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      window.visualViewport?.removeEventListener("resize", onChange);
    };
  }, []);

  return !!isMobile;
}
