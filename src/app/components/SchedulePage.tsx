import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, PlusCircle } from "lucide-react";
import { Link } from "react-router";
import pixelJesus from "../../assets/decor/pixel-jesus.jpg";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import youthPhotoOne from "../../assets/images/carousel/youth-1.jpg";
import youthPhotoTwo from "../../assets/images/carousel/youth-2.jpg";
import youthPhotoThree from "../../assets/images/carousel/youth-3.jpg";
import youthPhotoFour from "../../assets/images/carousel/youth-4.jpg";
import youthBgPhoto from "../../assets/images/carousel/youth-bg.jpg";
import youthHaloPhoto from "../../assets/images/carousel/youth-halo.jpg";
import youthMainPhoto from "../../assets/images/carousel/youth-main.jpg";
import { INSTAGRAM_RECENT_POSTS, SITE_INFO } from "../config/site";
import { CKIDS_PHOTOS, COMMUNITY_PHOTOS, WORSHIP_PHOTOS } from "../data/communityPhotos";
import { SCHEDULE_ITEMS } from "../data/schedules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ckidsTopics = [
  {
    title: "Jesus, Safety, & Fun",
    body:
      "Anak-anak belajar mengenal Yesus di ruang yang aman, hangat, dan menyenangkan.",
  },
];

const youthGalleryPhotos = [
  { src: COMMUNITY_PHOTOS.youthService, alt: "Youth service group photo" },
  { src: youthPhotoOne, alt: "Youth community group photo" },
  { src: youthPhotoTwo, alt: "Youth worship moment" },
  { src: youthPhotoThree, alt: "Youth community candid" },
  { src: youthPhotoFour, alt: "Youth friends at GEIS CCC" },
];

const sundayServicePhotos = [
  WORSHIP_PHOTOS[0],
  WORSHIP_PHOTOS[1],
  WORSHIP_PHOTOS[2],
  WORSHIP_PHOTOS[3],
  WORSHIP_PHOTOS[4],
];

const recentPostCards = [
  {
    image: COMMUNITY_PHOTOS.loveCommunity,
    label: "Community",
    title: "This Is Us!",
    body: "Potongan momen keluarga GEIS CCC, worship, dan kebersamaan setelah ibadah.",
    href: INSTAGRAM_RECENT_POSTS[0],
  },
  {
    image: WORSHIP_PHOTOS[0].src,
    label: "Anniversary",
    title: "Three Years Together",
    body: "Cerita syukur, tawa, dan momen perayaan 3 tahun kebaikan Tuhan.",
    href: INSTAGRAM_RECENT_POSTS[1],
  },
  {
    image: WORSHIP_PHOTOS[1].src,
    label: "Behind The Scene",
    title: "Intip Keseruan Kami",
    body: "Cuplikan singkat aktivitas, pelayanan, dan energi komunitas GEIS CCC.",
    href: INSTAGRAM_RECENT_POSTS[2],
  },
];

function getScheduleItem(title: string) {
  return SCHEDULE_ITEMS.find((item) => item.title === title);
}

function MinistryViewMoreLink({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="geis-button-hover mt-8 inline-flex h-[56px] w-full items-center justify-between rounded-[8px] bg-[#d41c24] px-6 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.12em] text-white no-underline sm:w-[220px]"
    >
      <span>View More</span>
      <ExternalLink className="size-5" aria-hidden="true" />
    </Link>
  );
}

function RecentPostCard({
  post,
  featured = false,
}: {
  post: (typeof recentPostCards)[number];
  featured?: boolean;
}) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`geis-pop-card group relative block min-h-[360px] overflow-hidden rounded-[14px] border border-white/10 bg-[#111418] text-white no-underline shadow-[0_22px_48px_rgba(0,0,0,0.32)] ${
        featured ? "md:col-span-2 md:min-h-[460px]" : "md:min-h-[460px]"
      }`}
    >
      <img
        src={post.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-contain opacity-72 transition duration-700 group-hover:scale-105 group-hover:opacity-90 md:object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-black/5" />
      <div className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-sm transition duration-300 group-hover:bg-[#d41c24]">
        <ExternalLink className="size-5" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.24em] text-[#f3b7bd]">
          {post.label}
        </p>
        <h2 className="mt-3 max-w-[560px] break-words font-['Montserrat',sans-serif] text-[27px] font-black leading-[1.05] text-white md:text-[44px] md:leading-[1]">
          {post.title}
        </h2>
        <p className="mt-4 max-w-[520px] font-['Lato',sans-serif] text-[15px] leading-[1.65] text-white/78 md:text-[17px]">
          {post.body}
        </p>
      </div>
    </a>
  );
}

