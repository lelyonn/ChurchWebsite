import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import gcLogo from "../../assets/images/gc-logo.png";
import { SITE_INFO } from "../config/site";

export default function GlobalHomeLogo() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 60);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <header
      className={`fixed left-0 top-0 z-[82] flex h-[92px] w-full items-center justify-center bg-black px-4 text-white shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out max-md:h-[74px] max-md:justify-start max-md:pl-4 max-md:pr-28 md:px-8 ${
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      data-name="Global Home Logo Bar"
    >
      <Link
        to="/"
        aria-label="Kembali ke Beranda GEIS CCC"
        className="flex h-full w-fit items-center justify-center gap-3 text-white no-underline transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 max-md:mx-0 max-md:justify-start max-md:gap-2.5 md:mx-auto"
      >
        <img
          src={gcLogo}
          alt="Logo GEIS CCC"
          className="h-[40px] w-[40px] shrink-0 object-contain max-md:h-[32px] max-md:w-[32px]"
        />
        <div className="flex flex-col min-w-0">
          <span className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.14em] text-white max-md:text-[11px] whitespace-nowrap">
            {SITE_INFO.shortName}
          </span>
          <span className="font-['Lato',sans-serif] text-[10px] font-bold uppercase tracking-[0.16em] text-[#f3b7bd] max-md:text-[9px] max-[360px]:hidden truncate whitespace-nowrap">
            Christian Creative Church
          </span>
        </div>
        <span className="hidden sm:block border-l border-white/20 pl-3 font-['Lato',sans-serif] text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 whitespace-nowrap">
          {SITE_INFO.fullName}
        </span>
      </Link>
    </header>
  );
}
