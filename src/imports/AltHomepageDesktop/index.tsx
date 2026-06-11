import { MapPin, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import warmWallpaper from "../../assets/decor/warm-wallpaper.jpg";
import alphaLogo from "../../assets/images/alpha-logo.png";
import gcLogo from "../../assets/images/gc-logo.png";
import pastorsPhoto from "../../assets/images/pastors-photo.jpeg";
import heroBackgroundVideo from "../../assets/videos/homepage-hero-background.mp4";
import { SITE_INFO } from "../../app/config/site";
import svgPaths from "./svg-v1jk2ee0lz";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/geisccc/",
  maps: "https://share.google/gMQJXhHA3Pmvb8bCL",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=6282135329709&text&type=phone_number&app_absent=0",
} as const;

function CtaArrow() {
  return (
    <div className="relative shrink-0 size-[58px]" data-name="CTA arrow">
      <div className="absolute bg-white h-[2px] left-[11px] rounded-[99px] top-[29px] w-[32px]" data-name="Arrow body" />
      <div className="absolute flex items-center justify-center left-[34px] size-[9.899px] top-[15.51px]">
        <div className="-rotate-45 flex-none">
          <div className="bg-white h-[2px] relative rounded-[99px] w-[12px]" data-name="Arrow angle up" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32.59px] size-[9.899px] top-[34px]">
        <div className="flex-none rotate-45">
          <div className="bg-white h-[2px] relative rounded-[99px] w-[12px]" data-name="Arrow angle down" />
        </div>
      </div>
    </div>
  );
}

