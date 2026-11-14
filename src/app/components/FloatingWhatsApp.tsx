import { MessageCircle } from "lucide-react";
import { SITE_INFO } from "../config/site";

export default function FloatingWhatsApp() {
  const href = SITE_INFO.social.whatsappUrl;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-4 right-4 z-[90] max-[360px]:bottom-3 max-[360px]:right-3 md:bottom-8 md:right-8 print:hidden"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi admin GEIS CCC via WhatsApp untuk tanya jadwal ibadah"
        className="group flex h-[48px] max-[360px]:h-[44px] items-center gap-2.5 max-[360px]:gap-2 rounded-full border border-white/25 bg-[#075E54] pl-2.5 pr-3.5 max-[360px]:pl-2 max-[360px]:pr-3 text-white shadow-[0_12px_30px_rgba(7,94,84,0.42)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#0b735f] hover:shadow-[0_16px_36px_rgba(7,94,84,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#075E54] active:scale-[0.98] no-underline"
      >
        <span className="grid size-8 max-[360px]:size-7 shrink-0 place-items-center rounded-full bg-[#25D366] text-[#075E54] shadow-sm transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="size-4 max-[360px]:size-3.5 fill-current" aria-hidden="true" />
        </span>
        <span className="flex flex-col text-left">
          <span className="font-['Montserrat',sans-serif] text-[12px] max-[360px]:text-[11px] font-black uppercase tracking-[0.06em] text-white leading-tight">
            Tanya Admin
          </span>
          <span className="font-['Lato',sans-serif] text-[10px] max-[360px]:text-[9px] font-bold text-[#b7ebd7] leading-tight">
            Chat WhatsApp
          </span>
        </span>
      </a>
    </aside>
  );
}
