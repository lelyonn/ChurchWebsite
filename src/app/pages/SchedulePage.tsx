import { useState } from "react";
import {
  Calendar,
  CalendarDays,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Copy,
  ExternalLink,
  Heart,
  Info,
  MapPin,
  MessageCircle,
  PlusCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Link } from "react-router";
import redGrain from "../../assets/decor/red-grain.jpg";
import youthPhotoOne from "../../assets/images/carousel/youth-1.jpg";
import youthPhotoTwo from "../../assets/images/carousel/youth-2.jpg";
import youthPhotoThree from "../../assets/images/carousel/youth-3.jpg";
import youthPhotoFour from "../../assets/images/carousel/youth-4.jpg";
import youthBgPhoto from "../../assets/images/carousel/youth-bg.jpg";
import { INSTAGRAM_RECENT_POSTS, SITE_INFO } from "../config/site";
import { CKIDS_PHOTOS, COMMUNITY_PHOTOS, WORSHIP_PHOTOS } from "../data/communityPhotos";
import { SCHEDULE_ITEMS } from "../data/schedules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ckidsTopics = [
  {
    title: "Jesus, Safety, & Fun",
    body: "Anak-anak belajar mengenal Yesus di ruang yang aman, hangat, dan menyenangkan.",
  },
];

