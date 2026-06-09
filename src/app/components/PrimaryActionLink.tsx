import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

type PrimaryActionLinkProps = {
  label: string;
  ariaLabel: string;
  to?: string;
  href?: string;
};

const actionClassName =
  "geis-button-hover group bg-[#b51b2a] flex h-[60px] items-center justify-between pl-[28px] pr-[26px] rounded-[10px] w-full sm:w-[300px] no-underline shadow-[0_4px_16px_-4px_rgba(181,27,42,0.4)]";

function LinkContent({ label }: { label: string }) {
  return (
    <>
      <p className="font-['Lato',sans-serif] font-bold leading-[22px] text-white text-[16px]">
        {label}
      </p>
      <ArrowRight
        className="w-7 h-5 shrink-0"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </>
  );
}

export default function PrimaryActionLink({
  label,
  ariaLabel,
  to,
  href,
}: PrimaryActionLinkProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={actionClassName}
      >
        <LinkContent label={label} />
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} aria-label={ariaLabel} className={actionClassName}>
      <LinkContent label={label} />
    </Link>
  );
}