function InstagramRecentFeed() {
  return (
    <div className="relative z-10 mx-auto mt-8 w-full max-w-[1180px] px-5 md:mt-14 md:px-10">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recentPostCards.map((post, index) => (
          <RecentPostCard
            key={post.href}
            post={post}
            featured={index === 0}
          />
        ))}
      </div>
      <a
        href={SITE_INFO.social.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="geis-button-hover geis-hover-black mx-auto mt-8 flex w-full max-w-[320px] items-center justify-center rounded-[8px] bg-[#d41c24] px-5 py-4 text-center font-['Montserrat',sans-serif] text-[12px] font-black uppercase text-white no-underline md:w-fit md:max-w-none md:px-7 md:text-[13px]"
      >
        <span>OPEN INSTAGRAM @GEISCCC</span>
      </a>
    </div>
  );
}

function RecentPostHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#5f1119_0%,#77131c_58%,#8f1620_100%)] pb-20 md:pb-28">
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-25 mix-blend-soft-light"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(93,17,24,0.82)_0%,rgba(104,18,27,0.88)_62%,rgba(143,22,32,0.94)_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[12%] h-[360px] w-[230px] rotate-[-8deg] opacity-[0.11] md:left-[14%] md:top-[10%] md:h-[520px] md:w-[330px]"
      >
        <span className="absolute left-1/2 top-0 h-full w-[28%] -translate-x-1/2 rounded-[999px] bg-white" />
        <span className="absolute left-0 top-[28%] h-[22%] w-full rounded-[999px] bg-white" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[20%] hidden h-[280px] w-[180px] rotate-[10deg] opacity-[0.06] md:block"
      >
        <span className="absolute left-1/2 top-0 h-full w-[26%] -translate-x-1/2 rounded-[999px] bg-white" />
        <span className="absolute left-0 top-[30%] h-[20%] w-full rounded-[999px] bg-white" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-32 bg-gradient-to-b from-transparent via-[#8f1620]/72 to-[#8f1620]" />
      <div className="absolute inset-0 opacity-20">
        <span className="absolute left-[9%] top-[33%] size-28 rounded-full bg-black/45 md:size-32" />
        <span className="absolute left-[28%] top-[23%] size-36 rounded-full bg-black/40 md:size-44" />
        <span className="absolute left-[55%] top-[31%] size-28 rounded-full bg-black/40 md:size-36" />
        <span className="absolute left-[76%] top-[24%] size-32 rounded-full bg-black/40 md:size-40" />
      </div>
      <h1 className="relative z-10 mx-auto px-5 pt-28 text-center font-['Montserrat',sans-serif] text-[30px] font-black leading-[1.05] text-white md:pt-44 md:text-[64px] md:leading-none lg:text-[70px]">
        OUR RECENT POST!
      </h1>
      <InstagramRecentFeed />
    </section>
  );
}

function SundayServicePhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = sundayServicePhotos[activeIndex];

  const showPreviousPhoto = () => {
    setActiveIndex((current) =>
      (current - 1 + sundayServicePhotos.length) % sundayServicePhotos.length,
    );
  };

  const showNextPhoto = () => {
    setActiveIndex((current) => (current + 1) % sundayServicePhotos.length);
  };

  return (
    <div className="group relative aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#3a1116] shadow-[0_24px_54px_rgba(0,0,0,0.26)] md:aspect-square">
      <img
        key={activePhoto.src}
        className="absolute inset-0 size-full object-contain opacity-[0.78] transition-all duration-700 group-hover:scale-105 md:object-cover"
        src={activePhoto.src}
        alt={activePhoto.alt}
      />
      <div className="absolute inset-0 bg-[#181313]/30" />
      <div className="absolute bottom-7 left-7 right-7 border-t border-white/35 pt-5">
        <p className="font-['Roboto_Mono',monospace] text-[12px] uppercase text-white/80">
          GEIS CCC / Sunday Gathering
        </p>
      </div>
      <button
        type="button"
        aria-label="Foto Sunday Service sebelumnya"
        className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/24 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={showPreviousPhoto}
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Foto Sunday Service berikutnya"
        className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/24 text-white backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={showNextPhoto}
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
      <div className="absolute bottom-4 right-5 flex gap-1.5">
        {sundayServicePhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Lihat foto Sunday Service ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/38"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function TimePlaceSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#8f1620_0%,#a41724_28%,#d41c24_100%)] px-6 py-14 md:min-h-[820px] md:px-[120px] md:py-[82px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-34 [background-image:radial-gradient(circle_at_22%_10%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_72%,rgba(0,0,0,0.2),transparent_36%),linear-gradient(90deg,rgba(0,0,0,0.16),transparent_42%,rgba(255,255,255,0.08))]"
      />
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-18 mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rotate-45 border border-white/12"
      />
      <div className="absolute bottom-16 left-8 hidden h-[220px] w-[160px] border-l-2 border-white/28 md:block" />

      <div className="relative z-10 inline-flex bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
        <p className="font-['Montserrat',sans-serif] text-[14px] font-black uppercase text-[#d41c24]">
          Waktu dan Tempat
        </p>
      </div>

      <div className="relative z-10 mt-10 grid gap-8 md:mt-16 lg:grid-cols-[520px_1fr] lg:items-start">
        <SundayServicePhotoCarousel />
        <div className="max-w-xl pt-2 text-white">
          <h2 className="font-['Montserrat',sans-serif] text-[34px] font-black leading-[1] md:text-[58px]">
            Sunday Service
          </h2>
          <p className="mt-5 font-['Lato',sans-serif] text-[21px] font-bold text-[#f4eeee] md:text-[24px]">
            Minggu, 09.00 WIB
          </p>
          <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.75] text-white/82 md:text-[18px]">
            Ibadah umum untuk bertumbuh dalam firman, penyembahan, dan
            komunitas yang hangat bersama GEIS CCC.
          </p>
        </div>
      </div>
    </section>
  );
}