function PrimaryRedServiceCta() {
  return (
    <a
      href="#services"
      aria-label="Lihat jadwal layanan"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[86px] items-center justify-between left-[360px] pl-[25px] pr-[22px] rounded-[4px] bottom-[160px] w-[470px] no-underline"
      data-name="Primary red service CTA"
    >
      <p className="font-['Montserrat',sans-serif] font-bold leading-[29px] not-italic shrink-0 text-[24px] text-white">
        Join Us Every Sunday
      </p>
      <svg width="32" height="22" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M2 10H26M18 2L26 10L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function SocialHoverLink({
  href,
  label,
  left,
  children,
}: {
  href: string;
  label: string;
  left: number;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group absolute top-[26px] grid size-[44px] place-items-center text-white no-underline"
      style={{ left }}
    >
      <span className="transition-all duration-200 group-hover:scale-125 group-hover:text-[#d41c24]">
        {children}
      </span>
      <span className="absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 font-['Lato',sans-serif] text-sm font-bold text-[#15181c] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {label}
      </span>
    </a>
  );
}

function SocialIconInstagram() {
  return (
    <svg className="block size-[44px]" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <g id="Social icon / Instagram">
        <rect height="27" id="Instagram outline" rx="6.5" stroke="currentColor" strokeWidth="3" width="27" x="8.5" y="8.5" />
        <circle cx="22" cy="22" id="Instagram lens" r="3.5" stroke="currentColor" strokeWidth="3" />
        <circle cx="30" cy="14" fill="currentColor" id="Instagram dot" r="2" />
      </g>
    </svg>
  );
}

function SocialStrip() {
  return (
    <div className="absolute h-[96px] left-0 bottom-0 w-[1440px] pointer-events-none" data-name="Social links">
      <div className="pointer-events-auto">
        <SocialHoverLink href={SOCIAL_LINKS.instagram} label="Instagram" left={36}>
          <SocialIconInstagram />
        </SocialHoverLink>
        <SocialHoverLink href={SOCIAL_LINKS.maps} label="Maps" left={116}>
          <MapPin className="size-[42px]" strokeWidth={2.2} aria-hidden="true" />
        </SocialHoverLink>
        <SocialHoverLink href={SOCIAL_LINKS.whatsapp} label="WhatsApp" left={196}>
          <MessageCircle className="size-[42px]" strokeWidth={2.2} aria-hidden="true" />
        </SocialHoverLink>
      </div>
    </div>
  );
}

function VideoSoundButton({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={enabled ? "Matikan suara video" : "Nyalakan suara video"}
      className="group absolute bottom-[26px] left-[276px] z-[999] grid size-[44px] place-items-center border-0 bg-transparent p-0 text-white"
      onClick={onClick}
    >
      <span className="transition-all duration-200 group-hover:scale-125 group-hover:text-[#d41c24]">
        {enabled ? (
          <Volume2 className="size-[42px]" strokeWidth={2.2} aria-hidden="true" />
        ) : (
          <VolumeX className="size-[42px]" strokeWidth={2.2} aria-hidden="true" />
        )}
      </span>
      <span className="absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 whitespace-nowrap rounded-lg border border-gray-300 bg-white px-3 py-2 font-['Lato',sans-serif] text-sm font-bold text-[#15181c] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {enabled ? "Sound On" : "Sound Off"}
      </span>
    </button>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[39.8%_41.45%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.4595 76.9005">
        <g id="Group">
          <path d={svgPaths.p33c4af00} fill="var(--fill-0, #D42027)" id="Vector" />
          <path d={svgPaths.p3ea80480} fill="var(--fill-0, #D42027)" id="Vector_2" />
          <path d={svgPaths.p8f39880} fill="var(--fill-0, #D42027)" id="Vector_3" />
          <path d={svgPaths.p6820600} fill="var(--fill-0, #D42027)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[39.8%_41.45%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function GeisChristianCreativeChurch() {
  return (
    <div className="absolute left-[610px] top-[18px] flex w-[220px] flex-col items-center" data-name="GC Logo">
      <img
        src={gcLogo}
        alt="Geis CCC"
        className="h-[112px] w-[112px] object-contain"
      />
      <div className="[word-break:break-word] mt-[-2px] font-['Lato',sans-serif] font-bold leading-[0] not-italic opacity-88 text-[12px] text-center text-white tracking-[2.16px] w-[198px]">
        <p className="leading-[11px] mb-0">CHRISTIAN CREATIVE</p>
        <p className="leading-[11px]">CHURCH</p>
      </div>
    </div>
  );
}

function Section01HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleVideoSound = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextSoundEnabled = !soundEnabled;
    video.muted = !nextSoundEnabled;

    if (nextSoundEnabled) {
      video.volume = 1;
      await video.play().catch(() => {
        video.muted = true;
      });
    }

    setSoundEnabled(!video.muted);
  };

  return (
    <div className="absolute bg-[#0f1115] h-[1050px] left-0 overflow-clip top-0 w-[1440px]" data-name="Section 01 / Hero Video">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover brightness-[0.45]"
        src={heroBackgroundVideo}
        autoPlay
        loop
        muted={!soundEnabled}
        playsInline
        aria-hidden="true"
      />
      <div className="absolute left-0 size-[3px] top-0" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[89px] size-[4px] top-[167px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[178px] size-[5px] top-[334px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[267px] size-[6px] top-[501px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[356px] size-[7px] top-[668px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[445px] size-[3px] top-[835px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[534px] size-[4px] top-[102px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[623px] size-[5px] top-[269px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[712px] size-[6px] top-[436px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[801px] size-[7px] top-[603px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[890px] size-[3px] top-[770px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[979px] size-[4px] top-[37px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[1068px] size-[5px] top-[204px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[1157px] size-[6px] top-[371px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[1246px] size-[7px] top-[538px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1335px] size-[3px] top-[705px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[1424px] size-[4px] top-[872px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[73px] size-[5px] top-[139px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[162px] size-[6px] top-[306px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[251px] size-[7px] top-[473px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[340px] size-[3px] top-[640px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[429px] size-[4px] top-[807px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[518px] size-[5px] top-[74px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[607px] size-[6px] top-[241px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[696px] size-[7px] top-[408px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[785px] size-[3px] top-[575px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[874px] size-[4px] top-[742px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[963px] size-[5px] top-[9px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[1052px] size-[6px] top-[176px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[1141px] size-[7px] top-[343px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[1230px] size-[3px] top-[510px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[1319px] size-[4px] top-[677px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[1408px] size-[5px] top-[844px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[57px] size-[6px] top-[111px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[146px] size-[7px] top-[278px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[235px] size-[3px] top-[445px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[324px] size-[4px] top-[612px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <div className="absolute left-[413px] size-[5px] top-[779px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2.5" />
        </svg>
      </div>
      <div className="absolute left-[502px] size-[6px] top-[46px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3" />
        </svg>
      </div>
      <div className="absolute left-[591px] size-[7px] top-[213px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="3.5" />
        </svg>
      </div>
      <div className="absolute left-[680px] size-[3px] top-[380px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[769px] size-[4px] top-[547px]" data-name="Subtle film grain">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" fillOpacity="0.045" id="Subtle film grain" r="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute border-l border-white/35 font-['Lato',sans-serif] font-black leading-[18px] left-[690px] pl-[18px] opacity-86 text-[12px] text-white top-[319px] tracking-[2.4px] uppercase w-[245px]">{SITE_INFO.fullName}</p>
      <div className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-black leading-[0] left-[360px] not-italic text-[76px] text-white top-[277px] tracking-[-2.28px] w-[434px]">
        <p className="leading-[78px] mb-0">GEIS</p>
        <p className="leading-[78px] mb-0">CHRISTIAN</p>
        <p className="leading-[78px] mb-0">CREATIVE</p>
        <p className="leading-[78px]">CHURCH</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Roboto_Mono',monospace] font-normal leading-[0] left-[356px] opacity-92 text-[25px] text-white top-[599px] w-[620px]">
        <p className="leading-[37px] mb-0">a warm church community in Solo</p>
        <p className="leading-[37px] mb-0">where people grow in faith,</p>
        <p className="leading-[37px]">find purpose, and follow Jesus together.</p>
      </div>
      <PrimaryRedServiceCta />
      <SocialStrip />
      <VideoSoundButton enabled={soundEnabled} onClick={toggleVideoSound} />
      <GeisChristianCreativeChurch />
    </div>
  );
}

function CardVision() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fffdf8] border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[380px] left-[750px] not-italic rounded-[34px] top-[146px] w-[316px]" data-name="Card / Vision">
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[34px] left-[33px] text-[#d41c24] text-[30px] top-[35px] w-[70px]">+ +</p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[38px] left-[33px] text-[35px] text-black top-[111px] w-[220px]">Visi</p>
      <div className="absolute font-['Lato',sans-serif] font-bold h-[96px] leading-[0] left-[33px] text-[#46505a] text-[22px] top-[165px] w-[235px]">
        <p className="leading-[31px] mb-0">Menjadi gereja yang</p>
        <p className="leading-[31px] mb-0">kreatif dan relevan bagi</p>
        <p className="leading-[31px]">generasi.</p>
      </div>
    </div>
  );
}

function CardMission() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fffdf8] border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[322px] left-[1090px] not-italic rounded-[34px] top-[206px] w-[316px]" data-name="Card / Mission">
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[38px] left-[35px] text-[#d41c24] text-[34px] top-[45px] w-[60px]">→</p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold leading-[38px] left-[35px] text-[35px] text-black top-[111px] w-[220px]">Misi</p>
      <div className="absolute font-['Lato',sans-serif] font-bold leading-[0] left-[35px] text-[#46505a] text-[21px] top-[165px] w-[230px]">
        <p className="leading-[31px] mb-0">Memaksimalkan potensi</p>
        <p className="leading-[31px] mb-0">jemaat untuk</p>
        <p className="leading-[31px] mb-0">melaksanakan Amanat</p>
        <p className="leading-[31px]">Agung.</p>
      </div>
    </div>
  );
}

function ButtonArrowIcon() {
  return (
    <svg
      className="shrink-0"
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Button arrow icon"
    >
      <path
        d="M2 10H26M18 2L26 10L18 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaMoreInformationHrefAbout() {
  return (
    <Link
      to="/about"
      aria-label="More Information"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[60px] items-center justify-between left-[30px] pl-[28px] pr-[26px] rounded-[8px] top-[570px] w-[640px] no-underline"
      data-name="CTA / More Information / href: /about"
    >
      <p className="[word-break:break-word] font-['Lato',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-white text-[16px]">More Information</p>
      <ButtonArrowIcon />
    </Link>
  );
}

function Section02AboutGeisCcc() {
  return (
    <div className="absolute bg-[#f8f6f0] h-[840px] left-0 top-[1050px] w-[1440px]" data-name="Section 02 / About GEIS CCC" id="about">
      <img src={redFluidShape} alt="" aria-hidden="true" className="pointer-events-none absolute -right-[120px] top-[40px] h-[420px] w-[420px] rotate-12 rounded-full object-cover opacity-[0.08] mix-blend-multiply" />
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[20px] left-[30px] not-italic text-[#d41c24] text-[14px] top-[150px] tracking-[3.92px] w-[320px]">TENTANG GEIS CCC</p>
      <p className="[word-break:break-word] absolute font-['Playfair_Display',serif] font-bold leading-[76px] left-[30px] text-[#15181c] text-[84px] top-[190px] w-[720px]">A Home For Generation.</p>
      <div className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[0] left-[30px] not-italic text-[#46505a] text-[23px] top-[380px] w-[680px]">
        <p className="leading-[40px] mb-0">GEIS CCC adalah bagian dari Gereja El-Shaddai Injil Sepenuh</p>
        <p className="leading-[40px]">yang berlokasi di Manahan, Solo. Sebagai Gereja, GEIS CCC hadir untuk menjadi gereja yang Kreatif, Relevan, dan berdampak bagi generasi saat ini.</p>
      </div>
      <CardVision />
      <CardMission />
      <CtaMoreInformationHrefAbout />
    </div>
  );
}

function SectionPastoralMessageHome() {
  return (
    <section className="absolute left-0 top-[1890px] h-[1120px] w-[1440px] overflow-hidden bg-[#151313]" data-name="Section / Pastoral Message">
      <div className="absolute left-0 top-0 h-[5px] w-[1440px] bg-[#d41c24]" />
      <h2 className="absolute left-[140px] top-[58px] w-[650px] font-['Montserrat',sans-serif] text-[96px] font-black uppercase leading-[0.9] tracking-[0] text-[#f8f8f6]">
        Our Pastors
      </h2>
      <p className="absolute left-[144px] top-[252px] w-[560px] font-['Playfair_Display',serif] text-[36px] font-bold italic leading-[1.08] text-[#f3b7bd]">
        Ps. Denso
        <br />
        & Ps. Glory
      </p>
      <div className="absolute left-[70px] top-[380px] h-[620px] w-[600px] overflow-hidden rounded-[8px] border border-white/10 bg-black">
        <img
          src={pastorsPhoto}
          alt="Ps. Denso dan Ps. Glory"
          className="absolute inset-0 size-full object-cover object-bottom grayscale"
        />
        <div className="absolute inset-0 bg-black/18" />
      </div>
      <div className="absolute left-[735px] top-[250px] w-[560px]">
        <p className="font-['Montserrat',sans-serif] text-[18px] font-black uppercase tracking-[0.18em] text-[#f3b7bd]">
          Zakharia 4:6
        </p>
        <p className="mt-4 font-['Playfair_Display',serif] text-[25px] font-bold italic leading-[34px] text-[#f8f8f6]">
          "Bukan dengan keperkasaan dan bukan dengan kekuatan, melainkan dengan Roh-Ku, firman TUHAN semesta alam."
        </p>
        <div className="mt-8 space-y-4 font-['Lato',sans-serif] text-[16px] leading-[26px] text-[#d7d9da]">
          <p>Jika hari ini kita berdiri dan merayakan perjalanan ini, bukan karena kekuatan atau kehebatan manusia, melainkan karena tangan Tuhan yang setia menopang.</p>
          <p>Di tengah suka dan duka, kelimpahan dan keterbatasan, Dia tetap hadir memimpin gereja-Nya dengan kasih yang tidak pernah berubah.</p>
          <p>Karena itu, mari GEIS CCC, teruslah menambatkan hati kepada Kristus, Sang Kepala Gereja dan sumber kehidupan kita.</p>
          <p>Tetaplah setia mengikut Dia, sekalipun jalan yang ditempuh tidak selalu mudah.</p>
          <p>Marilah kita berjalan seiring, sehati, dan sepikir dalam menggenapi visi yang Tuhan percayakan kepada gereja ini.</p>
          <p>Bertumbuhlah dalam pengenalan yang benar akan Tuhan, sehingga iman kita berakar kuat dan menghasilkan buah bagi kemuliaan nama-Nya.</p>
          <p>Kerinduan saya agar gereja ini tidak hanya menjadi rumah untuk berkumpul, tetapi juga menjadi terang yang membawa banyak jiwa kepada Kristus.</p>
          <p>Dan ketika tahun-tahun berikutnya terbentang di hadapan kita, biarlah setiap langkah tetap menjadi kesaksian tentang kebesaran Tuhan yang menyertai gereja-Nya dari generasi ke generasi.</p>
        </div>
      </div>
    </section>
  );
}

function CalendarIconRed() {
  return (
    <div className="absolute left-[31px] size-[30px] top-[33px]" data-name="Calendar icon red">
      <div className="absolute border-2 border-[#d41c24] border-solid h-[22px] left-[3px] rounded-[3px] top-[5px] w-[24px]" data-name="Calendar outline" />
      <div className="absolute bg-[#d41c24] h-[2px] left-[6px] rounded-[99px] top-[11px] w-[18px]" data-name="Calendar top line" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[9px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring left" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[18px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring right" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
    </div>
  );
}

function ScheduleCardSundayServiceCkids() {
  return (
    <div
      className="absolute bg-[#262a2d] border border-[rgba(74,78,82,0.85)] border-solid drop-shadow-[0px_14px_14px_rgba(0,0,0,0.1)] h-[286px] left-[31px] rounded-[30px] top-[302px] w-[328px]"
      data-name="Schedule card / Sunday Service &
Ckids"
    >
      <CalendarIconRed />
      <div className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[0] left-[31px] not-italic text-[#f8f8f6] text-[25px] top-[103px] w-[264px]">
        <p className="leading-[35px] mb-0">{`Sunday Service &`}</p>
        <p className="leading-[35px]">Ckids</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[31px] not-italic text-[#d7d9da] text-[22px] top-[175px] w-[264px]">Minggu</p>
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-black leading-[38px] left-[31px] not-italic text-[#f8f8f6] text-[31px] top-[219px] w-[264px]">09.00 - 10.15</p>
    </div>
  );
}

function CalendarIconRed1() {
  return (
    <div className="absolute left-[31px] size-[30px] top-[33px]" data-name="Calendar icon red">
      <div className="absolute border-2 border-[#d41c24] border-solid h-[22px] left-[3px] rounded-[3px] top-[5px] w-[24px]" data-name="Calendar outline" />
      <div className="absolute bg-[#d41c24] h-[2px] left-[6px] rounded-[99px] top-[11px] w-[18px]" data-name="Calendar top line" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[9px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring left" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[18px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring right" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
    </div>
  );
}

function ScheduleCardYouthService() {
  return (
    <div className="absolute bg-[#262a2d] border border-[rgba(74,78,82,0.85)] border-solid drop-shadow-[0px_14px_14px_rgba(0,0,0,0.1)] h-[286px] left-[381px] rounded-[30px] top-[302px] w-[328px]" data-name="Schedule card / Youth Service">
      <CalendarIconRed1 />
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[35px] left-[31px] not-italic text-[#f8f8f6] text-[25px] top-[103px] w-[264px]">Youth Service</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[31px] not-italic text-[#d7d9da] text-[22px] top-[175px] w-[264px]">Minggu</p>
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-black leading-[38px] left-[31px] not-italic text-[#f8f8f6] text-[31px] top-[219px] w-[264px]">11.00 - 12.15</p>
    </div>
  );
}

function CalendarIconRed2() {
  return (
    <div className="absolute left-[31px] size-[30px] top-[33px]" data-name="Calendar icon red">
      <div className="absolute border-2 border-[#d41c24] border-solid h-[22px] left-[3px] rounded-[3px] top-[5px] w-[24px]" data-name="Calendar outline" />
      <div className="absolute bg-[#d41c24] h-[2px] left-[6px] rounded-[99px] top-[11px] w-[18px]" data-name="Calendar top line" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[9px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring left" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[18px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring right" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
    </div>
  );
}

function ScheduleCardPowerHouse() {
  return (
    <div className="absolute bg-[#262a2d] border border-[rgba(74,78,82,0.85)] border-solid drop-shadow-[0px_14px_14px_rgba(0,0,0,0.1)] h-[286px] left-[731px] rounded-[30px] top-[302px] w-[328px]" data-name="Schedule card / Power House">
      <CalendarIconRed2 />
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[35px] left-[31px] not-italic text-[#f8f8f6] text-[25px] top-[103px] w-[264px]">Power House</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[31px] not-italic text-[#d7d9da] text-[22px] top-[175px] w-[264px]">Jumat</p>
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-black leading-[38px] left-[31px] not-italic text-[#f8f8f6] text-[31px] top-[219px] w-[264px]">18.00</p>
    </div>
  );
}

function CalendarIconRed3() {
  return (
    <div className="absolute left-[31px] size-[30px] top-[33px]" data-name="Calendar icon red">
      <div className="absolute border-2 border-[#d41c24] border-solid h-[22px] left-[3px] rounded-[3px] top-[5px] w-[24px]" data-name="Calendar outline" />
      <div className="absolute bg-[#d41c24] h-[2px] left-[6px] rounded-[99px] top-[11px] w-[18px]" data-name="Calendar top line" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[9px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring left" />
      <div className="absolute bg-[#d41c24] h-[7px] left-[18px] rounded-[99px] top-[2px] w-[3px]" data-name="Ring right" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[16px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[8px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[14px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
      <div className="absolute bg-[#d41c24] left-[20px] rounded-[99px] size-[3px] top-[22px]" data-name="Calendar dot" />
    </div>
  );
}

function ScheduleCardPagiBersamaTuhan() {
  return (
    <div className="absolute bg-[#262a2d] border border-[rgba(74,78,82,0.85)] border-solid drop-shadow-[0px_14px_14px_rgba(0,0,0,0.1)] h-[286px] left-[1081px] rounded-[30px] top-[302px] w-[328px]" data-name="Schedule card / Pagi Bersama Tuhan">
      <CalendarIconRed3 />
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[35px] left-[31px] not-italic text-[#f8f8f6] text-[25px] top-[103px] w-[264px]">Pagi Bersama Tuhan</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[31px] not-italic text-[#d7d9da] text-[22px] top-[175px] w-[264px]">Senin - Sabtu</p>
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-black leading-[38px] left-[31px] not-italic text-[#f8f8f6] text-[31px] top-[219px] w-[264px]">05.25 - 6.00</p>
    </div>
  );
}

function CtaArrow1() {
  return (
    <div className="relative shrink-0 size-[58px]" data-name="CTA arrow">
      <div className="absolute bg-white h-[2px] left-[11px] rounded-[99px] top-[29px] w-[32px]" data-name="Arrow body" />
      <div className="absolute flex items-center justify-center left-[34px] size-[9.899px] top-[15.51px]">
        <div className="-rotate-45 flex-none">
          <div className="bg-white h-[2px] relative rounded-[99px] w-[12px]" data-name="Arrow angle up" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32.59px] size-[9.899px] top-[34px]">
        <div className="flex-none rotate-45">
          <div className="bg-white h-[2px] relative rounded-[99px] w-[12px]" data-name="Arrow angle down" />
        </div>
      </div>
    </div>
  );
}

function PrimaryRedServiceCta1() {
  return (
    <Link
      to="/schedule"
      aria-label="More Information"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[81px] items-center justify-between left-[461px] pl-[25px] pr-[22px] rounded-[4px] top-[611px] w-[467px] no-underline"
      data-name="Primary red service CTA"
    >
      <p className="font-['Montserrat',sans-serif] font-bold leading-[29px] not-italic shrink-0 text-[24px] text-white">More Information</p>
      <svg width="32" height="22" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M2 10H26M18 2L26 10L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function Section03ServiceSchedule() {
  return (
    <div className="absolute bg-[#1b1e21] h-[754px] left-0 top-[3010px] w-[1440px] overflow-hidden" data-name="Section 03 / Service Schedule" id="services">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[20px] left-[720px] not-italic text-[#d41c24] text-[14px] text-center top-[96px] tracking-[4.76px] w-[1200px]">JADWAL IBADAH</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Playfair_Display',serif] font-bold leading-[86px] left-[720px] text-[#f8f8f6] text-[76px] text-center top-[136px] w-[1200px]">Bertemu setiap minggu</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[34px] left-[720px] not-italic text-[#d7d9da] text-[24px] text-center top-[245px] w-[1200px]">Pilih waktu yang paling sesuai. Semua orang diterima dengan hangat.</p>
      <ScheduleCardSundayServiceCkids />
      <ScheduleCardYouthService />
      <ScheduleCardPowerHouse />
      <ScheduleCardPagiBersamaTuhan />
      <PrimaryRedServiceCta1 />
    </div>
  );
}

function SubtleDotGrid() {
  return (
    <div className="absolute left-[1160px] size-[144px] top-[150px]" data-name="Subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="Decorative subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot" r="1.5" />
          <circle cx="19.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_2" r="1.5" />
          <circle cx="37.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_3" r="1.5" />
          <circle cx="55.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_4" r="1.5" />
          <circle cx="73.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_5" r="1.5" />
          <circle cx="91.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_6" r="1.5" />
          <circle cx="109.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_7" r="1.5" />
          <circle cx="127.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_8" r="1.5" />
          <circle cx="1.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_9" r="1.5" />
          <circle cx="19.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_10" r="1.5" />
          <circle cx="37.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_11" r="1.5" />
          <circle cx="55.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_12" r="1.5" />
          <circle cx="73.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_13" r="1.5" />
          <circle cx="91.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_14" r="1.5" />
          <circle cx="109.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_15" r="1.5" />
          <circle cx="127.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_16" r="1.5" />
          <circle cx="1.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_17" r="1.5" />
          <circle cx="19.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_18" r="1.5" />
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_19" r="1.5" />
          <circle cx="55.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_20" r="1.5" />
          <circle cx="73.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_21" r="1.5" />
          <circle cx="91.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_22" r="1.5" />
          <circle cx="109.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_23" r="1.5" />
          <circle cx="127.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_25" r="1.5" />
          <circle cx="19.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_26" r="1.5" />
          <circle cx="37.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_27" r="1.5" />
          <circle cx="55.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_28" r="1.5" />
          <circle cx="73.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_29" r="1.5" />
          <circle cx="91.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_30" r="1.5" />
          <circle cx="109.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_31" r="1.5" />
          <circle cx="127.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_32" r="1.5" />
          <circle cx="1.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_33" r="1.5" />
          <circle cx="19.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_34" r="1.5" />
          <circle cx="37.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_35" r="1.5" />
          <circle cx="55.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_36" r="1.5" />
          <circle cx="73.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_37" r="1.5" />
          <circle cx="91.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_38" r="1.5" />
          <circle cx="109.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_39" r="1.5" />
          <circle cx="127.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_40" r="1.5" />
          <circle cx="1.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_41" r="1.5" />
          <circle cx="19.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_42" r="1.5" />
          <circle cx="37.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_43" r="1.5" />
          <circle cx="55.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_44" r="1.5" />
          <circle cx="73.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_45" r="1.5" />
          <circle cx="91.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_46" r="1.5" />
          <circle cx="109.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_47" r="1.5" />
          <circle cx="127.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_48" r="1.5" />
          <circle cx="1.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_49" r="1.5" />
          <circle cx="19.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_50" r="1.5" />
          <circle cx="37.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_51" r="1.5" />
          <circle cx="55.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_52" r="1.5" />
          <circle cx="73.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_53" r="1.5" />
          <circle cx="91.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_54" r="1.5" />
          <circle cx="109.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_55" r="1.5" />
          <circle cx="127.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_56" r="1.5" />
          <circle cx="1.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_57" r="1.5" />
          <circle cx="19.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_58" r="1.5" />
          <circle cx="37.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_59" r="1.5" />
          <circle cx="55.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_60" r="1.5" />
          <circle cx="73.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_61" r="1.5" />
          <circle cx="91.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_62" r="1.5" />
          <circle cx="109.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_63" r="1.5" />
          <circle cx="127.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.28" id="dot_64" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function QuickChipAlpha() {
  return (
    <div className="absolute bg-white border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[40px] left-[-1px] rounded-[999px] top-[4px] w-[130px]" data-name="Quick chip / Alpha">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[18px] left-[64px] not-italic text-[#d41c24] text-[13px] text-center top-[10px] w-[130px]">Alpha</p>
    </div>
  );
}

function QuickChipSpiritualJourney() {
  return (
    <div className="absolute bg-white border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[40px] left-[147px] rounded-[999px] top-[4px] w-[190px]" data-name="Quick chip / Spiritual Journey">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[18px] left-[94px] not-italic text-[#15181c] text-[13px] text-center top-[10px] w-[190px]">Spiritual Journey</p>
    </div>
  );
}

function QuickChipHomecell() {
  return (
    <div className="absolute bg-white border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[40px] left-[355px] rounded-[999px] top-[4px] w-[130px]" data-name="Quick chip / Homecell">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[18px] left-[64px] not-italic text-[#15181c] text-[13px] text-center top-[10px] w-[130px]">Homecell</p>
    </div>
  );
}

function ProgramQuickNavChips() {
  return (
    <div className="absolute border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[50px] left-[424px] top-[304px] w-[592px]" data-name="Program quick nav chips">
      <QuickChipAlpha />
      <QuickChipSpiritualJourney />
      <QuickChipHomecell />
    </div>
  );
}

function SubtleDotGrid1() {
  return (
    <div className="absolute h-[70px] left-[449px] top-[43px] w-[84px]" data-name="Subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 70">
        <g id="Subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot" r="1.5" />
          <circle cx="15.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_2" r="1.5" />
          <circle cx="29.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_3" r="1.5" />
          <circle cx="43.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_4" r="1.5" />
          <circle cx="57.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_5" r="1.5" />
          <circle cx="71.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_6" r="1.5" />
          <circle cx="1.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_7" r="1.5" />
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_8" r="1.5" />
          <circle cx="29.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_9" r="1.5" />
          <circle cx="43.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_10" r="1.5" />
          <circle cx="57.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_11" r="1.5" />
          <circle cx="71.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_12" r="1.5" />
          <circle cx="1.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_13" r="1.5" />
          <circle cx="15.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_14" r="1.5" />
          <circle cx="29.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_15" r="1.5" />
          <circle cx="43.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_16" r="1.5" />
          <circle cx="57.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_17" r="1.5" />
          <circle cx="71.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_18" r="1.5" />
          <circle cx="1.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_19" r="1.5" />
          <circle cx="15.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_20" r="1.5" />
          <circle cx="29.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_21" r="1.5" />
          <circle cx="43.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_22" r="1.5" />
          <circle cx="57.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_23" r="1.5" />
          <circle cx="71.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_25" r="1.5" />
          <circle cx="15.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_26" r="1.5" />
          <circle cx="29.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_27" r="1.5" />
          <circle cx="43.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_28" r="1.5" />
          <circle cx="57.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_29" r="1.5" />
          <circle cx="71.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_30" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageLabelOverlay() {
  return (
    <div className="absolute bg-[#fbf9f4] border border-[#d3cabe] border-solid h-[58px] left-[35px] rounded-[14px] top-[173px] w-[528px]" data-name="Image label overlay">
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[20px] left-[17px] not-italic text-[#15181c] text-[14px] top-[18px] w-[492px]">Alpha</p>
    </div>
  );
}

function RichVisualPlaceholderAlpha() {
  return (
    <div className="absolute bg-white border border-[rgba(207,198,186,0.8)] border-solid h-[260px] left-[-1px] overflow-clip rounded-[28px] top-[-1px] w-[600px]" data-name="Rich visual placeholder / Alpha">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(237,28,20,0.16),transparent_34%),linear-gradient(135deg,#ffffff_0%,#fff7f3_100%)]" />
      <img
        src={alphaLogo}
        alt="Alpha"
        className="absolute left-[84px] top-[20px] h-[220px] w-[432px] object-contain"
      />
      <SubtleDotGrid1 />
    </div>
  );
}

function FeatureProgramCardAlpha() {
  return (
    <div className="absolute bg-[#fffdf8] border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[560px] left-[92px] rounded-[32px] top-[420px] w-[600px]" data-name="Feature program card / Alpha">
      <RichVisualPlaceholderAlpha />
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[38px] left-[33px] not-italic text-[29px] text-black top-[304px] w-[532px]">Alpha</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[33px] not-italic text-[#4b5560] text-[18px] top-[359px] w-[524px]">Ruang untuk mengenal iman, bertanya, berdiskusi, dan mengalami Tuhan secara pribadi. Alpha cocok untuk pengunjung baru, anak muda, atau siapa pun yang ingin memahami dasar iman Kristen dalam suasana terbuka.</p>
      <Link to="/alpha" className="absolute font-['Lato',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#d41c24] hover:text-[#8f1621] text-[17px] top-[505px] w-[220px] whitespace-pre-wrap transition-colors no-underline">{`Pelajari lagi  →`}</Link>
    </div>
  );
}

function SubtleDotGrid2() {
  return (
    <div className="absolute h-[70px] left-[449px] top-[43px] w-[84px]" data-name="Subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 70">
        <g id="Subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot" r="1.5" />
          <circle cx="15.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_2" r="1.5" />
          <circle cx="29.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_3" r="1.5" />
          <circle cx="43.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_4" r="1.5" />
          <circle cx="57.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_5" r="1.5" />
          <circle cx="71.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_6" r="1.5" />
          <circle cx="1.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_7" r="1.5" />
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_8" r="1.5" />
          <circle cx="29.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_9" r="1.5" />
          <circle cx="43.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_10" r="1.5" />
          <circle cx="57.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_11" r="1.5" />
          <circle cx="71.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_12" r="1.5" />
          <circle cx="1.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_13" r="1.5" />
          <circle cx="15.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_14" r="1.5" />
          <circle cx="29.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_15" r="1.5" />
          <circle cx="43.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_16" r="1.5" />
          <circle cx="57.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_17" r="1.5" />
          <circle cx="71.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_18" r="1.5" />
          <circle cx="1.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_19" r="1.5" />
          <circle cx="15.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_20" r="1.5" />
          <circle cx="29.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_21" r="1.5" />
          <circle cx="43.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_22" r="1.5" />
          <circle cx="57.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_23" r="1.5" />
          <circle cx="71.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_25" r="1.5" />
          <circle cx="15.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_26" r="1.5" />
          <circle cx="29.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_27" r="1.5" />
          <circle cx="43.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_28" r="1.5" />
          <circle cx="57.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_29" r="1.5" />
          <circle cx="71.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.35" id="dot_30" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageLabelOverlay1() {
  return (
    <div className="absolute bg-[#fbf9f4] border border-[#d3cabe] border-solid h-[58px] left-[35px] rounded-[14px] top-[173px] w-[528px]" data-name="Image label overlay">
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[20px] left-[17px] not-italic text-[#15181c] text-[14px] top-[18px] w-[492px]">Spiritual Journey</p>
    </div>
  );
}

function RichVisualPlaceholderSpiritualJourney() {
  return (
    <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[260px] left-[-1px] overflow-clip rounded-[28px] top-[-1px] w-[600px]" data-name="Rich visual placeholder / Spiritual Journey">
      <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[260px] left-[-1px] top-[-1px] w-[330px]" data-name="Visual left wash" />
      <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[260px] left-[269px] top-[-1px] w-[330px]" data-name="Visual right wash" />
      <div className="absolute left-[434px] size-[260px] top-[-81px]" data-name="Visual large soft circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 260">
          <circle cx="130" cy="130" fill="var(--fill-0, #FFF7EC)" fillOpacity="0.55" id="Visual large soft circle" r="130" />
        </svg>
      </div>
      <div className="absolute left-[504px] size-[180px] top-[184px]" data-name="Visual lower circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 180">
          <circle cx="90" cy="90" fill="var(--fill-0, #6D6259)" fillOpacity="0.14" id="Visual lower circle" r="90" />
        </svg>
      </div>
      <div className="absolute left-[35px] size-[46px] top-[35px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #F6F2EA)" id="People palette dot" r="23" />
        </svg>
      </div>
      <div className="absolute left-[71px] size-[46px] top-[35px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #C8B7A3)" id="People palette dot" r="23" />
        </svg>
      </div>
      <div className="absolute left-[107px] size-[46px] top-[35px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #6D6259)" id="People palette dot" r="23" />
        </svg>
      </div>
      <div className="absolute left-[143px] size-[46px] top-[35px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #8B5D50)" id="People palette dot" r="23" />
        </svg>
      </div>
      <SubtleDotGrid2 />
      <ImageLabelOverlay1 />
    </div>
  );
}

function FeatureProgramCardSpiritualJourney() {
  return (
    <div className="absolute bg-[#fffdf8] border border-[#e2ded6] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.08)] h-[560px] left-[748px] rounded-[32px] top-[420px] w-[600px]" data-name="Feature program card / Spiritual Journey">
      <RichVisualPlaceholderSpiritualJourney />
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[38px] left-[33px] not-italic text-[29px] text-black top-[304px] w-[532px]">Spiritual Journey</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[30px] left-[33px] not-italic text-[#4b5560] text-[18px] top-[359px] w-[524px]">Perjalanan pemuridan untuk membantu setiap pribadi bertumbuh dalam iman, identitas, dan tujuan hidup. Program ini menolong jemaat memahami proses pertumbuhan rohani secara lebih terarah.</p>
      <Link to="/SJ" className="absolute font-['Lato',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#d41c24] hover:text-[#8f1621] text-[17px] top-[505px] w-[220px] whitespace-pre-wrap transition-colors no-underline">{`Pelajari lagi  →`}</Link>
    </div>
  );
}

function ProgramJourneyOrnament() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[118px] left-[102px] top-[1009px] w-[1236px]"
      data-name="Program journey decorative flourish"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1236 118"
      >
        <path
          d="M26 72C150 18 305 18 462 58C629 101 771 103 929 53C1038 19 1133 18 1210 42"
          stroke="#D8D0C4"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M106 82C247 54 402 58 570 82C735 106 894 87 1041 38"
          stroke="#B51B2A"
          strokeLinecap="round"
          strokeWidth="2.5"
          strokeOpacity="0.38"
        />
        <path
          d="M21 101H932"
          stroke="#DED7CC"
          strokeDasharray="1 15"
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.72"
        />
        <g fill="#B51B2A">
          <circle cx="138" cy="74" r="6" />
          <circle cx="410" cy="50" r="5" fillOpacity="0.82" />
          <circle cx="706" cy="92" r="6" fillOpacity="0.72" />
          <circle cx="1037" cy="40" r="5" fillOpacity="0.9" />
        </g>
        <g stroke="#B9AEA3" strokeWidth="2" strokeOpacity="0.55">
          <path d="M270 38L282 50L270 62L258 50Z" />
          <path d="M850 60L862 72L850 84L838 72Z" />
          <path d="M1137 23L1148 34L1137 45L1126 34Z" />
        </g>
        <g stroke="#B51B2A" strokeLinecap="round" strokeWidth="2.4" strokeOpacity="0.24">
          <path d="M523 28V58" />
          <path d="M508 43H538" />
          <path d="M972 72V102" />
          <path d="M957 87H987" />
        </g>
      </svg>
    </div>
  );
}

function SubtleDotGrid3() {
  return (
    <div className="absolute left-[379px] size-[84px] top-[45px]" data-name="Subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="Subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot" r="1.5" />
          <circle cx="15.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_2" r="1.5" />
          <circle cx="29.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_3" r="1.5" />
          <circle cx="43.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_4" r="1.5" />
          <circle cx="57.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_5" r="1.5" />
          <circle cx="71.5" cy="1.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_6" r="1.5" />
          <circle cx="1.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_7" r="1.5" />
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_8" r="1.5" />
          <circle cx="29.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_9" r="1.5" />
          <circle cx="43.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_10" r="1.5" />
          <circle cx="57.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_11" r="1.5" />
          <circle cx="71.5" cy="15.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_12" r="1.5" />
          <circle cx="1.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_13" r="1.5" />
          <circle cx="15.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_14" r="1.5" />
          <circle cx="29.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_15" r="1.5" />
          <circle cx="43.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_16" r="1.5" />
          <circle cx="57.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_17" r="1.5" />
          <circle cx="71.5" cy="29.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_18" r="1.5" />
          <circle cx="1.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_19" r="1.5" />
          <circle cx="15.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_20" r="1.5" />
          <circle cx="29.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_21" r="1.5" />
          <circle cx="43.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_22" r="1.5" />
          <circle cx="57.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_23" r="1.5" />
          <circle cx="71.5" cy="43.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_25" r="1.5" />
          <circle cx="15.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_26" r="1.5" />
          <circle cx="29.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_27" r="1.5" />
          <circle cx="43.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_28" r="1.5" />
          <circle cx="57.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_29" r="1.5" />
          <circle cx="71.5" cy="57.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_30" r="1.5" />
          <circle cx="1.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_31" r="1.5" />
          <circle cx="15.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_32" r="1.5" />
          <circle cx="29.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_33" r="1.5" />
          <circle cx="43.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_34" r="1.5" />
          <circle cx="57.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_35" r="1.5" />
          <circle cx="71.5" cy="71.5" fill="var(--fill-0, white)" fillOpacity="0.3" id="dot_36" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function HomecellOverlayLabel() {
  return (
    <div className="absolute bg-[#fbf9f4] border border-[#d3cabe] border-solid h-[58px] left-[44px] rounded-[14px] top-[225px] w-[430px]" data-name="Homecell overlay label">
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[20px] left-[17px] not-italic text-[#15181c] text-[14px] top-[18px] w-[360px]">Homecell foto</p>
    </div>
  );
}

function HomecellPhotoCluster() {
  return (
    <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[320px] left-[599px] overflow-clip rounded-[28px] top-[74px] w-[520px]" data-name="Homecell photo cluster">
      <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[320px] left-[-1px] top-[-1px] w-[260px]" data-name="Photo left wash" />
      <div className="absolute bg-[rgba(216,208,196,0.95)] border border-[rgba(207,198,186,0.8)] border-solid h-[320px] left-[249px] top-[-1px] w-[270px]" data-name="Photo right wash" />
      <div className="absolute left-[37px] size-[49.68px] top-[41px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.68 49.68">
          <circle cx="24.84" cy="24.84" fill="var(--fill-0, #F6F2EA)" id="People palette dot" r="24.84" />
        </svg>
      </div>
      <div className="absolute left-[75.88px] size-[49.68px] top-[41px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.68 49.68">
          <circle cx="24.84" cy="24.84" fill="var(--fill-0, #C8B7A3)" id="People palette dot" r="24.84" />
        </svg>
      </div>
      <div className="absolute left-[114.76px] size-[49.68px] top-[41px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.68 49.68">
          <circle cx="24.84" cy="24.84" fill="var(--fill-0, #6D6259)" id="People palette dot" r="24.84" />
        </svg>
      </div>
      <div className="absolute left-[153.64px] size-[49.68px] top-[41px]" data-name="People palette dot">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.68 49.68">
          <circle cx="24.84" cy="24.84" fill="var(--fill-0, #8B5D50)" id="People palette dot" r="24.84" />
        </svg>
      </div>
      <SubtleDotGrid3 />
      <HomecellOverlayLabel />
    </div>
  );
}

function CommunityFeatureSection() {
  return (
    <div className="absolute bg-white border border-[#ded7cc] border-solid drop-shadow-[0px_22px_22px_rgba(0,0,0,0.1)] h-[470px] left-[130px] rounded-[36px] top-[1160px] w-[1180px]" data-name="Community feature section">
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[17px] left-[55px] not-italic text-[#d41c24] text-[12px] top-[53px] tracking-[3.6px] w-[400px]">KOMUNITAS</p>
      <p className="[word-break:break-word] absolute font-['Playfair_Display',serif] font-bold leading-[66px] left-[55px] text-[#15181c] text-[58px] top-[91px] w-[430px]">Homecell</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[31px] left-[55px] not-italic text-[#4b5560] text-[18px] top-[179px] w-[470px]">Ruang untuk bertumbuh bersama dalam Tuhan. Homecell menjadi tempat untuk saling mengenal, berdoa, berdiskusi, dan berjalan bersama dalam komunitas yang lebih dekat.</p>
      <Link to="/homecell" className="absolute font-['Lato',sans-serif] font-bold leading-[23px] left-[55px] not-italic text-[#d41c24] hover:text-[#8f1621] text-[16px] top-[339px] w-[160px] whitespace-pre-wrap transition-colors no-underline">{`Learn About  →`}</Link>
      <HomecellPhotoCluster />
    </div>
  );
}

function ButtonGoogleMaps() {
  return (
    <a
      href="https://share.google/gMQJXhHA3Pmvb8bCL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Google Maps"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[60px] items-center justify-between left-[45px] pl-[28px] pr-[26px] rounded-[8px] top-[390px] w-[640px] no-underline"
      data-name="Button / Google Maps"
    >
      <p className="font-['Lato',sans-serif] font-bold leading-[22px] not-italic text-white text-[16px]">Google Maps</p>
      <ButtonArrowIcon />
    </a>
  );
}

function ButtonGeisccc() {
  return (
    <a
      href="https://www.instagram.com/geisccc/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram @geisccc"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[60px] items-center justify-between left-[45px] pl-[28px] pr-[26px] rounded-[8px] top-[470px] w-[640px] no-underline"
      data-name="Button / @geisccc"
    >
      <p className="font-['Lato',sans-serif] font-bold leading-[22px] not-italic text-white text-[16px]">Instagram · @geisccc</p>
      <ButtonArrowIcon />
    </a>
  );
}

function ButtonWhatsAppAdmin() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6282135329709&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Admin"
      className="geis-button-hover absolute bg-[#b51b2a] content-stretch flex h-[60px] items-center justify-between left-[45px] pl-[28px] pr-[26px] rounded-[8px] top-[550px] w-[640px] no-underline"
      data-name="Button / WhatsApp Admin"
    >
      <p className="font-['Lato',sans-serif] font-bold leading-[22px] not-italic text-white text-[16px]">WhatsApp Admin</p>
      <ButtonArrowIcon />
    </a>
  );
}

function GoogleMapsPlaceholderCard() {
  return (
    <div
      className="absolute border border-[rgba(255,255,255,0.18)] border-solid drop-shadow-[0px_12px_13px_rgba(0,0,0,0.25)] h-[390px] left-[730px] rounded-[36px] top-[105px] w-[660px] overflow-hidden"
      data-name="Google Maps live preview"
    >
      <iframe
        title="GEIS CCC Location - Google Maps"
        src="https://www.google.com/maps?q=Jl.+RM+Said+No.+233,+Manahan,+Solo&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

function DecorativeSubtleDotGrid() {
  return (
    <div className="absolute left-[1195px] size-[144px] top-[92px]" data-name="Decorative subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="Decorative subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot" r="1.5" />
          <circle cx="19.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_2" r="1.5" />
          <circle cx="37.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_3" r="1.5" />
          <circle cx="55.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_4" r="1.5" />
          <circle cx="73.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_5" r="1.5" />
          <circle cx="91.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_6" r="1.5" />
          <circle cx="109.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_7" r="1.5" />
          <circle cx="127.5" cy="1.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_8" r="1.5" />
          <circle cx="1.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_9" r="1.5" />
          <circle cx="19.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_10" r="1.5" />
          <circle cx="37.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_11" r="1.5" />
          <circle cx="55.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_12" r="1.5" />
          <circle cx="73.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_13" r="1.5" />
          <circle cx="91.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_14" r="1.5" />
          <circle cx="109.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_15" r="1.5" />
          <circle cx="127.5" cy="19.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_16" r="1.5" />
          <circle cx="1.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_17" r="1.5" />
          <circle cx="19.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_18" r="1.5" />
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_19" r="1.5" />
          <circle cx="55.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_20" r="1.5" />
          <circle cx="73.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_21" r="1.5" />
          <circle cx="91.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_22" r="1.5" />
          <circle cx="109.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_23" r="1.5" />
          <circle cx="127.5" cy="37.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_25" r="1.5" />
          <circle cx="19.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_26" r="1.5" />
          <circle cx="37.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_27" r="1.5" />
          <circle cx="55.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_28" r="1.5" />
          <circle cx="73.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_29" r="1.5" />
          <circle cx="91.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_30" r="1.5" />
          <circle cx="109.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_31" r="1.5" />
          <circle cx="127.5" cy="55.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_32" r="1.5" />
          <circle cx="1.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_33" r="1.5" />
          <circle cx="19.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_34" r="1.5" />
          <circle cx="37.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_35" r="1.5" />
          <circle cx="55.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_36" r="1.5" />
          <circle cx="73.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_37" r="1.5" />
          <circle cx="91.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_38" r="1.5" />
          <circle cx="109.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_39" r="1.5" />
          <circle cx="127.5" cy="73.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_40" r="1.5" />
          <circle cx="1.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_41" r="1.5" />
          <circle cx="19.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_42" r="1.5" />
          <circle cx="37.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_43" r="1.5" />
          <circle cx="55.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_44" r="1.5" />
          <circle cx="73.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_45" r="1.5" />
          <circle cx="91.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_46" r="1.5" />
          <circle cx="109.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_47" r="1.5" />
          <circle cx="127.5" cy="91.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_48" r="1.5" />
          <circle cx="1.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_49" r="1.5" />
          <circle cx="19.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_50" r="1.5" />
          <circle cx="37.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_51" r="1.5" />
          <circle cx="55.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_52" r="1.5" />
          <circle cx="73.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_53" r="1.5" />
          <circle cx="91.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_54" r="1.5" />
          <circle cx="109.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_55" r="1.5" />
          <circle cx="127.5" cy="109.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_56" r="1.5" />
          <circle cx="1.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_57" r="1.5" />
          <circle cx="19.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_58" r="1.5" />
          <circle cx="37.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_59" r="1.5" />
          <circle cx="55.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_60" r="1.5" />
          <circle cx="73.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_61" r="1.5" />
          <circle cx="91.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_62" r="1.5" />
          <circle cx="109.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_63" r="1.5" />
          <circle cx="127.5" cy="127.5" fill="var(--fill-0, #B8AEA3)" fillOpacity="0.3" id="dot_64" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function PolishFloatingRouteTagLocation() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(243,183,189,0.45)] border-solid h-[38px] left-[45px] rounded-[999px] top-[34px] w-[176px]" data-name="Polish floating route tag / location">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[16px] left-[87px] not-italic text-[#f3b7bd] text-[12px] text-center top-[10px] w-[176px]">Route: /location</p>
    </div>
  );
}

function AltOrnamentSubtleDotGrid() {
  return (
    <div className="absolute left-[1210px] size-[144px] top-[150px]" data-name="ALT ornament / subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="ALT ornament / subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot" r="1.5" />
          <circle cx="19.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_2" r="1.5" />
          <circle cx="37.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_3" r="1.5" />
          <circle cx="55.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_4" r="1.5" />
          <circle cx="73.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_5" r="1.5" />
          <circle cx="91.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_6" r="1.5" />
          <circle cx="109.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_7" r="1.5" />
          <circle cx="127.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_8" r="1.5" />
          <circle cx="1.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_9" r="1.5" />
          <circle cx="19.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_10" r="1.5" />
          <circle cx="37.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_11" r="1.5" />
          <circle cx="55.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_12" r="1.5" />
          <circle cx="73.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_13" r="1.5" />
          <circle cx="91.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_14" r="1.5" />
          <circle cx="109.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_15" r="1.5" />
          <circle cx="127.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_16" r="1.5" />
          <circle cx="1.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_17" r="1.5" />
          <circle cx="19.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_18" r="1.5" />
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_19" r="1.5" />
          <circle cx="55.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_20" r="1.5" />
          <circle cx="73.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_21" r="1.5" />
          <circle cx="91.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_22" r="1.5" />
          <circle cx="109.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_23" r="1.5" />
          <circle cx="127.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_25" r="1.5" />
          <circle cx="19.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_26" r="1.5" />
          <circle cx="37.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_27" r="1.5" />
          <circle cx="55.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_28" r="1.5" />
          <circle cx="73.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_29" r="1.5" />
          <circle cx="91.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_30" r="1.5" />
          <circle cx="109.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_31" r="1.5" />
          <circle cx="127.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_32" r="1.5" />
          <circle cx="1.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_33" r="1.5" />
          <circle cx="19.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_34" r="1.5" />
          <circle cx="37.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_35" r="1.5" />
          <circle cx="55.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_36" r="1.5" />
          <circle cx="73.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_37" r="1.5" />
          <circle cx="91.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_38" r="1.5" />
          <circle cx="109.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_39" r="1.5" />
          <circle cx="127.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_40" r="1.5" />
          <circle cx="1.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_41" r="1.5" />
          <circle cx="19.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_42" r="1.5" />
          <circle cx="37.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_43" r="1.5" />
          <circle cx="55.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_44" r="1.5" />
          <circle cx="73.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_45" r="1.5" />
          <circle cx="91.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_46" r="1.5" />
          <circle cx="109.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_47" r="1.5" />
          <circle cx="127.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_48" r="1.5" />
          <circle cx="1.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_49" r="1.5" />
          <circle cx="19.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_50" r="1.5" />
          <circle cx="37.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_51" r="1.5" />
          <circle cx="55.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_52" r="1.5" />
          <circle cx="73.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_53" r="1.5" />
          <circle cx="91.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_54" r="1.5" />
          <circle cx="109.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_55" r="1.5" />
          <circle cx="127.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_56" r="1.5" />
          <circle cx="1.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_57" r="1.5" />
          <circle cx="19.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_58" r="1.5" />
          <circle cx="37.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_59" r="1.5" />
          <circle cx="55.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_60" r="1.5" />
          <circle cx="73.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_61" r="1.5" />
          <circle cx="91.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_62" r="1.5" />
          <circle cx="109.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_63" r="1.5" />
          <circle cx="127.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_64" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AltRouteAboutVisitUs() {
  return (
    <div className="absolute bg-[#1b1e21] h-[873px] left-0 top-[5544px] w-[1440px] overflow-hidden" data-name="ALT / Route /about - Visit Us" id="visit-us">
      <img src={redGrain} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.16] mix-blend-soft-light" />
      <div className="absolute left-[1260px] size-[518.4px] top-[643px]" data-name="ALT ornament / taupe bottom orb">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 518.4 518.4">
          <circle cx="259.2" cy="259.2" fill="var(--fill-0, #B9AEA3)" fillOpacity="0.12" id="ALT ornament / taupe bottom orb" r="259.2" />
        </svg>
      </div>
      <div className="absolute left-[1220px] size-[460px] top-[-120px]" data-name="ALT ornament / soft red mist">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 460">
          <circle cx="230" cy="230" fill="var(--fill-0, #D41C24)" fillOpacity="0.18" id="ALT ornament / soft red mist" r="230" />
        </svg>
      </div>
      <div className="absolute left-[-180px] size-[620px] top-[140px]" data-name="ALT ornament / warm corner orb">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 620">
          <circle cx="310" cy="310" fill="var(--fill-0, #D8D0C4)" fillOpacity="0.08" id="ALT ornament / warm corner orb" r="310" />
        </svg>
      </div>
      <div className="absolute left-[1270px] size-[440px] top-[518px]" data-name="Polish location warm glow">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 440">
          <circle cx="220" cy="220" fill="var(--fill-0, #B51B2A)" fillOpacity="0.16" id="Polish location warm glow" r="220" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[18px] left-[45px] not-italic text-[#f3b7bd] text-[13px] top-[90px] tracking-[3.64px] w-[200px]">LOKASI</p>
      <p className="[word-break:break-word] absolute font-['Playfair_Display',serif] font-bold leading-[80px] left-[45px] text-[#f8f8f6] text-[72px] top-[130px] w-[500px]">Visit Us</p>
      <p className="[word-break:break-word] absolute font-['Montserrat',sans-serif] font-bold leading-[34px] left-[45px] not-italic text-[25px] text-white top-[245px] w-[620px]">Geis CCC</p>
      <p className="[word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[34px] left-[45px] not-italic text-[#d7d9da] text-[24px] top-[300px] w-[620px]">Jl. RM Said No. 233, Manahan, Solo</p>
      <ButtonGoogleMaps />
      <ButtonGeisccc />
      <ButtonWhatsAppAdmin />
      <GoogleMapsPlaceholderCard />
      <DecorativeSubtleDotGrid />
      <AltOrnamentSubtleDotGrid />
      <div className="absolute bg-[rgba(212,28,36,0.9)] h-[157.14px] left-[32px] rounded-[999px] top-[69.84px] w-[4px]" data-name="ALT ornament / red vertical rhythm line" />
    </div>
  );
}

function RouteProgramsProgramJourneyDesktop() {
  return (
    <div className="absolute bg-[#f8f6f0] h-[1780px] left-0 top-[3764px] w-[1440px]" data-name="Route /programs - Program & Journey Desktop" id="programs">
      <img src={warmWallpaper} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.045] mix-blend-multiply" />
      <div className="absolute left-[1172px] size-[430px] top-[-171.44px]" data-name="Top red mist">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430 430">
          <path d={svgPaths.p46ee380} fill="var(--fill-0, #B51B2A)" id="Top red mist" />
        </svg>
      </div>
      <div className="absolute left-[1000px] size-[520px] top-[1360px]" data-name="Bottom warm orb">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 520">
          <circle cx="260" cy="260" fill="var(--fill-0, #D8D0C4)" fillOpacity="0.46" id="Bottom warm orb" r="260" />
        </svg>
      </div>
      <SubtleDotGrid />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-bold leading-[17px] left-[720px] not-italic text-[#d41c24] text-[12px] text-center top-[82px] tracking-[3.6px] w-[1440px]">{`PROGRAM & JOURNEY`}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Playfair_Display',serif] font-bold leading-[96px] left-[720px] text-[#15181c] text-[88px] text-center top-[124px] w-[1440px]">{`Programs `}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato',sans-serif] font-normal leading-[32px] left-[720px] not-italic text-[#4b5560] text-[21px] text-center top-[238px] w-[1440px]">Ruang pertumbuhan rohani untuk mengenal Tuhan, bertumbuh, dan menemukan tujuan.</p>
      <FeatureProgramCardAlpha />
      <FeatureProgramCardSpiritualJourney />
      <ProgramJourneyOrnament />
      <div className="absolute left-[-173px] size-[520px] top-[1270px]" data-name="Community warm background circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 520">
          <path d={svgPaths.p36eef780} fill="var(--fill-0, #E7DED3)" fillOpacity="0.72" id="Community warm background circle" />
        </svg>
      </div>
      <div className="absolute left-[1060px] size-[320px] top-[1090px]" data-name="Community red glow">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 320">
          <circle cx="160" cy="160" fill="var(--fill-0, #B51B2A)" id="Community red glow" r="160" />
        </svg>
      </div>
      <CommunityFeatureSection />
    </div>
  );
}

function AltOrnamentSubtleDotGrid1() {
  return (
    <div className="absolute left-[1210px] size-[144px] top-[150px]" data-name="ALT ornament / subtle dot grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="ALT ornament / subtle dot grid">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot" r="1.5" />
          <circle cx="19.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_2" r="1.5" />
          <circle cx="37.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_3" r="1.5" />
          <circle cx="55.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_4" r="1.5" />
          <circle cx="73.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_5" r="1.5" />
          <circle cx="91.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_6" r="1.5" />
          <circle cx="109.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_7" r="1.5" />
          <circle cx="127.5" cy="1.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_8" r="1.5" />
          <circle cx="1.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_9" r="1.5" />
          <circle cx="19.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_10" r="1.5" />
          <circle cx="37.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_11" r="1.5" />
          <circle cx="55.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_12" r="1.5" />
          <circle cx="73.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_13" r="1.5" />
          <circle cx="91.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_14" r="1.5" />
          <circle cx="109.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_15" r="1.5" />
          <circle cx="127.5" cy="19.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_16" r="1.5" />
          <circle cx="1.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_17" r="1.5" />
          <circle cx="19.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_18" r="1.5" />
          <circle cx="37.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_19" r="1.5" />
          <circle cx="55.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_20" r="1.5" />
          <circle cx="73.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_21" r="1.5" />
          <circle cx="91.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_22" r="1.5" />
          <circle cx="109.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_23" r="1.5" />
          <circle cx="127.5" cy="37.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_24" r="1.5" />
          <circle cx="1.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_25" r="1.5" />
          <circle cx="19.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_26" r="1.5" />
          <circle cx="37.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_27" r="1.5" />
          <circle cx="55.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_28" r="1.5" />
          <circle cx="73.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_29" r="1.5" />
          <circle cx="91.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_30" r="1.5" />
          <circle cx="109.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_31" r="1.5" />
          <circle cx="127.5" cy="55.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_32" r="1.5" />
          <circle cx="1.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_33" r="1.5" />
          <circle cx="19.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_34" r="1.5" />
          <circle cx="37.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_35" r="1.5" />
          <circle cx="55.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_36" r="1.5" />
          <circle cx="73.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_37" r="1.5" />
          <circle cx="91.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_38" r="1.5" />
          <circle cx="109.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_39" r="1.5" />
          <circle cx="127.5" cy="73.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_40" r="1.5" />
          <circle cx="1.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_41" r="1.5" />
          <circle cx="19.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_42" r="1.5" />
          <circle cx="37.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_43" r="1.5" />
          <circle cx="55.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_44" r="1.5" />
          <circle cx="73.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_45" r="1.5" />
          <circle cx="91.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_46" r="1.5" />
          <circle cx="109.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_47" r="1.5" />
          <circle cx="127.5" cy="91.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_48" r="1.5" />
          <circle cx="1.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_49" r="1.5" />
          <circle cx="19.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_50" r="1.5" />
          <circle cx="37.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_51" r="1.5" />
          <circle cx="55.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_52" r="1.5" />
          <circle cx="73.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_53" r="1.5" />
          <circle cx="91.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_54" r="1.5" />
          <circle cx="109.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_55" r="1.5" />
          <circle cx="127.5" cy="109.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_56" r="1.5" />
          <circle cx="1.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_57" r="1.5" />
          <circle cx="19.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_58" r="1.5" />
          <circle cx="37.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_59" r="1.5" />
          <circle cx="55.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_60" r="1.5" />
          <circle cx="73.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_61" r="1.5" />
          <circle cx="91.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_62" r="1.5" />
          <circle cx="109.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_63" r="1.5" />
          <circle cx="127.5" cy="127.5" fill="var(--fill-0, #6D6259)" fillOpacity="0.2" id="dot_64" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer
      className="absolute bg-[#101316] h-[280px] left-0 top-[6417px] w-[1440px] overflow-hidden"
      data-name="Site Footer"
    >
      <div className="absolute left-[64px] top-[56px] w-[420px]">
        <p className="font-['Montserrat',sans-serif] font-bold text-white text-[22px] leading-[28px] mb-3">
          Geis CCC
        </p>
        <p className="font-['Lato',sans-serif] font-normal text-[#a8acb1] text-[15px] leading-[24px]">
          Gereja yang Kreatif, Relevan, dan berdampak bagi generasi saat ini.
        </p>
      </div>

      <div className="absolute left-[560px] top-[56px] w-[220px]">
        <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[12px] tracking-[2.4px] mb-4">
          NAVIGATE
        </p>
        <a href="#about" className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors">About</a>
        <a href="#services" className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors">Services</a>
        <a href="#programs" className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors">Programs</a>
        <a href="#visit-us" className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors">Visit Us</a>
      </div>

      <div className="absolute left-[820px] top-[56px] w-[280px]">
        <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[12px] tracking-[2.4px] mb-4">
          LOKASI
        </p>
        <p className="font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[24px] mb-1">
          Jl. RM Said No. 233
        </p>
        <p className="font-['Lato',sans-serif] font-normal text-[#a8acb1] text-[15px] leading-[24px]">
          Manahan, Solo
        </p>
      </div>

      <div className="absolute left-[1140px] top-[56px] w-[240px]">
        <p className="font-['Lato',sans-serif] font-bold text-[#f3b7bd] text-[12px] tracking-[2.4px] mb-4">
          CONNECT
        </p>
        <a
          href="https://www.instagram.com/geisccc/"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors"
        >
          Instagram · @geisccc
        </a>
        <a
          href="https://share.google/gMQJXhHA3Pmvb8bCL"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-['Lato',sans-serif] font-normal text-white text-[15px] leading-[28px] hover:text-[#f3b7bd] transition-colors"
        >
          Google Maps
        </a>
      </div>

      <div className="absolute bg-[rgba(255,255,255,0.08)] h-[1px] left-[64px] top-[218px] w-[1312px]" />
      <p className="absolute left-[64px] top-[238px] font-['Lato',sans-serif] font-normal text-[#7a7e83] text-[13px]">
        © 2026 Geis CCC. All rights reserved.
      </p>
      <p className="absolute right-[64px] top-[238px] font-['Lato',sans-serif] font-normal text-[#7a7e83] text-[13px]">
        Made with care in Solo, Indonesia.
      </p>
    </footer>
  );
}

export default function AltHomepageDesktop() {
  return (
    <div
      className="bg-white relative w-[1440px] h-[6697px] min-h-[6697px] mx-auto overflow-hidden"
      data-name="ALT / Homepage Desktop"
    >
      <div
        className="absolute bg-[rgba(255,253,248,0.42)] h-[180px] left-0 top-[3638.54px] w-[1440px]"
        data-name="ALT ornament / soft horizontal band"
      />

      <div
        className="absolute left-[1260px] size-[518.4px] top-[6189px]"
        data-name="ALT ornament / taupe bottom orb"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 518.4 518.4"
        >
          <circle
            cx="259.2"
            cy="259.2"
            fill="var(--fill-0, #B9AEA3)"
            fillOpacity="0.34"
            id="ALT ornament / taupe bottom orb"
            r="259.2"
          />
        </svg>
      </div>

      <div
        className="absolute left-[1220px] size-[460px] top-[-120px]"
        data-name="ALT ornament / soft red mist"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 460 460"
        >
          <circle
            cx="230"
            cy="230"
            fill="var(--fill-0, #D41C24)"
            fillOpacity="0.055"
            id="ALT ornament / soft red mist"
            r="230"
          />
        </svg>
      </div>

      <div
        className="absolute left-[-180px] size-[620px] top-[140px]"
        data-name="ALT ornament / warm corner orb"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 620 620"
        >
          <circle
            cx="310"
            cy="310"
            fill="var(--fill-0, #D8D0C4)"
            fillOpacity="0.42"
            id="ALT ornament / warm corner orb"
            r="310"
          />
        </svg>
      </div>

      <Section01HeroVideo />
      <Section02AboutGeisCcc />
      <SectionPastoralMessageHome />
      <Section03ServiceSchedule />
      <RouteProgramsProgramJourneyDesktop />
      <AltRouteAboutVisitUs />
      <AltOrnamentSubtleDotGrid1 />

      <div
        className="absolute bg-[rgba(212,28,36,0.9)] h-[240px] left-[32px] rounded-[999px] top-[180px] w-[4px]"
        data-name="ALT ornament / red vertical rhythm line"
      />

      <SiteFooter />
    </div>
  );
}
