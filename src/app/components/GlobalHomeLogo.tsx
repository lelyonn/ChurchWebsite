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
      className={`fixed left-0 top-0 z-[82] h-[92px] w-full bg-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out max-md:h-[74px] ${
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      data-name="Global Home Logo Bar"
    >
      <Link
        to="/"
        aria-label="Go to homepage"
        className="mx-auto flex h-full w-fit items-center justify-center gap-3 text-white no-underline transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <span className="flex flex-col items-center">
          <img
            src={gcLogo}
            alt=""
            className="h-[40px] w-[40px] object-contain max-md:h-[30px] max-md:w-[30px]"
          />
          <span className="mt-1.5 text-center font-['Lato',sans-serif] text-[6px] font-black uppercase leading-[0.95] tracking-[0.18em] max-md:text-[5px]">
            Christian Creative
            <br />
            Church
          </span>
        </span>
        <span className="border-l border-white/18 pl-3 font-['Lato',sans-serif] text-[9px] font-black uppercase leading-[1.25] tracking-[0.2em] text-white/78 max-md:text-[6px] max-md:tracking-[0.14em]">
          {SITE_INFO.fullName}
        </span>
      </Link>
    </header>
  );
}
