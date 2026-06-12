import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import gcLogo from "../../assets/images/gc-logo.png";
import { SITE_INFO } from "../config/site";

const LOADING_DURATION_MS = 650;

export default function PageLoadingOverlay() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, LOADING_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[9999] grid place-items-center bg-[#111315] text-white transition-all duration-500 ease-out ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center px-8 text-center">
        <div className="absolute inset-[-48px] rounded-full bg-[#d41c24]/18 blur-3xl md:inset-[-64px]" />
        <div className="relative grid size-[94px] place-items-center rounded-full border border-white/12 bg-white/[0.04] shadow-[0_28px_70px_rgba(0,0,0,0.35)] md:size-[116px]">
          <span className="absolute inset-[-8px] rounded-full border border-[#d41c24]/50 border-t-white/70 animate-spin md:inset-[-10px]" />
          <span className="absolute inset-[9px] rounded-full border border-white/15 border-b-[#f3b7bd] animate-[spin_1.8s_linear_infinite_reverse]" />
          <img src={gcLogo} alt="" className="relative h-[50px] w-[50px] object-contain md:h-[62px] md:w-[62px]" />
        </div>
        <p className="relative mt-6 font-['Montserrat',sans-serif] text-[15px] font-black uppercase tracking-[0.2em] text-[#f8f8f6] md:mt-7 md:text-[18px] md:tracking-[0.22em]">
          {SITE_INFO.name}
        </p>
        <p className="relative mt-3 font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.24em] text-[#f3b7bd]">
          Loading
        </p>
        <div className="relative mt-5 h-[3px] w-[170px] overflow-hidden rounded-full bg-white/12">
          <div className="h-full w-1/2 rounded-full bg-[#d41c24] animate-[geis-loading-bar_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