function CkidsLogo() {
  return (
    <div className="relative mx-auto flex h-[150px] items-center justify-center overflow-hidden bg-[#fffdf8] md:h-[190px]">
      <img
        src={redFluidShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-2 h-36 w-36 rotate-12 rounded-full object-cover opacity-[0.08] mix-blend-multiply md:h-52 md:w-52"
      />
      <img
        src={pixelJesus}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[8%] hidden h-28 w-28 object-contain opacity-[0.08] mix-blend-multiply md:block"
      />
      <div className="relative">
        <span className="absolute -left-9 -top-6 text-[28px] text-[#f09395]">
          *
        </span>
        <span className="absolute -right-9 -top-7 text-[32px] text-[#f2b84b]">
          +
        </span>
        <span className="absolute -bottom-6 left-8 text-[24px] text-[#8fd3c7]">
          ~
        </span>
        <p className="font-['Montserrat',sans-serif] text-[62px] font-black leading-none tracking-[-0.04em] text-[#1b1e21] md:text-[86px]">
          CKIDS
        </p>
      </div>
    </div>
  );
}

function CkidsGallery() {
  return (
    <div className="relative overflow-hidden bg-[#fffdf8] px-4 py-8 md:px-10 md:py-12">
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.08] mix-blend-multiply"
      />
      <div className="relative mx-auto grid max-w-[1180px] gap-4 md:grid-cols-6">
        {CKIDS_PHOTOS.map((photo, index) => (
          <figure
            key={photo.src}
            className={`geis-pop-card group relative min-h-[230px] overflow-hidden rounded-[14px] border border-[#e2ded6] bg-[#15181c] shadow-[0_18px_38px_rgba(0,0,0,0.12)] ${
              index === 0 ? "md:col-span-3 md:min-h-[360px]" : "md:col-span-3 md:min-h-[260px] lg:col-span-2"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              style={{ objectPosition: photo.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-['Montserrat',sans-serif] text-[17px] font-black uppercase tracking-[0.08em] text-white md:text-[20px]">
                {photo.label}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function CkidsAccordion() {
  return (
    <div className="bg-white px-6 py-16">
      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-[700px] border-y border-[#e8e3dc]"
      >
        {ckidsTopics.map((topic) => (
          <AccordionItem key={topic.title} value={topic.title}>
            <AccordionTrigger className="group py-5 font-['Montserrat',sans-serif] text-[15px] font-black text-[#15181c] transition-colors hover:text-[#d41c24] hover:no-underline data-[state=open]:text-[#d41c24] [&>svg:last-child]:hidden">
              <span>{topic.title}</span>
              <PlusCircle className="size-4 shrink-0 text-[#15181c] transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:scale-110" />
            </AccordionTrigger>
            <AccordionContent className="font-['Lato',sans-serif] text-[15px] leading-[1.7] text-[#46505a]">
              {topic.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mx-auto max-w-[700px]">
        <MinistryViewMoreLink to="/ckids" />
      </div>
    </div>
  );
}

function CkidsSection() {
  return (
    <section className="bg-white">
      <CkidsLogo />
      <CkidsGallery />
      <CkidsAccordion />
    </section>
  );
}

function YouthPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = youthGalleryPhotos[activeIndex];

  const showPreviousPhoto = () => {
    setActiveIndex((current) =>
      (current - 1 + youthGalleryPhotos.length) % youthGalleryPhotos.length,
    );
  };

  const showNextPhoto = () => {
    setActiveIndex((current) => (current + 1) % youthGalleryPhotos.length);
  };

  return (
    <div className="relative bg-[#111418] px-0 pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-black shadow-[0_24px_52px_rgba(0,0,0,0.32)]">
          <img
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="h-[360px] w-full object-contain object-center opacity-75 transition-all duration-700 md:h-[600px] md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-black/8 to-black/28" />

          <p className="absolute left-6 top-6 font-['Montserrat',sans-serif] text-[34px] font-black uppercase leading-none text-white md:left-11 md:top-10 md:text-[72px]">
            OUR
            <br />
            MOMENTS
          </p>

          <button
            type="button"
            aria-label="Foto sebelumnya"
            className="absolute left-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/18 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-7 md:size-14"
            onClick={showPreviousPhoto}
          >
            <ChevronLeft className="size-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Foto berikutnya"
            className="absolute right-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/18 text-white backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-7 md:size-14"
            onClick={showNextPhoto}
          >
            <ChevronRight className="size-7" aria-hidden="true" />
          </button>

          <div className="absolute bottom-5 left-6 flex gap-2 md:left-11">
            {youthGalleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Lihat foto ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-9 bg-white" : "w-3 bg-white/38"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function YouthSection() {
  const marqueeItems = [
    "Kreatif dan Relevan,",
    "My Generation is my responsibility,",
  ];

  return (
    <section className="relative overflow-hidden bg-[#e7e2db]">
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.12] mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(181,27,42,0.16),transparent_28%),radial-gradient(circle_at_86%_58%,rgba(17,18,20,0.13),transparent_30%),linear-gradient(180deg,#eee9e2_0%,#d9d4ce_52%,#111418_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[310px] h-[560px] opacity-[0.28] [background-image:linear-gradient(90deg,rgba(181,27,42,0.18)_1px,transparent_1px),linear-gradient(rgba(17,20,24,0.12)_1px,transparent_1px)] [background-size:42px_42px] md:top-[360px]"
      />
      <img
        src={redFluidShape}
        alt=""
        aria-hidden="true"
        className="geis-float-soft pointer-events-none absolute -left-24 top-[390px] h-72 w-72 rotate-12 rounded-full object-cover opacity-[0.08] mix-blend-multiply md:left-12 md:top-[440px] md:h-96 md:w-96"
      />
      <div
        aria-hidden="true"
        className="geis-glow-pulse pointer-events-none absolute right-[-130px] top-[420px] h-[360px] w-[360px] rounded-full bg-[#b51b2a]/18 blur-3xl md:right-[4%] md:h-[520px] md:w-[520px]"
      />
      <div className="relative overflow-hidden rounded-b-[24px] bg-[#111214] shadow-[0_20px_38px_rgba(0,0,0,0.24)]">
        <img
          src={COMMUNITY_PHOTOS.youthService}
          alt=""
          aria-hidden="true"
          className="geis-slow-pan pointer-events-none absolute inset-y-0 right-0 size-full object-cover object-center opacity-40 md:w-[64%] md:opacity-78"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/86 to-[#111214]/18" />
        <div className="geis-float-soft absolute right-[7%] top-8 h-20 w-20 rounded-full border border-white/10 bg-white/[0.025] md:h-24 md:w-24" />
        <div className="geis-float-soft-delay absolute bottom-[-70px] right-[14%] h-44 w-44 rounded-full border border-[#ef2735]/20 md:h-52 md:w-52" />
        <div className="relative z-10 px-6 py-16 md:px-11 md:py-20">
          <h2 className="font-['Montserrat',sans-serif] text-[56px] font-black leading-[0.86] text-white md:text-[96px] lg:text-[118px]">
            YOUTH
          </h2>
          <p className="mt-4 font-['Montserrat',sans-serif] text-[15px] font-black uppercase text-[#ff2638] md:text-[18px]">
            Service
          </p>
        </div>
      </div>

      <div className="relative z-10 px-5 py-10 md:px-11 md:py-14">
        <div className="geis-pop-card relative mx-auto max-w-[1280px] overflow-hidden rounded-[18px] border border-white/28 bg-[#111214] px-6 py-8 shadow-[0_28px_70px_rgba(17,18,20,0.24)] md:rounded-[4px] md:px-16 md:py-12">
          <img
            src={COMMUNITY_PHOTOS.youthService}
            alt=""
            aria-hidden="true"
            className="geis-slow-pan pointer-events-none absolute inset-0 size-full object-cover object-[50%_52%] opacity-74"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,18,20,0.42),rgba(181,27,42,0.44)_54%,rgba(17,18,20,0.22))]" />
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.16)_0_1px,transparent_1px_28px)]" />
          <img
            src={redFluidShape}
            alt=""
            aria-hidden="true"
            className="geis-float-soft pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full object-cover opacity-14 mix-blend-screen md:h-64 md:w-64"
          />
          <div className="absolute bottom-[-36px] left-[52%] h-20 w-20 rotate-45 bg-black/10" />
          <div className="relative z-10 grid min-h-[210px] gap-8 py-3 md:grid-cols-[1fr_300px] md:items-end">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[16px] font-black uppercase tracking-[0.12em] text-white/70">
                Youth Gathering
              </p>
              <h3 className="mt-5 max-w-[720px] font-['Montserrat',sans-serif] text-[30px] font-black leading-[1] text-white md:text-[52px]">
                Kreatif dan <span className="geis-serif-accent">relevan.</span>
              </h3>
            </div>
            <div className="rounded-[12px] border border-white/24 bg-black/18 p-5 backdrop-blur-sm md:border-l-4 md:border-l-white md:bg-transparent md:p-0 md:pl-6 md:backdrop-blur-0">
              <p className="font-['Montserrat',sans-serif] text-[24px] font-black text-white md:text-[30px]">
                Minggu
              </p>
              <p className="mt-2 font-['Montserrat',sans-serif] text-[38px] font-black leading-none text-white md:text-[52px]">
                11.00
              </p>
              <p className="mt-2 font-['Lato',sans-serif] text-[18px] font-bold text-white/85">
                WIB
              </p>
              <MinistryViewMoreLink to="/youth" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden bg-[#0f1115] py-8">
        <div className="absolute -left-10 top-3 h-20 w-20 rounded-full border border-[#f05a66]/35" />
        <div className="absolute right-[18%] top-8 h-5 w-5 rotate-45 bg-[#f05a66]" />
        <svg
          className="geis-curved-marquee h-[96px] w-[1400px] min-w-full text-white md:h-[118px] md:w-[1800px]"
          viewBox="0 0 1800 118"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <path
              id="youth-marquee-curve"
              d="M -80 72 C 210 16 430 112 680 60 C 930 8 1130 104 1390 56 C 1570 24 1690 34 1880 70"
            />
          </defs>
          <text
            fill="currentColor"
            className="font-['Montserrat',sans-serif] text-[22px] font-black uppercase tracking-[0.04em]"
          >
            <textPath href="#youth-marquee-curve" startOffset="0%">
              {marqueeItems.join("   ")}   {marqueeItems.join("   ")}   {marqueeItems.join("   ")}
              <animate
                attributeName="startOffset"
                from="0%"
                to="-50%"
                dur="16s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
      <YouthPhotoCarousel />
    </section>
  );
}

function PowerhouseSection() {
  const schedule = getScheduleItem("Power House");

  return (
    <section className="relative overflow-hidden bg-[#171014] px-6 py-16 text-white md:px-14 md:py-24">
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-24 mix-blend-soft-light"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,28,36,0.28),transparent_34%),linear-gradient(135deg,#171014_0%,#241014_50%,#6d1019_100%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.28em] text-[#f3b7bd]">
            Prayer & Worship
          </p>
          <h2 className="mt-4 font-['Montserrat',sans-serif] text-[44px] font-black uppercase leading-[0.95] md:text-[86px]">
            Power
            <br />
            House
          </h2>
          <MinistryViewMoreLink to="/powerhouse" />
        </div>
        <div className="geis-pop-card rounded-[8px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-md md:p-10">
          <p className="font-['Montserrat',sans-serif] text-[24px] font-black text-white md:text-[34px]">
            {schedule?.day ?? "Setiap Jumat"}
          </p>
          <p className="mt-2 font-['Montserrat',sans-serif] text-[42px] font-black leading-none text-[#ff2638] md:text-[58px]">
            {schedule?.time ?? "18.00"}
          </p>
          <p className="mt-6 font-['Lato',sans-serif] text-[16px] leading-[1.75] text-white/82 md:text-[18px]">
            {schedule?.description ??
              "Pertemuan doa dan pujian untuk mencari hadirat Tuhan lebih dalam bersama komunitas GEIS CCC."}
          </p>
        </div>
      </div>
    </section>
  );
}

function MorningPrayerSection() {
  const schedule = getScheduleItem("Pagi Bersama Tuhan");

  return (
    <section className="relative overflow-hidden bg-[#fffdf8] px-6 py-16 md:px-14 md:py-24">
      <img
        src={redFluidShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full object-cover opacity-[0.08] mix-blend-multiply md:h-96 md:w-96"
      />
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
        <div>
          <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.28em] text-[#d41c24]">
            Daily Devotion
          </p>
          <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.02] text-[#15181c] md:text-[78px]">
            Pagi Bersama Tuhan
          </h2>
          <p className="mt-6 max-w-[720px] font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#46505a] md:text-[20px]">
            {schedule?.description ??
              "Saat teduh pagi untuk memulai hari dengan renungan firman Tuhan dan doa bersama."}
          </p>
        </div>
        <div className="geis-pop-card rounded-[8px] border border-[#e2ded6] bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-9">
          <p className="font-['Montserrat',sans-serif] text-[18px] font-black uppercase tracking-[0.16em] text-[#d41c24]">
            {schedule?.day ?? "Senin - Sabtu"}
          </p>
          <p className="mt-4 font-['Montserrat',sans-serif] text-[58px] font-black leading-none text-[#15181c] md:text-[76px]">
            {schedule?.time ?? "05.30"}
          </p>
          <p className="mt-4 font-['Lato',sans-serif] text-[15px] font-bold text-[#46505a] md:text-[17px]">
            Mulai hari dengan firman dan doa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111418]">
      <RecentPostHero />
      <TimePlaceSection />
      <CkidsSection />
      <YouthSection />
      <PowerhouseSection />
      <MorningPrayerSection />
    </div>
  );
}
