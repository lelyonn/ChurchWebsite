import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { MAIN_ROUTE_LINKS, MINISTRY_ROUTE_LINKS, SITE_INFO } from "../config/site";
import { PROGRAM_DETAIL_PAGES } from "../data/programs";

export default function GlobalRouteMenu() {
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(true);
  const [ministriesOpen, setMinistriesOpen] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const linkClass = (to: string) => {
    const isActive = pathname.toLowerCase() === to.toLowerCase();

    return `block rounded-[6px] px-4 py-3 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase tracking-[0.06em] no-underline transition-colors ${
      isActive
        ? "bg-[#b51b2a] text-white"
        : "text-[#f7ece8] hover:bg-white/10 hover:text-white"
    }`;
  };

  return (
    <div
      ref={menuRef}
      className="fixed right-4 top-4 z-[140] md:right-8 md:top-5"
      data-name="Global Route Menu"
      style={{ zIndex: 140 }}
    >
      <button
        type="button"
        className="geis-nav-trigger flex h-12 items-center gap-2 rounded-[8px] border border-white/20 bg-[#6d1019] px-3 text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md transition-colors hover:bg-[#8f1621]"
        aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="size-7" aria-hidden="true" /> : <Menu className="size-7" aria-hidden="true" />}
        <span className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.08em]">
          {open ? "Tutup" : "Menu"}
        </span>
      </button>

      {open && (
        <nav
          className="geis-menu-panel fixed right-4 top-[76px] max-h-[calc(100dvh-96px)] w-[min(326px,calc(100vw-32px))] overflow-y-auto rounded-[8px] border border-white/10 bg-[#17100f]/96 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl md:absolute md:right-0 md:top-auto md:mt-3 md:w-[310px]"
          aria-label="Menu utama website"
        >
          <div className="mb-3 rounded-[6px] border border-white/8 bg-white/[0.04] px-4 py-3">
            <p className="font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.18em] text-[#f3b7bd]">
              {SITE_INFO.shortName}
            </p>
            <p className="mt-2 font-['Lato',sans-serif] text-[14px] leading-[20px] text-[#f7ece8]">
              Pilih menu di bawah untuk membuka halaman website.
            </p>
          </div>

          <div className="space-y-1">
            <p className="px-4 pb-1 pt-2 font-['Montserrat',sans-serif] text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
              Menu Utama
            </p>
            {MAIN_ROUTE_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-2 rounded-[6px] border border-white/8 bg-white/[0.04]">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase tracking-[0.06em] text-[#f7ece8] transition-colors hover:bg-white/10"
              aria-expanded={programsOpen}
              onClick={() => setProgramsOpen((current) => !current)}
            >
              Program Gereja
              <ChevronDown
                className={`size-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {programsOpen && (
              <div className="border-t border-white/8 px-2 py-2">
                {PROGRAM_DETAIL_PAGES.map((program) => (
                  <Link
                    key={program.path}
                    to={program.path}
                    className={linkClass(program.path)}
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-2 rounded-[6px] border border-white/8 bg-white/[0.04]">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase tracking-[0.06em] text-[#f7ece8] transition-colors hover:bg-white/10"
              aria-expanded={ministriesOpen}
              onClick={() => setMinistriesOpen((current) => !current)}
            >
              Pelayanan
              <ChevronDown
                className={`size-4 transition-transform ${ministriesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {ministriesOpen && (
              <div className="border-t border-white/8 px-2 py-2">
                {MINISTRY_ROUTE_LINKS.map((ministry) => (
                  <Link
                    key={ministry.to}
                    to={ministry.to}
                    className={linkClass(ministry.to)}
                  >
                    {ministry.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
