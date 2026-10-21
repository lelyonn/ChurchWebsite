import * as React from "react";

const MOBILE_BREAKPOINT = 1024;

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

  return getViewportWidth() < MOBILE_BREAKPOINT;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    () => (typeof window === "undefined" ? undefined : detectMobileViewport()),
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(detectMobileViewport());
    };

    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.visualViewport?.addEventListener("resize", onChange);
    setIsMobile(detectMobileViewport());

    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      window.visualViewport?.removeEventListener("resize", onChange);
    };
  }, []);

  return !!isMobile;
}
