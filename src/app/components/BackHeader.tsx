import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type BackHeaderProps = {
  title: string;
  backLabel?: string;
  backTo?: string;
};

export default function BackHeader({
  title,
  backLabel = "Back to Home",
  backTo = "/",
}: BackHeaderProps) {
  return (
    <header className="bg-[#b51b2a]/95 backdrop-blur-md min-h-[68px] md:min-h-[80px] flex items-center justify-between gap-4 px-4 sm:px-6 md:px-12 sticky top-0 z-50 shadow-[0_2px_16px_rgba(0,0,0,0.12)] border-b border-white/5">
      <Link
        to={backTo}
        className="font-['Montserrat',sans-serif] font-bold text-[13px] sm:text-[15px] md:text-[18px] text-white hover:text-[#f3b7bd] transition-colors flex min-w-0 items-center gap-2 no-underline"
      >
        <ArrowLeft className="size-4 shrink-0 md:size-5" aria-hidden="true" />
        <span className="truncate">{backLabel}</span>
      </Link>
      <p className="max-w-[48vw] truncate text-right font-['Montserrat',sans-serif] text-[13px] font-bold text-white sm:text-[15px] md:text-[18px]">
        {title}
      </p>
    </header>
  );
}