const youthGalleryPhotos = [
  { src: youthBgPhoto, alt: "Youth service group photo", objectPosition: "50% 34%" },
  { src: youthPhotoOne, alt: "Youth community group photo", objectPosition: "50% 38%" },
  { src: youthPhotoTwo, alt: "Youth worship moment", objectPosition: "50% 38%" },
  { src: youthPhotoThree, alt: "Youth community candid", objectPosition: "50% 36%" },
  { src: youthPhotoFour, alt: "Youth friends at GEIS CCC", objectPosition: "50% 38%" },
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

type ScheduleCategory = "all" | "sunday" | "youth" | "kids" | "prayer";

interface MatrixItem {
  id: string;
  category: ScheduleCategory;
  categoryLabel: string;
  title: string;
  day: string;
  time: string;
  location: string;
  room: string;
  audience: string;
  description: string;
  targetAnchor: string;
  internalPath?: string;
  isOnline?: boolean;
}

const MASTER_SCHEDULE: MatrixItem[] = [
  {
    id: "sunday-service",
    category: "sunday",
    categoryLabel: "Ibadah Umum",
    title: "Sunday Service",
    day: "Setiap Minggu",
    time: "09.00 - 10.15 WIB",
    location: `${SITE_INFO.location.street}, ${SITE_INFO.location.area}`,
    room: "Main Hall Lantai 1",
    audience: "Semua Kalangan & Keluarga",
    description:
      "Ibadah umum untuk seluruh jemaat dengan pujian, penyembahan, dan khotbah firman Tuhan. Tempat di mana komunitas berkumpul untuk bertumbuh dalam iman bersama-sama. Ibadah ini dirancang untuk semua kalangan, dari anak muda hingga dewasa, dengan pesan yang relevan dan praktis untuk kehidupan sehari-hari.",
    targetAnchor: "#detail-sunday",
  },
  {
    id: "ckids-service",
    category: "kids",
    categoryLabel: "Anak-Anak",
    title: "CKIDS Church",
    day: "Setiap Minggu",
    time: "09.00 - 10.15 WIB",
    location: `${SITE_INFO.location.street}, ${SITE_INFO.location.area}`,
    room: "Ruang Kelas CKIDS Lantai 2",
    audience: "Balita s/d Sekolah Dasar",
    description:
      "Pelayanan khusus untuk anak-anak yang berlangsung bersamaan dengan Sunday Service. Program interaktif yang dirancang untuk membantu anak-anak belajar tentang Yesus dengan cara yang menyenangkan melalui cerita Alkitab, permainan, musik, dan aktivitas kreatif. Ruangan yang aman dan pelayan yang terlatih siap melayani buah hati Anda.",
    targetAnchor: "#detail-ckids",
    internalPath: "/ckids",
  },
  {
    id: "youth-service",
    category: "youth",
    categoryLabel: "Generasi Muda",
    title: "Youth Service",
    day: "Setiap Minggu",
    time: "11.00 - 12.15 WIB",
    location: `${SITE_INFO.location.street}, ${SITE_INFO.location.area}`,
    room: "Youth Hall GEIS CCC",
    audience: "Remaja, Mahasiswa & Dewasa Muda",
    description:
      "Ibadah khusus untuk remaja dan pemuda dengan worship musik kontemporer dan firman yang relevan dengan kehidupan generasi muda. Tempat di mana para pemuda dapat bertumbuh dalam iman, membangun persahabatan yang solid, dan menemukan tujuan hidup mereka di dalam Kristus. Diskusi terbuka dan komunitas yang mendukung.",
    targetAnchor: "#detail-youth",
    internalPath: "/youth",
  },
  {
    id: "powerhouse-service",
    category: "prayer",
    categoryLabel: "Doa & Hadirat",
    title: "Powerhouse",
    day: "Setiap Jumat",
    time: "18.00 WIB",
    location: `${SITE_INFO.location.street}, ${SITE_INFO.location.area}`,
    room: "Ruang Doa GEIS CCC",
    audience: "Semua Jemaat & Pencari Tuhan",
    description:
      "Pertemuan doa dan pujian di malam Jumat untuk mencari hadirat Tuhan lebih dalam. Waktu khusus untuk bersekutu, saling mendoakan, dan mengalami kuasa Roh Kudus. Terbuka untuk semua umur yang ingin bertumbuh dalam kehidupan doa dan mengalami pemulihan rohani. Suasana intim dan penuh dengan kehadiran Tuhan.",
    targetAnchor: "#detail-powerhouse",
    internalPath: "/powerhouse",
  },
  {
    id: "morning-prayer-service",
    category: "prayer",
    categoryLabel: "Saat Teduh Online",
    title: "Pagi Bersama Tuhan",
    day: "Senin - Jumat",
    time: "05.30 WIB (Buka 05.25 WIB)",
    location: "Zoom Cloud Meetings",
    room: "Meeting ID: 849 1474 1479",
    audience: "Jemaat & Umum di Manapun Berada",
    description:
      "Saat teduh pagi setiap hari Senin s/d Jumat untuk memulai hari dengan renungan firman Tuhan dan doa bersama secara online melalui Zoom. Link dapat dibuka mulai pukul 05.25 WIB.",
    targetAnchor: "#pagi-bersama-tuhan",
    isOnline: true,
  },
];

function MinistryViewMoreLink({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="geis-button-hover mt-5 inline-flex min-h-[44px] h-[52px] w-full items-center justify-between rounded-[8px] bg-[#d41c24] px-6 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.12em] text-white no-underline transition-all duration-200 hover:bg-[#b51b2a] sm:w-[220px]"
    >
      <span>Lihat Selengkapnya</span>
      <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
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
      className={`geis-pop-card group relative block min-h-[360px] overflow-hidden rounded-[14px] border border-white/10 bg-[#111418] text-white no-underline shadow-[0_22px_48px_rgba(0,0,0,0.32)] transition-all duration-300 hover:border-[#d41c24]/50 ${featured ? "md:col-span-2 md:min-h-[440px]" : "md:min-h-[440px]"
        }`}
    >
      <img
        src={post.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-contain opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90 md:object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
      <div className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition duration-300 group-hover:bg-[#d41c24] group-hover:border-[#d41c24]">
        <ExternalLink className="size-5" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.24em] text-[#f3b7bd]">
          {post.label}
        </p>
        <h3 className="mt-2 max-w-[560px] break-words font-['Montserrat',sans-serif] text-[26px] font-black leading-[1.1] text-white md:text-[38px] md:leading-[1]">
          {post.title}
        </h3>
        <p className="mt-3 max-w-[520px] font-['Lato',sans-serif] text-[14px] leading-[1.65] text-white/80 md:text-[16px]">
          {post.body}
        </p>
      </div>
    </a>
  );
}

/* 01. HERO SECTION: JADWAL IBADAH GEIS CCC */
function ScheduleHero({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: ScheduleCategory;
  onSelectCategory: (cat: ScheduleCategory) => void;
}) {
  const categoryFilters: { key: ScheduleCategory; label: string }[] = [
    { key: "all", label: "Semua Ibadah" },
    { key: "sunday", label: "Ibadah Minggu (09.00)" },
    { key: "kids", label: "CKIDS (09.00)" },
    { key: "youth", label: "Youth Service (11.00)" },
    { key: "prayer", label: "Doa & Hadirat" },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#3b080e_0%,#5a1017_40%,#15181c_100%)] pb-16 pt-24 text-white md:pb-24 md:pt-32">
      {/* Decorative background layers */}
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-20 mix-blend-soft-light"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,28,36,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(181,27,42,0.2),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 md:px-10">
        {/* Brand Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f3b7bd]/30 bg-white/10 px-3.5 py-1.5 font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3b7bd]">
            <span className="size-2 rounded-full bg-[#ff3b47] animate-pulse" />
            {SITE_INFO.shortName} • {SITE_INFO.fullName}
          </span>
          <span className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 font-['Lato',sans-serif] text-[12px] text-white/80">
            A Home For Generation
          </span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-['Montserrat',sans-serif] text-[38px] font-black leading-[1.02] tracking-tight text-white sm:text-[54px] md:text-[68px] lg:text-[76px]">
            Jadwal Ibadah GEIS CCC
          </h1>
          <p className="mt-4 max-w-2xl font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#f4eeee] md:text-[20px]">
            Jadwal Pertemuan & Persekutuan Komunitas. Bertumbuh dalam firman,
            penyembahan, dan komunitas yang hangat bersama GEIS CCC.
          </p>
        </div>

        {/* Highlight Stats Row: Fills emptiness with dense, valuable context */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          <div className="rounded-[10px] border border-white/12 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-[#ff7b85]">
              <Calendar className="size-4" aria-hidden="true" />
              <span className="font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.12em]">
                Frekuensi
              </span>
            </div>
            <p className="mt-2 font-['Montserrat',sans-serif] text-[20px] font-black text-white md:text-[24px]">
              5 Ibadah
            </p>
            <p className="mt-0.5 font-['Lato',sans-serif] text-[12px] text-white/70">
              Pertemuan rutin mingguan
            </p>
          </div>

          <div className="rounded-[10px] border border-white/12 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-[#ff7b85]">
              <MapPin className="size-4" aria-hidden="true" />
              <span className="font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.12em]">
                Lokasi Fisik
              </span>
            </div>
            <p className="mt-2 font-['Montserrat',sans-serif] text-[20px] font-black text-white md:text-[24px]">
              Manahan Solo
            </p>
            <p className="mt-0.5 truncate font-['Lato',sans-serif] text-[12px] text-white/70">
              {SITE_INFO.location.street}
            </p>
          </div>

          <div className="rounded-[10px] border border-white/12 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-[#ff7b85]">
              <Video className="size-4" aria-hidden="true" />
              <span className="font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.12em]">
                Akses Online
              </span>
            </div>
            <p className="mt-2 font-['Montserrat',sans-serif] text-[20px] font-black text-white md:text-[24px]">
              Zoom Cloud
            </p>
            <p className="mt-0.5 font-['Lato',sans-serif] text-[12px] text-white/70">
              Pagi Bersama Tuhan
            </p>
          </div>

          <div className="rounded-[10px] border border-white/12 bg-black/40 p-4">
            <div className="flex items-center gap-2 text-[#ff7b85]">
              <Users className="size-4" aria-hidden="true" />
              <span className="font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.12em]">
                Generasi
              </span>
            </div>
            <p className="mt-2 font-['Montserrat',sans-serif] text-[20px] font-black text-white md:text-[24px]">
              Semua Usia
            </p>
            <p className="mt-0.5 font-['Lato',sans-serif] text-[12px] text-white/70">
              Anak-anak hingga Lansia
            </p>
          </div>
        </div>

        {/* Category Pills Navigation Filter */}
        <div className="mt-8">
          <p className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-white/60">
            Filter Kategori Ibadah:
          </p>
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter kategori jadwal ibadah"
          >
            {categoryFilters.map((tab) => {
              const isSelected = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(tab.key)}
                  className={`min-h-[44px] rounded-full px-5 py-2 font-['Montserrat',sans-serif] text-[12px] font-bold transition-all duration-200 active:scale-95 ${isSelected
                    ? "bg-[#d41c24] text-white shadow-[0_4px_16px_rgba(212,28,36,0.4)] ring-2 ring-white/20"
                    : "bg-white/10 text-white/85 hover:bg-white/20 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 02. MASTER WEEKLY SCHEDULE MATRIX / TIMELINE */
function MasterScheduleMatrix({
  activeCategory,
}: {
  activeCategory: ScheduleCategory;
}) {
  const filteredItems = MASTER_SCHEDULE.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section className="relative bg-[#15181c] px-5 py-14 text-white md:px-10 md:py-20 border-b border-white/10">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Title */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#ff7b85]">
              Overview Mingguan
            </span>
            <h2 className="mt-2 font-['Montserrat',sans-serif] text-[30px] font-black leading-[1.1] text-white md:text-[44px]">
              Master Jadwal & Ruang Pertemuan
            </h2>
          </div>
          <p className="max-w-md font-['Lato',sans-serif] text-[14px] leading-[1.65] text-white/70">
            Temukan waktu dan ruangan yang tepat untuk Anda dan keluarga.
            Pilih ibadah untuk melihat detail panduan kehadiran.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isZoom = item.isOnline;

            return (
              <article
                key={item.id}
                className="geis-pop-card group relative flex flex-col justify-between rounded-[14px] border border-white/12 bg-[#1b1f26] p-6 shadow-[0_16px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#d41c24]/60 hover:bg-[#20252e]"
              >
                {/* Top Badge: Category & Status */}
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <span className="rounded-[6px] bg-[#d41c24]/20 px-2.5 py-1 font-['Montserrat',sans-serif] text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#ff8c95]">
                      {item.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1.5 font-['Lato',sans-serif] text-[12px] font-bold text-white/75">
                      <Clock className="size-3.5 text-[#ff7b85]" aria-hidden="true" />
                      {item.day}
                    </span>
                  </div>

                  {/* Main Time & Title */}
                  <div className="mt-5">
                    <p className="font-['Montserrat',sans-serif] text-[26px] font-black text-[#ff4d58] md:text-[28px]">
                      {item.time}
                    </p>
                    <h3 className="mt-1 font-['Montserrat',sans-serif] text-[22px] font-black text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Location & Room */}
                  <div className="mt-4 space-y-1.5 rounded-[8px] bg-black/35 p-3.5 text-[13px]">
                    <div className="flex items-start gap-2 text-white/90">
                      {isZoom ? (
                        <Video className="size-4 shrink-0 text-[#ff7b85] mt-0.5" aria-hidden="true" />
                      ) : (
                        <MapPin className="size-4 shrink-0 text-[#ff7b85] mt-0.5" aria-hidden="true" />
                      )}
                      <div>
                        <p className="font-bold text-white">{item.room}</p>
                        <p className="text-[12px] text-white/60">{item.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1 text-[12px] text-white/70 border-t border-white/8">
                      <Users className="size-3.5 shrink-0 text-white/50" aria-hidden="true" />
                      <span>{item.audience}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-3 font-['Lato',sans-serif] text-[13px] leading-[1.65] text-white/75">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={item.targetAnchor}
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] bg-white/10 px-4 py-2 font-['Montserrat',sans-serif] text-[12px] font-bold text-white no-underline transition hover:bg-[#d41c24]"
                    >
                      <span>Lihat Detail</span>
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </a>

                    {item.internalPath ? (
                      <Link
                        to={item.internalPath}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-white/15 px-3 py-2 font-['Montserrat',sans-serif] text-[11px] font-bold uppercase tracking-[0.08em] text-white/80 no-underline transition hover:border-[#ff4d58] hover:text-white"
                      >
                        <span>Halaman</span>
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </Link>
                    ) : isZoom ? (
                      <a
                        href={item.targetAnchor}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[#ff4d58]/40 bg-[#ff4d58]/15 px-3 py-2 font-['Montserrat',sans-serif] text-[11px] font-bold text-[#ff8c95] no-underline transition hover:bg-[#ff4d58] hover:text-white"
                      >
                        <Video className="size-3.5" aria-hidden="true" />
                        <span>Akses Zoom</span>
                      </a>
                    ) : (
                      <a
                        href={SITE_INFO.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-white/15 px-3 py-2 font-['Montserrat',sans-serif] text-[11px] font-bold text-white/80 no-underline transition hover:border-[#d41c24] hover:text-white"
                      >
                        <MapPin className="size-3.5" aria-hidden="true" />
                        <span>Maps</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 03. DETAIL SECTION 1: SUNDAY SERVICE */
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
    <div className="group relative aspect-[4/5] w-full max-w-[540px] overflow-hidden rounded-[12px] bg-[#3a1116] shadow-[0_24px_54px_rgba(0,0,0,0.35)] md:aspect-square">
      <img
        key={activePhoto.src}
        className="absolute inset-0 size-full object-cover opacity-[0.84] transition-all duration-700 group-hover:scale-105"
        src={activePhoto.src}
        alt={activePhoto.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-7 left-7 right-7 border-t border-white/35 pt-4">
        <p className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.16em] text-white">
          GEIS CCC / Sunday Gathering
        </p>
        <p className="mt-1 font-['Montserrat',sans-serif] text-[15px] font-bold text-white/90">
          {activePhoto.label}
        </p>
      </div>

      <button
        type="button"
        aria-label="Foto Sunday Service sebelumnya"
        className="absolute left-4 top-1/2 grid min-h-[44px] min-w-[44px] size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-300 hover:-translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={showPreviousPhoto}
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Foto Sunday Service berikutnya"
        className="absolute right-4 top-1/2 grid min-h-[44px] min-w-[44px] size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-300 hover:translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={showNextPhoto}
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-4 right-5 flex gap-1.5">
        {sundayServicePhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Lihat foto Sunday Service ${index + 1}`}
            className={`min-h-[24px] min-w-[24px] flex items-center justify-center`}
            onClick={() => setActiveIndex(index)}
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/40"
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function TimePlaceSection() {
  const scheduleData = SCHEDULE_ITEMS[0];

  return (
    <section
      id="detail-sunday"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#8f1620_0%,#a41724_28%,#b51b2a_100%)] px-6 py-16 text-white md:px-14 md:py-24 scroll-mt-24 md:scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_22%_10%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_72%,rgba(0,0,0,0.2),transparent_36%)]"
      />
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-18 mix-blend-soft-light"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Label Badge */}
        <div className="inline-flex bg-white px-4 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <p className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.14em] text-[#d41c24]">
            Waktu dan Tempat
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[540px_1fr] lg:items-center">
          <SundayServicePhotoCarousel />

          <div className="pt-2 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-1 text-[12px] font-bold text-white/90">
              <CalendarDays className="size-4 text-[#f3b7bd]" aria-hidden="true" />
              <span>Ibadah Raya Mingguan</span>
            </div>

            <h2 className="mt-4 font-['Montserrat',sans-serif] text-[38px] font-black leading-[1.02] md:text-[58px]">
              Sunday Service
            </h2>
            <p className="mt-4 font-['Lato',sans-serif] text-[22px] font-bold text-[#f4eeee] md:text-[26px]">
              Minggu, 09.00 WIB
            </p>
            <p className="mt-4 font-['Lato',sans-serif] text-[16px] leading-[1.75] text-white/90 md:text-[18px]">
              Ibadah umum untuk bertumbuh dalam firman, penyembahan, dan
              komunitas yang hangat bersama GEIS CCC.
            </p>

            {/* Official comprehensive description from schedules.ts */}
            <p className="mt-4 font-['Lato',sans-serif] text-[15px] leading-[1.75] text-white/80">
              {scheduleData?.description}
            </p>

            {/* Quick Practical Info Card */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 rounded-[10px] border border-white/20 bg-black/40 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-[#f3b7bd] mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-['Montserrat',sans-serif] text-[13px] font-bold text-white uppercase tracking-wider">
                    Lokasi Ibadah
                  </p>
                  <p className="mt-1 font-['Lato',sans-serif] text-[13px] text-white/80">
                    Gedung GEIS CCC Lt. 1<br />
                    {SITE_INFO.location.street}, {SITE_INFO.location.area}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="size-5 shrink-0 text-[#f3b7bd] mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-['Montserrat',sans-serif] text-[13px] font-bold text-white uppercase tracking-wider">
                    Penyambutan
                  </p>
                  <p className="mt-1 font-['Lato',sans-serif] text-[13px] text-white/80">
                    Tim Welcoming & Usher siap menyambut kehadiran Anda.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SITE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="geis-button-hover inline-flex min-h-[44px] h-[52px] items-center gap-2.5 rounded-[8px] bg-white px-6 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.1em] text-[#b51b2a] no-underline shadow-lg transition-colors hover:bg-[#f8f6f0]"
              >
                <MapPin className="size-4" aria-hidden="true" />
                <span>Petunjuk Google Maps</span>
                <ExternalLink className="size-4 opacity-70" aria-hidden="true" />
              </a>

              <a
                href={SITE_INFO.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] h-[52px] items-center gap-2.5 rounded-[8px] border border-white/30 bg-black/20 px-6 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.1em] text-white no-underline transition-all hover:bg-white/10"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Tanya Admin WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 04. DETAIL SECTION 2: CKIDS */
function CkidsLogo() {
  return (
    <div className="relative mx-auto flex h-[140px] items-center justify-center overflow-hidden bg-[#fffdf8] md:h-[180px]">
      <div className="relative text-center">
        <p className="font-['Montserrat',sans-serif] text-[58px] font-black leading-none tracking-[-0.04em] text-[#1b1e21] md:text-[84px]">
          CKIDS
        </p>
        <p className="mt-1 font-['Montserrat',sans-serif] text-[13px] font-extrabold uppercase tracking-[0.24em] text-[#d41c24]">
          Minggu, 09.00 WIB • Kids Church
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
            className={`geis-pop-card group relative min-h-[230px] overflow-hidden rounded-[14px] border border-[#e2ded6] bg-[#15181c] shadow-[0_18px_38px_rgba(0,0,0,0.12)] ${index === 0 ? "md:col-span-3 md:min-h-[340px]" : "md:col-span-3 md:min-h-[250px] lg:col-span-2"
              }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              style={{ objectPosition: photo.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-['Montserrat',sans-serif] text-[16px] font-black uppercase tracking-[0.08em] text-white md:text-[19px]">
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
  const ckidsSchedule = SCHEDULE_ITEMS[1];

  return (
    <div className="bg-white px-6 py-14">
      <div className="mx-auto max-w-[760px]">
        {/* Descriptive intro card */}
        <div className="mb-8 rounded-[12px] border border-[#e2ded6] bg-[#f8f6f0] p-6 text-[#15181c]">
          <p className="font-['Montserrat',sans-serif] text-[13px] font-bold uppercase tracking-[0.16em] text-[#d41c24]">
            Pelayanan Anak GEIS CCC
          </p>
          <p className="mt-3 font-['Lato',sans-serif] text-[15px] leading-[1.75] text-[#46505a] md:text-[16px]">
            {ckidsSchedule?.description}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="border-y border-[#e8e3dc]"
        >
          {ckidsTopics.map((topic) => (
            <AccordionItem key={topic.title} value={topic.title}>
              <AccordionTrigger className="group min-h-[44px] py-5 font-['Montserrat',sans-serif] text-[16px] font-black text-[#15181c] transition-colors hover:text-[#d41c24] hover:no-underline data-[state=open]:text-[#d41c24] [&>svg:last-child]:hidden">
                <span>{topic.title}</span>
                <PlusCircle className="size-5 shrink-0 text-[#15181c] transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:scale-110" />
              </AccordionTrigger>
              <AccordionContent className="font-['Lato',sans-serif] text-[15px] leading-[1.7] text-[#46505a]">
                {topic.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-2">
          <MinistryViewMoreLink to="/ckids" />
        </div>
      </div>
    </div>
  );
}

function CkidsSection() {
  return (
    <section id="detail-ckids" className="bg-white scroll-mt-24 md:scroll-mt-28">
      <CkidsLogo />
      <CkidsGallery />
      <CkidsAccordion />
    </section>
  );
}

/* 05. DETAIL SECTION 3: YOUTH SERVICE */
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
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[8px] border border-white/12 bg-black shadow-[0_24px_52px_rgba(0,0,0,0.4)]">
          <img
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="h-[360px] w-full object-cover opacity-80 transition-all duration-700 md:h-[580px]"
            style={{ objectPosition: activePhoto.objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/35" />

          <p className="absolute left-6 top-6 font-['Montserrat',sans-serif] text-[32px] font-black uppercase leading-none text-white md:left-11 md:top-10 md:text-[68px]">
            OUR
            <br />
            MOMENTS
          </p>

          <button
            type="button"
            aria-label="Foto Youth sebelumnya"
            className="absolute left-4 top-1/2 grid min-h-[44px] min-w-[44px] size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-300 hover:-translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-7 md:size-14"
            onClick={showPreviousPhoto}
          >
            <ChevronLeft className="size-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Foto Youth berikutnya"
            className="absolute right-4 top-1/2 grid min-h-[44px] min-w-[44px] size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-300 hover:translate-x-1 hover:bg-[#d41c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-7 md:size-14"
            onClick={showNextPhoto}
          >
            <ChevronRight className="size-7" aria-hidden="true" />
          </button>

          <div className="absolute bottom-5 left-6 flex gap-2 md:left-11">
            {youthGalleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Lihat foto youth ${index + 1}`}
                className="min-h-[24px] min-w-[24px] flex items-center justify-center"
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-9 bg-white" : "w-3 bg-white/40"
                    }`}
                />
              </button>
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

  const youthSchedule = SCHEDULE_ITEMS[2];

  return (
    <section id="detail-youth" className="relative overflow-hidden bg-[#e7e2db] scroll-mt-24 md:scroll-mt-28">
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

      {/* Cinematic Youth Top Header */}
      <div className="relative overflow-hidden rounded-b-[24px] bg-[#111214] shadow-[0_20px_38px_rgba(0,0,0,0.24)]">
        <img
          src={youthBgPhoto}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover object-[50%_34%] opacity-[0.52] md:opacity-[0.78]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#111214_0%,rgba(17,18,20,0.96)_23%,rgba(17,18,20,0.72)_45%,rgba(17,18,20,0.25)_72%,rgba(17,18,20,0.12)_100%)]" />

        <div className="relative z-10 px-6 py-16 md:px-11 md:py-20 max-w-[1240px] mx-auto">
          <p className="font-['Montserrat',sans-serif] text-[14px] font-black uppercase tracking-[0.22em] text-[#ff4d58]">
            Sunday Gathering
          </p>
          <h2 className="font-['Montserrat',sans-serif] text-[54px] font-black leading-[0.88] text-white md:text-[96px] lg:text-[114px]">
            YOUTH
          </h2>
          <p className="mt-3 font-['Montserrat',sans-serif] text-[16px] font-black uppercase tracking-wider text-[#ff2638] md:text-[20px]">
            Service
          </p>
        </div>
      </div>

      {/* Youth Feature Card */}
      <div className="relative z-10 px-5 py-10 md:px-11 md:py-14">
        <div className="geis-pop-card relative mx-auto max-w-[1240px] overflow-hidden rounded-[16px] border border-white/28 bg-[#111214] px-6 py-8 shadow-[0_28px_70px_rgba(17,18,20,0.24)] md:rounded-[8px] md:px-14 md:py-12">
          <img
            src={youthBgPhoto}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full object-cover object-[50%_36%] opacity-[0.74]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,18,20,0.5),rgba(181,27,42,0.48)_54%,rgba(17,18,20,0.28))]" />

          <div className="relative z-10 grid min-h-[220px] gap-8 py-3 md:grid-cols-[1fr_300px] md:items-end">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[15px] font-black uppercase tracking-[0.14em] text-white/70">
                Youth Gathering
              </p>
              <h3 className="mt-4 max-w-[720px] font-['Montserrat',sans-serif] text-[30px] font-black leading-[1.05] text-white md:text-[50px]">
                Kreatif dan <span className="geis-serif-accent">relevan.</span>
              </h3>
              <p className="mt-4 max-w-[640px] font-['Lato',sans-serif] text-[15px] leading-[1.7] text-white/90 md:text-[16px]">
                {youthSchedule?.description}
              </p>
            </div>

            <div className="rounded-[12px] border border-white/24 bg-black/40 p-5 md:flex md:min-h-[210px] md:flex-col md:justify-center md:border-l-4 md:border-l-white md:bg-transparent md:p-0 md:pl-6">
              <p className="font-['Montserrat',sans-serif] text-[22px] font-black text-white md:text-[28px]">
                Minggu
              </p>
              <p className="mt-2 font-['Montserrat',sans-serif] text-[38px] font-black leading-none text-white md:text-[50px]">
                11.00
              </p>
              <p className="mt-2 font-['Lato',sans-serif] text-[17px] font-bold text-white/85">
                WIB
              </p>
              <MinistryViewMoreLink to="/youth" />
            </div>
          </div>
        </div>
      </div>

      {/* Curved SVG Marquee */}
      <div className="relative z-10 overflow-hidden bg-[#0f1115] py-7">
        <svg
          className="geis-curved-marquee h-[90px] w-[1400px] min-w-full text-white md:h-[110px] md:w-[1800px]"
          viewBox="0 0 1800 118"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <path
              id="youth-marquee-curve-schedule"
              d="M -80 72 C 210 16 430 112 680 60 C 930 8 1130 104 1390 56 C 1570 24 1690 34 1880 70"
            />
          </defs>
          <text
            fill="currentColor"
            className="font-['Montserrat',sans-serif] text-[22px] font-black uppercase tracking-[0.04em]"
          >
            <textPath href="#youth-marquee-curve-schedule" startOffset="0%">
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

/* 06. DETAIL SECTION 4: POWERHOUSE */
function PowerhouseSection() {
  const schedule = SCHEDULE_ITEMS[3];

  return (
    <section
      id="detail-powerhouse"
      className="relative overflow-hidden bg-[#171014] px-6 py-16 text-white md:px-14 md:py-24 scroll-mt-24 md:scroll-mt-28"
    >
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-24 mix-blend-soft-light"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,28,36,0.28),transparent_34%),linear-gradient(135deg,#171014_0%,#241014_50%,#6d1019_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.28em] text-[#f3b7bd]">
            Prayer & Worship
          </p>
          <h2 className="mt-4 font-['Montserrat',sans-serif] text-[44px] font-black uppercase leading-[0.95] md:text-[84px]">
            Power
            <br />
            House
          </h2>
          <p className="mt-4 font-['Lato',sans-serif] text-[16px] text-white/80 leading-[1.65]">
            Pertemuan doa dan pujian untuk mencari hadirat Tuhan lebih dalam bersama komunitas GEIS CCC.
          </p>
          <MinistryViewMoreLink to="/powerhouse" />
        </div>

        <div className="geis-pop-card rounded-[10px] border border-white/15 bg-[#1b1f26] p-7 md:p-10">
          <p className="font-['Montserrat',sans-serif] text-[24px] font-black text-white md:text-[32px]">
            {schedule?.day ?? "Setiap Jumat"}
          </p>
          <p className="mt-2 font-['Montserrat',sans-serif] text-[42px] font-black leading-none text-[#ff2638] md:text-[56px]">
            18.00 WIB
          </p>
          <p className="mt-6 font-['Lato',sans-serif] text-[15px] leading-[1.75] text-white/85 md:text-[17px]">
            {schedule?.description ??
              "Pertemuan doa dan pujian di malam Jumat untuk mencari hadirat Tuhan lebih dalam. Waktu khusus untuk bersekutu, saling mendoakan, dan mengalami kuasa Roh Kudus. Terbuka untuk semua umur yang ingin bertumbuh dalam kehidupan doa dan mengalami pemulihan rohani. Suasana intim dan penuh dengan kehadiran Tuhan."}
          </p>

          <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-2 text-[13px] text-white/70">
            <MapPin className="size-4 text-[#ff2638]" aria-hidden="true" />
            <span>Gedung GEIS CCC, Ruang Doa Lantai 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 07. DETAIL SECTION 5: PAGI BERSAMA TUHAN (ONLINE ZOOM ACCESS) */
function MorningPrayerSection() {
  const [copiedField, setCopiedField] = useState<"id" | "passcode" | "url" | null>(null);

  const zoomUrl =
    "https://us05web.zoom.us/j/84914741479?pwd=Q3c3Um42MlQzV1ZaYkRkTytCTWRLdz09";
  const meetingId = "849 1474 1479";
  const passcode = "geisccc";

  const handleCopy = (text: string, field: "id" | "passcode" | "url") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField((current) => (current === field ? null : current));
    }, 2000);
  };

  return (
    <section
      id="pagi-bersama-tuhan"
      className="relative overflow-hidden bg-[#0c0f13] px-6 py-16 text-white md:px-14 md:py-24 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Background Praying Image */}
      <img
        src={COMMUNITY_PHOTOS.worshipPrayer}
        alt="Jemaat berdoa dalam ibadah GEIS CCC"
        className="pointer-events-none absolute inset-0 size-full object-cover object-[50%_40%] opacity-30 mix-blend-luminosity brightness-75 contrast-125"
      />
      {/* Overlays for readability and contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0f13] via-[#0c0f13]/90 to-[#12161d]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,28,36,0.24),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d41c24]/40 bg-[#d41c24]/15 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-[#ff7b85]">
            <span className="size-2 rounded-full bg-[#ff3b47] animate-pulse" />
            Daily Devotion • Doa Pagi
          </div>

          <h2 className="mt-4 font-['Playfair_Display',serif] text-[40px] font-bold leading-[1.05] text-[#f8f8f6] md:text-[68px]">
            Pagi Bersama Tuhan
          </h2>

          <div className="mt-6 space-y-3 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#d7d9da] md:text-[19px]">
            <p className="text-[20px] font-bold text-white">Selamat Pagi,</p>
            <p>
              Mari bergabung dalam{" "}
              <span className="font-bold text-white">“Pagi Bersama Tuhan”</span>{" "}
              dengan menggunakan link berikut 👇🏼
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={zoomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="geis-button-hover inline-flex min-h-[44px] h-[56px] items-center justify-center gap-3 rounded-[8px] bg-[#d41c24] px-7 font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.1em] text-white no-underline shadow-[0_12px_28px_rgba(212,28,36,0.35)] transition-all hover:bg-[#b51b2a]"
            >
              <Video className="size-5 shrink-0" aria-hidden="true" />
              <span>Gabung Zoom Meeting</span>
              <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="font-['Lato',sans-serif] text-[16px] font-semibold text-white/90">
              Sampai jumpa 🙏
            </p>
          </div>
        </div>

        {/* Right card: Access Credentials & Schedule Details */}
        <div className="geis-pop-card relative overflow-hidden rounded-[14px] border border-white/15 bg-[#1b1f26] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.4)] md:p-8">
          <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-['Montserrat',sans-serif] text-[11px] font-black uppercase tracking-[0.18em] text-[#ff7b85]">
                Akses Online
              </p>
              <p className="font-['Montserrat',sans-serif] text-[20px] font-bold text-white">
                Zoom Cloud Meetings
              </p>
            </div>
            <span className="grid size-10 place-items-center rounded-full bg-[#d41c24]/20 text-[#ff7b85]">
              <Video className="size-5" aria-hidden="true" />
            </span>
          </div>

          {/* Meeting ID */}
          <div className="mt-5 rounded-[8px] border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between">
              <span className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                Meeting ID
              </span>
              <button
                type="button"
                onClick={() => handleCopy(meetingId.replace(/\s+/g, ""), "id")}
                aria-label="Salin Meeting ID"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-[6px] border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-bold text-white transition hover:bg-white/20 active:scale-95"
              >
                {copiedField === "id" ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span className="text-emerald-300">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-1 font-['Montserrat',sans-serif] text-[22px] font-black tracking-wider text-white md:text-[25px]">
              {meetingId}
            </p>
          </div>

          {/* Passcode */}
          <div className="mt-3 rounded-[8px] border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between">
              <span className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                Passcode
              </span>
              <button
                type="button"
                onClick={() => handleCopy(passcode, "passcode")}
                aria-label="Salin Passcode"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-[6px] border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-bold text-white transition hover:bg-white/20 active:scale-95"
              >
                {copiedField === "passcode" ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span className="text-emerald-300">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-1 font-['Montserrat',sans-serif] text-[20px] font-black tracking-widest text-[#ff8c95] md:text-[22px]">
              {passcode}
            </p>
          </div>

          {/* Timing & Day Note */}
          <div className="mt-4 space-y-2 rounded-[8px] border border-[#d41c24]/30 bg-[#d41c24]/10 p-4 text-[13px] md:text-[14px]">
            <div className="flex items-center gap-2.5 text-[#ffb4b9]">
              <Clock className="size-4 shrink-0 text-[#ff7b85]" />
              <span className="font-bold italic">Link dapat dibuka mulai pukul 05.25 WIB</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#f3d2d5]">
              <Calendar className="size-4 shrink-0 text-[#ff7b85]" />
              <span className="font-semibold italic">Setiap hari Senin s/d Jumat</span>
            </div>
          </div>

          {/* Direct Link box */}
          <div className="mt-4 flex items-center justify-between gap-2 rounded-[6px] border border-white/10 bg-black/50 px-3 py-2 text-[12px] text-white/70">
            <span className="truncate font-mono text-[11px] text-white/80">
              {zoomUrl}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(zoomUrl, "url")}
              aria-label="Salin Link Zoom Lengkap"
              title="Salin Link Lengkap"
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[6px] text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {copiedField === "url" ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 08. FIRST-TIMER VISITOR GUIDE (PANDUAN KEHADIRAN PERTAMA KALI) */
function FirstTimerGuideSection() {
  const visitorTips = [
    {
      icon: <Compass className="size-6 text-[#d41c24]" />,
      title: "Lokasi Strategis di Solo",
      body: "Gedung GEIS CCC terletak di Jl. RM Said No. 233, Manahan, Solo. Berada di lokasi strategis dekat Stadion Manahan, mudah dijangkau dengan kendaraan pribadi maupun transportasi online.",
    },
    {
      icon: <Heart className="size-6 text-[#d41c24]" />,
      title: "Penyambutan Hangat",
      body: "Tim Welcoming dan Usher kami siap menyambut Anda sejak pertama kali tiba di lobi gereja, siap membantu Anda menemukan tempat duduk yang nyaman dan informasi seputar ibadah.",
    },
    {
      icon: <Car className="size-6 text-[#d41c24]" />,
      title: "Area Parkir Aman & Terkelola",
      body: "Tersedia fasilitas parkir yang tertata dan aman untuk kendaraan roda dua maupun roda empat dengan pendampingan petugas keamanan parkir gereja.",
    },
    {
      icon: <ShieldCheck className="size-6 text-[#d41c24]" />,
      title: "Pelayanan Anak (CKIDS)",
      body: "Jika Anda membawa buah hati, pelayanan CKIDS berlangsung berbarengan dengan Sunday Service pada pukul 09.00 WIB di ruang kelas yang aman, ber-AC, dan menyenangkan.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f6f0] px-5 py-16 text-[#15181c] md:px-10 md:py-24 border-b border-[#e2ded6]">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.24em] text-[#d41c24]">
            First-Timer Guide
          </p>
          <h2 className="mt-3 font-['Playfair_Display',serif] text-[34px] font-bold text-[#15181c] md:text-[50px]">
            Panduan Hadir Pertama Kali
          </h2>
          <p className="mt-3 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#46505a]">
            Kami menyambut setiap jemaat baru dengan tangan terbuka. Berikut
            beberapa informasi praktis untuk kenyamanan ibadah Anda di GEIS CCC.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visitorTips.map((tip) => (
            <div
              key={tip.title}
              className="geis-pop-card flex flex-col justify-between rounded-[12px] border border-[#e2ded6] bg-[#fffdf8] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-[8px] bg-[#d41c24]/10">
                  {tip.icon}
                </span>
                <h3 className="mt-5 font-['Montserrat',sans-serif] text-[18px] font-bold text-[#15181c]">
                  {tip.title}
                </h3>
                <p className="mt-3 font-['Lato',sans-serif] text-[14px] leading-[1.65] text-[#46505a]">
                  {tip.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-12 rounded-[14px] border border-[#d41c24]/20 bg-[linear-gradient(135deg,#3b080e_0%,#5a1017_100%)] p-6 text-white md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <p className="font-['Montserrat',sans-serif] text-[20px] font-bold md:text-[24px]">
              Ada Pertanyaan atau Butuh Bantuan?
            </p>
            <p className="mt-1 font-['Lato',sans-serif] text-[14px] text-white/80 md:text-[15px]">
              Tim admin GEIS CCC siap melayani Anda melalui WhatsApp atau petunjuk rute.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SITE_INFO.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="geis-button-hover inline-flex min-h-[44px] h-[48px] items-center gap-2 rounded-[8px] bg-[#d41c24] px-5 font-['Montserrat',sans-serif] text-[12px] font-black uppercase text-white no-underline shadow-md transition hover:bg-[#b51b2a]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span>Hubungi Admin</span>
            </a>
            <a
              href={SITE_INFO.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] h-[48px] items-center gap-2 rounded-[8px] border border-white/20 bg-white/10 px-5 font-['Montserrat',sans-serif] text-[12px] font-bold uppercase text-white no-underline transition hover:bg-white/20"
            >
              <MapPin className="size-4" aria-hidden="true" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 09. SECTION KOMUNITAS / RECENT POST INSTAGRAM */
function InstagramRecentFeed() {
  return (
    <div className="relative z-10 mx-auto mt-8 w-full max-w-[1240px] px-5 md:mt-12 md:px-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPostCards.map((post, index) => (
          <RecentPostCard
            key={post.href}
            post={post}
            featured={index === 0}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={SITE_INFO.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="geis-button-hover geis-hover-black mx-auto inline-flex min-h-[44px] h-[52px] w-full max-w-[320px] items-center justify-center rounded-[8px] bg-[#d41c24] px-6 text-center font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.08em] text-white no-underline transition hover:bg-[#b51b2a] md:w-fit md:max-w-none md:px-8"
        >
          <span>OPEN INSTAGRAM @GEISCCC</span>
        </a>
      </div>
    </div>
  );
}

function CommunityRecentSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#15181c_0%,#111418_60%,#0d0f12_100%)] pb-20 pt-16 md:pb-28 md:pt-24 text-white">
      <img
        src={redGrain}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-20 mix-blend-soft-light"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(181,27,42,0.18),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center md:px-10">
        <p className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.24em] text-[#f3b7bd]">
          Potongan Momen & Keseruan Komunitas GEIS CCC
        </p>
        <h2 className="mt-3 font-['Montserrat',sans-serif] text-[32px] font-black leading-[1.05] text-white md:text-[56px] lg:text-[64px]">
          OUR RECENT POST!
        </h2>
      </div>

      <InstagramRecentFeed />
    </section>
  );
}

/* MAIN SCHEDULE PAGE EXPORT */
export default function SchedulePage() {
  const [activeCategory, setActiveCategory] = useState<ScheduleCategory>("all");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111418]">
      {/* 01. Hero Jadwal Ibadah GEIS CCC */}
      <ScheduleHero
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 02. Master Weekly Schedule Matrix */}
      <MasterScheduleMatrix activeCategory={activeCategory} />

      {/* 03. Detail Ibadah 1: Sunday Service */}
      <TimePlaceSection />

      {/* 04. Detail Ibadah 2: CKIDS */}
      <CkidsSection />

      {/* 05. Detail Ibadah 3: Youth Service */}
      <YouthSection />

      {/* 06. Detail Ibadah 4: Powerhouse */}
      <PowerhouseSection />

      {/* 07. Detail Ibadah 5: Pagi Bersama Tuhan (Zoom Online) */}
      <MorningPrayerSection />

      {/* 08. Panduan Hadir Pertama Kali */}
      <FirstTimerGuideSection />

      {/* 09. Komunitas & Recent Post Instagram */}
      <CommunityRecentSection />
    </main>
  );
}
