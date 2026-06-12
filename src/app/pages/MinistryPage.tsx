import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router";
import ckidsHeroVideo from "../../assets/videos/ckids-hero.mp4";
import { SITE_INFO } from "../config/site";
import { CKIDS_PHOTOS, COMMUNITY_PHOTOS, WORSHIP_PHOTOS } from "../data/communityPhotos";

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
      "Proses!.",
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
      "Proses!.",
    status: "Coming Soon",
  },
};

const YOUTH_ROUTE_PHOTOS = [
  {
    src: COMMUNITY_PHOTOS.youthService,
    alt: "Youth Service GEIS CCC",
    label: "Youth Service",
    objectPosition: "50% 54%",
  },
  {
    src: WORSHIP_PHOTOS[1].src,
    alt: WORSHIP_PHOTOS[1].alt,
    label: "Worship",
    objectPosition: WORSHIP_PHOTOS[1].objectPosition,
  },
  {
    src: COMMUNITY_PHOTOS.loveCommunity,
    alt: "Komunitas keluarga GEIS CCC",
    label: "Community",
    objectPosition: "50% 45%",
  },
];

const POWERHOUSE_ROUTE_PHOTOS = [
  WORSHIP_PHOTOS[2],
  WORSHIP_PHOTOS[4],
  WORSHIP_PHOTOS[5],
  WORSHIP_PHOTOS[3],
];

function MinistryPhotoGallery({
  photos,
  title,
}: {
  photos: ReadonlyArray<{
    src: string;
    alt: string;
    label: string;
    objectPosition: string;
  }>;
  title: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f0] px-5 py-14 md:px-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(90deg,rgba(181,27,42,0.16)_1px,transparent_1px),linear-gradient(rgba(17,20,24,0.1)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto max-w-[1180px]">
        <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.28em] text-[#d41c24]">
          Moments
        </p>
        <h2 className="mt-3 font-['Playfair_Display',serif] text-[42px] font-bold leading-[1.05] text-[#15181c] md:text-[72px]">
          {title}
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {photos.map((photo, index) => (
            <figure
              key={`${photo.src}-${photo.label}`}
              className={`geis-pop-card group relative min-h-[250px] overflow-hidden rounded-[14px] border border-[#e2ded6] bg-[#15181c] shadow-[0_18px_38px_rgba(0,0,0,0.12)] ${
                index === 0 ? "md:col-span-2 md:min-h-[390px]" : "md:min-h-[390px]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: photo.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-black/16 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <p className="font-['Montserrat',sans-serif] text-[18px] font-black uppercase tracking-[0.1em] text-white">
                  {photo.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MinistryPage({ ministry }: MinistryPageProps) {
  const content = MINISTRY_CONTENT[ministry];
  const isCkids = ministry === "ckids";
  const isYouth = ministry === "youth";
  const isPowerhouse = ministry === "powerhouse";
  const heroPhoto = isYouth
    ? COMMUNITY_PHOTOS.youthService
    : isPowerhouse
      ? WORSHIP_PHOTOS[4].src
      : null;
  const heroObjectPosition = isYouth ? "50% 54%" : "50% 44%";
  const galleryPhotos = isCkids
    ? CKIDS_PHOTOS
    : isYouth
      ? YOUTH_ROUTE_PHOTOS
      : POWERHOUSE_ROUTE_PHOTOS;
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
            className="absolute inset-0 size-full object-cover object-center"
            src={ckidsHeroVideo}
            autoPlay
            muted={!soundEnabled}
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <>
            <img
              src={heroPhoto ?? WORSHIP_PHOTOS[0].src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: heroObjectPosition }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,28,36,0.36),transparent_32%),linear-gradient(135deg,rgba(17,20,24,0.84)_0%,rgba(39,16,20,0.62)_48%,rgba(122,18,28,0.52)_100%)]" />
          </>
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

      <MinistryPhotoGallery
        photos={galleryPhotos}
        title={
          isCkids
            ? "Ckids Moments"
            : isYouth
              ? "Youth Moments"
              : "Powerhouse Moments"
        }
      />
    </main>
  );
}
