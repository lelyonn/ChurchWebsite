import { Link } from "react-router";
import { FOOTER_NAV_LINKS, SITE_INFO } from "../config/site";

const footerLinkClassName =
  "block font-['Lato',sans-serif] font-normal text-white/90 text-[15px] leading-[30px] hover:text-[#f3b7bd] hover:translate-x-0.5 transition-all duration-200 no-underline";

export default function SiteFooter() {
  return (
    <footer
      className="bg-gradient-to-b from-[#101316] to-[#0a0c0e] w-full border-t border-white/5"
      data-name="Site Footer"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <p className="font-['Montserrat',sans-serif] font-bold text-white text-[22px] leading-[30px] mb-4 tracking-[-0.01em]">
              {SITE_INFO.name}
            </p>
            <p className="font-['Lato',sans-serif] font-normal text-[#a8acb1] text-[15px] leading-[26px] max-w-[300px]">
              {SITE_INFO.tagline}
            </p>
          </div>

          <div>
            <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[11px] tracking-[2.8px] uppercase mb-5">
              NAVIGATE
            </p>
            {FOOTER_NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={footerLinkClassName}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[11px] tracking-[2.8px] uppercase mb-5">
              LOKASI
            </p>
            <a
              href={SITE_INFO.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline"
              aria-label="Buka lokasi di Google Maps"
            >
              <p className="font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[24px] mb-1 group-hover:text-[#f3b7bd] transition-colors">
                {SITE_INFO.location.street}
              </p>
              <p className="font-['Lato',sans-serif] font-normal text-[#a8acb1] text-[15px] leading-[24px] group-hover:text-[#f3b7bd] transition-colors">
                {SITE_INFO.location.area}
              </p>
            </a>
          </div>

          <div>
            <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[11px] tracking-[2.8px] uppercase mb-5">
              CONNECT
            </p>
            <a
              href={SITE_INFO.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClassName}
            >
              {SITE_INFO.social.instagramLabel}
            </a>
            <a
              href={SITE_INFO.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClassName}
            >
              WhatsApp Admin
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-white/10 to-transparent h-[1px] w-full mt-16 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-3 text-[13px] text-[#7a7e83] font-['Lato',sans-serif] font-normal">
          <p>{SITE_INFO.copyright}</p>
          <p>Made with care in Solo, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
