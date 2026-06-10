import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router";
import ckidsHeroVideo from "../../assets/videos/ckids-hero.mp4";
import { SITE_INFO } from "../config/site";

type MinistryKey = "youth" | "ckids" | "powerhouse";

type MinistryPageProps = {
  ministry: MinistryKey;
};

const MINISTRY_CONTENT: Record<
  MinistryKey,
  {
    eyebrow: string;
    title: string;
    tagline: string;
    body: string;
    status: string;
  }
> = {
  youth: {
    eyebrow: "GEIS CCC MINISTRY",
    title: "Youth",
    tagline: "Ruang anak muda untuk bertumbuh, terhubung, dan berjalan bersama Tuhan.",
    body:
      "Konten lengkap Youth sedang disiapkan. Halaman ini sudah siap sebagai route resmi untuk navigasi website.",
    status: "Coming Soon",
  },
  ckids: {
    eyebrow: "GEIS CCC MINISTRY",
    title: "Ckids",
    tagline: "Ruang yang aman, kreatif, dan penuh sukacita untuk anak-anak mengenal Tuhan.",
    body:
      "Ckids hadir untuk menolong anak-anak bertumbuh dalam iman melalui suasana yang hangat, relevan, dan menyenangkan.",
    status: "Kids Ministry",
  },
  powerhouse: {
    eyebrow: "GEIS CCC MINISTRY",
    title: "Powerhouse",
    tagline: "Ruang generasi untuk mengalami Tuhan dan bergerak dalam tujuan-Nya.",
    body:
      "Konten lengkap Powerhouse sedang disiapkan. Halaman ini sudah siap sebagai route resmi untuk navigasi website.",
    status: "Coming Soon",
  },
};

export default function MinistryPage({ ministry }: MinistryPageProps) {
  const content = MINISTRY_CONTENT[ministry];
  const isCkids = ministry === "ckids";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    setSoundEnabled(false);
  }, [ministry]);

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
    <main className="min-h-screen overflow-hidden bg-[#111418] pt-[74px] md:pt-[92px]">
      <section className="relative flex min-h-[calc(100svh-74px)] items-end overflow-hidden px-6 pb-14 pt-28 text-white md:min-h-[calc(100svh-92px)] md:px-14 md:pb-20 md:pt-36">
        {isCkids ? (
          <video
            ref={videoRef}
            className="absolute inset-0 size-full object-cover"
            src={ckidsHeroVideo}
            autoPlay
            muted={!soundEnabled}
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,28,36,0.36),transparent_32%),linear-gradient(135deg,#111418_0%,#271014_48%,#7a121c_100%)]" />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.58)_52%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(0deg,#111418_0%,transparent_100%)]" />

        <div className="relative z-10 w-full max-w-[980px]">
          <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.32em] text-[#f3b7bd] md:text-[12px]">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 font-['Montserrat',sans-serif] text-[56px] font-black uppercase leading-[0.9] text-white md:text-[112px] lg:text-[136px]">
            {content.title}
          </h1>
          <p className="mt-7 max-w-[760px] font-['Lato',sans-serif] text-[19px] leading-[1.6] text-white/88 md:text-[25px]">
            {content.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {isCkids && (
              <button
                type="button"
                aria-label={soundEnabled ? "Matikan suara video CKIDS" : "Nyalakan suara video CKIDS"}
                className="inline-flex h-[58px] items-center justify-between gap-6 rounded-[8px] border border-white/24 bg-white/12 px-6 font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md transition-colors hover:bg-white/18"
                onClick={toggleVideoSound}
              >
                <span>{soundEnabled ? "Sound On" : "Sound Off"}</span>
                {soundEnabled ? (
                  <Volume2 className="size-5" strokeWidth={2.4} aria-hidden="true" />
                ) : (
                  <VolumeX className="size-5" strokeWidth={2.4} aria-hidden="true" />
                )}
              </button>
            )}
            <Link
              to="/"
              className="inline-flex h-[58px] items-center justify-between gap-6 rounded-[8px] bg-[#d41c24] px-6 font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.12em] text-white no-underline transition-colors hover:bg-[#8f1621]"
            >
              Back to Home
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <a
              href={SITE_INFO.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center justify-between gap-6 rounded-[8px] border border-white/22 bg-white/8 px-6 font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.12em] text-white no-underline backdrop-blur-md transition-colors hover:bg-white/14"
            >
              Ask Admin
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111418] px-6 py-16 text-white md:px-14 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <p className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.24em] text-[#ff2638]">
            {content.status}
          </p>
          <p className="font-['Lato',sans-serif] text-[18px] leading-[1.75] text-[#d7d9da] md:text-[22px]">
            {content.body}
          </p>
        </div>
      </section>
    </main>
  );
}
