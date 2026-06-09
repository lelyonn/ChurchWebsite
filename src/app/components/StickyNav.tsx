import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import gcLogo from "../../assets/images/gc-logo.png";
import { HOME_ANCHOR_LINKS, SITE_INFO } from "../config/site";

const STICKY_NAV_OFFSET = 96;

function getSectionTop(href: string) {
  const id = href.slice(1);

  if (id === "home") {
    return 0;
  }

  const target = document.getElementById(id);

  if (!target) {
    return Number.POSITIVE_INFINITY;
  }

  const frame = target.closest<HTMLElement>("[data-figma-frame='true']");
  const canvas = target.closest<HTMLElement>("[data-figma-canvas='true']");

  if (frame && canvas) {
    const scale = Number(frame.dataset.figmaScale) || 1;
    const canvasTop = frame.getBoundingClientRect().top + window.scrollY;
    return canvasTop + target.offsetTop * scale;
  }

  return target.getBoundingClientRect().top + window.scrollY;
}

export default function StickyNav() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY + STICKY_NAV_OFFSET;
      setVisible(window.scrollY > 140);

      const currentSection = HOME_ANCHOR_LINKS.reduce(
        (active, link) => {
          const top = getSectionTop(link.href);
          return top <= currentY ? link.href : active;
        },
        "#home",
      );

      setActiveHref(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (pathname !== "/") return null;

  const navLink = ({ href, label }: (typeof HOME_ANCHOR_LINKS)[number]) => {
    const isActive = activeHref === href;

    return (
      <a
        key={href}
        href={href}
        className={`font-['Montserrat',sans-serif] font-bold text-[15px] md:text-[16px] tracking-[0.04em] uppercase transition-all duration-200 whitespace-nowrap rounded-full px-4 py-2 ${
          isActive
            ? "bg-white text-[#8f1621] shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
            : "text-[#f3b7bd] hover:bg-white/10 hover:text-white"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
      data-name="Sticky Top Nav"
    >
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-[980px] items-center justify-between gap-4 rounded-full border border-white/10 bg-[#6d1019]/92 px-4 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <a
          href="#home"
          className="hidden sm:flex items-center gap-3 rounded-full px-3 py-2 no-underline text-white"
          aria-label="Back to top"
        >
          <span className="grid size-11 place-items-center rounded-full bg-white">
            <img
              src={gcLogo}
              alt=""
              className="size-6 object-contain"
              aria-hidden="true"
            />
          </span>
          <span className="font-['Montserrat',sans-serif] font-bold text-[17px] tracking-[0.16em] uppercase">
            {SITE_INFO.shortName}
          </span>
        </a>

        <div className="flex flex-1 items-center justify-center gap-1 overflow-x-auto rounded-full">
          {HOME_ANCHOR_LINKS.map(navLink)}
        </div>
      </div>
    </nav>
  );
}
