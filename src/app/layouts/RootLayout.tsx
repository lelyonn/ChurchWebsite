import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { EMBEDDED_FOOTER_PATHS } from "../config/site";
import GlobalHomeLogo from "../components/GlobalHomeLogo";
import GlobalRouteMenu from "../components/GlobalRouteMenu";
import PointerEffects from "../components/PointerEffects";
import SiteFooter from "../components/SiteFooter";
import StickyNav from "../components/StickyNav";

const STICKY_NAV_OFFSET = 76;

function getHashTargetId(hash: string) {
  let targetId = hash.slice(1);

  try {
    targetId = decodeURIComponent(targetId);
  } catch {
    // Keep the raw hash when it is not a valid encoded URI component.
  }

  return targetId;
}

function scrollToHash(hash: string) {
  const targetId = getHashTargetId(hash);

  if (targetId === "home") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return true;
  }

  const target = document.getElementById(targetId);

  if (target) {
    const frame = target.closest<HTMLElement>("[data-figma-frame='true']");
    const canvas = target.closest<HTMLElement>("[data-figma-canvas='true']");

    if (frame && canvas) {
      const scale = Number(frame.dataset.figmaScale) || 1;
      const canvasTop = frame.getBoundingClientRect().top + window.scrollY;
      const targetTop = target.offsetTop * scale;

      window.scrollTo({
        top: Math.max(0, canvasTop + targetTop - STICKY_NAV_OFFSET),
        left: 0,
        behavior: "smooth",
      });

      return true;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  return false;
}

function AnchorNavigation() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[href^='#']",
      );

      if (!anchor) {
        return;
      }

      const hash = anchor.hash;

      if (!hash || hash === "#") {
        return;
      }

      if (scrollToHash(hash)) {
        event.preventDefault();
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && scrollToHash(hash)) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function hasEmbeddedFooter(
  pathname: string,
): pathname is (typeof EMBEDDED_FOOTER_PATHS)[number] {
  return (EMBEDDED_FOOTER_PATHS as readonly string[]).includes(pathname);
}

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="geis-app-shell min-h-screen w-full bg-[#f8f6f0] overflow-x-hidden flex flex-col">
      <AnchorNavigation />
      <ScrollToTop />
      <PointerEffects />
      <GlobalHomeLogo />
      <GlobalRouteMenu />
      <StickyNav />
      <div className="relative z-[1] flex-1" data-page-content="true">
        <Outlet />
      </div>
      {!hasEmbeddedFooter(pathname) && <SiteFooter />}
    </div>
  );
}
