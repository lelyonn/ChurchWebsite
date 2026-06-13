import { CalendarDays, ExternalLink, MapPin, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import pixelCross from "../../assets/decor/pixel-cross.jpg";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import alphaLogo from "../../assets/images/alpha-logo.png";
import gcLogo from "../../assets/images/gc-logo.png";
import pastorsPhoto from "../../assets/images/pastors-photo.jpeg";
import youthMainPhoto from "../../assets/images/carousel/youth-main.jpg";
import heroBackgroundVideo from "../../assets/videos/homepage-hero-background.mp4";
import SiteFooter from "../components/SiteFooter";
import { MINISTRY_ROUTE_LINKS, SITE_INFO } from "../config/site";
import { CKIDS_PHOTOS, COMMUNITY_PHOTOS, WORSHIP_PHOTOS } from "../data/communityPhotos";
import { PROGRAM_DETAIL_PAGES } from "../data/programs";
import { SCHEDULE_ITEMS } from "../data/schedules";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.28em] text-[#d41c24]">
      {children}
    </p>
  );
}

function MobileSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

function MobileInstagramIcon() {
  return (
    <svg className="size-9" fill="none" viewBox="0 0 44 44">
      <rect height="27" rx="6.5" stroke="currentColor" strokeWidth="3" width="27" x="8.5" y="8.5" />
      <circle cx="22" cy="22" r="3.5" stroke="currentColor" strokeWidth="3" />
      <circle cx="30" cy="14" fill="currentColor" r="2" />
    </svg>
  );
}

function MobileSocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative grid size-12 place-items-center text-white no-underline"
    >
      <span className="transition-all duration-200 group-hover:scale-125 group-hover:text-[#d41c24]">
        {children}
      </span>
      <span className="absolute -top-12 left-[50%] z-20 hidden origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 font-['Lato',sans-serif] text-sm font-bold text-[#15181c] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 md:block">
        {label}
      </span>
    </a>
  );
}

const PROGRAM_PREVIEW_IMAGES: Record<string, string> = {
  "/alpha": alphaLogo,
  "/SJ": WORSHIP_PHOTOS[1].src,
  "/homecell": COMMUNITY_PHOTOS.loveCommunity,
};

const MINISTRY_PREVIEW_CONTENT: Record<
  string,
  {
    tagline: string;
    image: string;
  }
> = {
  "/youth": {
    tagline: "Ruang anak muda untuk bertumbuh, terhubung, dan berjalan bersama Tuhan.",
    image: COMMUNITY_PHOTOS.youthService,
  },
  "/ckids": {
    tagline: "Ruang yang aman, kreatif, dan penuh sukacita untuk anak-anak mengenal Tuhan.",
    image: CKIDS_PHOTOS[0].src,
  },
  "/powerhouse": {
    tagline: "Ruang doa, pujian, dan pencarian hadirat Tuhan bersama komunitas.",
    image: WORSHIP_PHOTOS[4].src,
  },
};

function MobileContactPreview({
  href,
  title,
  body,
  icon,
}: {
  href: string;
  title: string;
  body: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.06] p-4 text-white no-underline"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-[#d41c24]/24 text-[#f3b7bd] transition-colors group-hover:bg-[#d41c24] group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-['Montserrat',sans-serif] text-[16px] font-bold leading-[1.2]">
          {title}
        </span>
        <span className="mt-1 block font-['Lato',sans-serif] text-[13px] leading-[1.45] text-[#d7d9da]">
          {body}
        </span>
      </span>
      <ExternalLink className="size-4 shrink-0 text-white/55 transition-colors group-hover:text-white" aria-hidden="true" />
    </a>
  );
}

export default function MobileHomePage() {
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
    <div className="bg-[#f8f6f0] text-[#15181c]">
      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden bg-[#1b1e21] px-6 pb-10 pt-24 text-white"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src={heroBackgroundVideo}
          autoPlay
          loop
          muted={!soundEnabled}
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/34" />
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-black/78 to-transparent" />

        <div className="relative z-10 flex min-h-[650px] flex-col justify-between">
          <div className="text-center">
            <img
              src={gcLogo}
              alt="Geis CCC"
              className="mx-auto mb-2 h-16 w-16 object-contain"
            />
            <p className="font-['Montserrat',sans-serif] text-[18px] font-bold tracking-[0.12em]">
              GEIS CCC
            </p>
            <p className="mt-1 font-['Lato',sans-serif] text-[9px] font-bold tracking-[0.2em] opacity-90">
              CHRISTIAN CREATIVE CHURCH
            </p>
          </div>

          <div>
            <p className="mb-4 font-['Roboto_Mono',monospace] text-[17px] tracking-[0.12em]">
              welcome to
            </p>
            <h1 className="font-['Montserrat',sans-serif] text-[52px] font-black leading-[0.95] tracking-[0]">
              <span className="flex items-end gap-3">
                <span>GEIS</span>
                <span className="mb-1 max-w-[130px] font-['Lato',sans-serif] text-[8px] font-black uppercase leading-[1.25] tracking-[0.18em] text-white/72">
                  {SITE_INFO.fullName}
                </span>
              </span>
              <span className="block">CHRISTIAN</span>
              <span className="block">CREATIVE</span>
              <span className="block">CHURCH</span>
            </h1>
            <p className="mt-7 max-w-[320px] font-['Roboto_Mono',monospace] text-[18px] leading-[1.6]">
              a warm church community in Solo where people grow in faith.
            </p>
            <a
              href="#services"
              className="geis-button-hover mt-7 flex min-h-[76px] w-full max-w-full items-center justify-between rounded-[6px] bg-[#b51b2a] px-5 no-underline"
            >
              <p className="font-['Montserrat',sans-serif] text-[20px] font-bold leading-[1.25] text-white">
                Join Us Every Sunday
              </p>
              <span className="font-['Montserrat',sans-serif] text-[34px] font-bold text-white">
                -&gt;
              </span>
            </a>
            <div className="mt-8 flex items-center gap-6">
              <MobileSocialLink href={SITE_INFO.social.instagramUrl} label="Instagram">
                <MobileInstagramIcon />
              </MobileSocialLink>
              <MobileSocialLink href={SITE_INFO.location.mapsUrl} label="Maps">
                <MapPin className="size-9" strokeWidth={2.2} aria-hidden="true" />
              </MobileSocialLink>
              <MobileSocialLink href={SITE_INFO.social.whatsappUrl} label="WhatsApp">
                <MessageCircle className="size-9" strokeWidth={2.2} aria-hidden="true" />
              </MobileSocialLink>
              <button
                type="button"
                aria-label={soundEnabled ? "Matikan suara video" : "Nyalakan suara video"}
                className="group relative grid size-12 place-items-center border-0 bg-transparent p-0 text-white"
                onClick={toggleVideoSound}
              >
                <span className="transition-all duration-200 group-hover:scale-125 group-hover:text-[#d41c24]">
                  {soundEnabled ? (
                    <Volume2 className="size-9" strokeWidth={2.2} aria-hidden="true" />
                  ) : (
                    <VolumeX className="size-9" strokeWidth={2.2} aria-hidden="true" />
                  )}
                </span>
                <span className="absolute -top-12 left-[50%] z-20 hidden origin-left -translate-x-[50%] scale-0 whitespace-nowrap rounded-lg border border-gray-300 bg-white px-3 py-2 font-['Lato',sans-serif] text-sm font-bold text-[#15181c] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 md:block">
                  {soundEnabled ? "Sound On" : "Sound Off"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <MobileSection id="about">
        <img
          src={redFluidShape}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-5 h-56 w-56 rotate-12 rounded-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <SectionLabel>Tentang GEIS CCC</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.05]">
          A Home For Generation.
        </h2>
        <p className="mt-6 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#46505a]">
          GEIS CCC adalah bagian dari Gereja El-Shaddai Injil Sepenuh yang
          berlokasi di Manahan, Solo. Kami hadir untuk menjadi Gereja yang
          kreatif, relevan, dan berdampak bagi generasi saat ini.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4">
          <div className="geis-pop-card rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
            <p className="font-['Montserrat',sans-serif] text-[22px] font-bold">
              Visi
            </p>
            <p className="mt-3 font-['Lato',sans-serif] text-[16px] leading-[1.65] text-[#46505a]">
              Menjadi Gereja yang kreatif dan relevan bagi generasi.
            </p>
          </div>
          <div className="geis-pop-card rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
            <p className="font-['Montserrat',sans-serif] text-[22px] font-bold">
              Misi
            </p>
            <p className="mt-3 font-['Lato',sans-serif] text-[16px] leading-[1.65] text-[#46505a]">
              Memaksimalkan potensi jemaat untuk melaksanakan Amanat Agung.
            </p>
          </div>
        </div>
        <Link
          to="/about"
          className="geis-button-hover mt-8 flex h-[58px] items-center justify-between rounded-[8px] bg-[#b51b2a] px-6 font-['Lato',sans-serif] text-[16px] font-bold text-white no-underline"
        >
          More Information
          <span>-&gt;</span>
        </Link>
      </MobileSection>

      <MobileSection className="bg-[#151313] text-white">
        <h2 className="font-['Montserrat',sans-serif] text-[52px] font-black uppercase leading-[0.95] tracking-[0] text-[#f8f8f6]">
          Our Pastors
        </h2>
        <p className="mt-4 font-['Playfair_Display',serif] text-[30px] font-bold italic leading-[1.1] text-[#f3b7bd]">
          Ps. Denso
          <br />
          & Ps. Glory
        </p>
        <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10 bg-black">
          <img
            src={pastorsPhoto}
            alt="Ps. Denso dan Ps. Glory"
            className="h-[420px] w-full object-cover object-[50%_72%] grayscale"
          />
        </div>
        <div className="mt-8 border-l-2 border-[#d41c24] pl-5">
          <p className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.18em] text-[#f3b7bd]">
            Zakharia 4:6
          </p>
          <p className="mt-4 font-['Playfair_Display',serif] text-[25px] font-bold italic leading-[1.35] text-[#f8f8f6]">
            "Bukan dengan keperkasaan dan bukan dengan kekuatan, melainkan
            dengan Roh-Ku, firman TUHAN semesta alam."
          </p>
        </div>
        <div className="mt-8 space-y-5 text-justify font-['Lato',sans-serif] text-[16px] leading-[1.75] text-[#d7d9da]">
          <p>Jika hari ini kita berdiri dan merayakan perjalanan ini, bukan karena kekuatan atau kehebatan manusia, melainkan karena tangan Tuhan yang setia menopang.</p>
          <p>Di tengah suka dan duka, kelimpahan dan keterbatasan, Dia tetap hadir memimpin Gereja-Nya dengan kasih yang tidak pernah berubah.</p>
          <p>Karena itu, mari GEIS CCC, teruslah menambatkan hati kepada Kristus, Sang Kepala Gereja dan sumber kehidupan kita.</p>
          <p>Tetaplah setia mengikut Dia, sekalipun jalan yang ditempuh tidak selalu mudah.</p>
          <p>Marilah kita berjalan seiring, sehati, dan sepikir dalam menggenapi visi yang Tuhan percayakan kepada Gereja ini.</p>
          <p>Bertumbuhlah dalam pengenalan yang benar akan Tuhan, sehingga iman kita berakar kuat dan menghasilkan buah bagi kemuliaan nama-Nya.</p>
          <p>Kerinduan saya agar Gereja ini tidak hanya menjadi rumah untuk berkumpul, tetapi juga menjadi terang yang membawa banyak jiwa kepada Kristus.</p>
          <p>Dan ketika tahun-tahun berikutnya terbentang di hadapan kita, biarlah setiap langkah tetap menjadi kesaksian tentang kebesaran Tuhan yang menyertai Gereja-Nya dari generasi ke generasi.</p>
        </div>
      </MobileSection>

      <MobileSection id="services" className="bg-[#1b1e21] text-white">
        <SectionLabel>Jadwal Ibadah</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[42px] font-bold leading-[1.08] text-[#f8f8f6]">
          Bertemu setiap minggu
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#d7d9da]">
          Pilih waktu yang paling sesuai. Semua orang diterima dengan hangat.
        </p>
        <div className="mt-8 space-y-4">
          {SCHEDULE_ITEMS.map((item) => (
            <Link
              key={item.title}
              to="/schedule"
              className="geis-pop-card flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 no-underline"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-[#d41c24]/15 text-[#f3b7bd]">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-['Montserrat',sans-serif] text-[18px] font-bold leading-[1.25] text-[#f8f8f6]">
                  {item.title}
                </span>
                <span className="mt-1 block font-['Lato',sans-serif] text-[14px] text-[#d7d9da]">
                  {item.day} - {item.time}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          to="/schedule"
          className="geis-button-hover mt-7 flex h-[58px] items-center justify-between rounded-[8px] bg-[#b51b2a] px-6 font-['Lato',sans-serif] text-[16px] font-bold text-white no-underline"
        >
          More Information
          <span>-&gt;</span>
        </Link>
      </MobileSection>

      <MobileSection id="programs">
        <img
          src={pixelCross}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-7 top-10 h-12 w-12 rounded-[6px] object-cover opacity-20 mix-blend-multiply"
        />
        <SectionLabel>Program & Journey</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.05]">
          Programs
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#46505a]">
          Ruang pertumbuhan rohani untuk mengenal Tuhan, bertumbuh, dan
          menemukan tujuan.
        </p>
        <div className="mt-8 space-y-5">
          {PROGRAM_DETAIL_PAGES.map((program) => {
            const isAlphaProgram = program.path === "/alpha";

            return (
              <Link
                key={program.path}
                to={program.path}
                className="geis-pop-card block overflow-hidden rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] no-underline shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <div className={`relative h-[190px] ${isAlphaProgram ? "bg-white" : "bg-[#1b1e21]"}`}>
                  <img
                    src={PROGRAM_PREVIEW_IMAGES[program.path] ?? youthMainPhoto}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 size-full object-center ${
                      isAlphaProgram
                        ? "object-contain p-8 opacity-100"
                        : "object-cover opacity-80"
                    }`}
                  />
                  {!isAlphaProgram && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                  )}
                  <p
                    className={`absolute bottom-4 left-5 font-['Montserrat',sans-serif] text-[22px] font-black leading-[1.05] ${
                      isAlphaProgram ? "text-[#ed1c14]" : "text-white"
                    }`}
                  >
                    {program.title}
                  </p>
                </div>
                <div className="p-6">
                  <p className="font-['Montserrat',sans-serif] text-[24px] font-bold leading-[1.2] text-[#15181c]">
                    {program.title}
                  </p>
                  <p className="mt-4 font-['Lato',sans-serif] text-[15px] leading-[1.65] text-[#46505a]">
                    {program.tagline}
                  </p>
                  <p className="mt-5 font-['Lato',sans-serif] text-[15px] font-bold text-[#d41c24]">
                    Pelajari lagi -&gt;
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </MobileSection>

      <MobileSection id="ministries" className="bg-[#111418] text-white">
        <img
          src={redGrain}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-22 mix-blend-soft-light"
        />
        <SectionLabel>Ministries</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.05] text-[#f8f8f6]">
          Generasi & Komunitas
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#d7d9da]">
          Temukan ruang pertumbuhan yang sesuai dengan tahap hidupmu.
        </p>
        <div className="relative z-10 mt-8 space-y-5">
          {MINISTRY_ROUTE_LINKS.map((ministry) => {
            const preview = MINISTRY_PREVIEW_CONTENT[ministry.to];

            return (
              <Link
                key={ministry.to}
                to={ministry.to}
                className="geis-pop-card block overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] no-underline shadow-[0_16px_34px_rgba(0,0,0,0.18)]"
              >
                <div className="relative h-[170px] bg-[#1b1e21]">
                  <img
                    src={preview.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover object-center opacity-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />
                  <p className="absolute bottom-4 left-5 font-['Montserrat',sans-serif] text-[24px] font-black uppercase leading-[1] text-white">
                    {ministry.label}
                  </p>
                </div>
                <div className="p-6">
                  <p className="font-['Lato',sans-serif] text-[15px] leading-[1.65] text-[#d7d9da]">
                    {preview.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </MobileSection>

      <MobileSection id="visit-us" className="bg-[#1b1e21] text-white">
        <img
          src={redGrain}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-20 mix-blend-soft-light"
        />
        <SectionLabel>Lokasi</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.05] text-[#f8f8f6]">
          Visit Us
        </h2>
        <p className="mt-6 font-['Montserrat',sans-serif] text-[20px] font-bold leading-[1.4]">
          {SITE_INFO.name}
        </p>
        <p className="mt-3 font-['Lato',sans-serif] text-[17px] leading-[1.6] text-[#d7d9da]">
          {SITE_INFO.location.street}, {SITE_INFO.location.area}
        </p>
        <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10 bg-[#f8f6f0] shadow-[0_20px_42px_rgba(0,0,0,0.22)]">
          <iframe
            title="GEIS CCC Location - Google Maps"
            src="https://www.google.com/maps?q=Jl.+RM+Said+No.+233,+Manahan,+Solo&output=embed"
            className="h-[260px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={SITE_INFO.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#b51b2a] px-5 py-4 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.12em] text-white no-underline"
          >
            Open Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-4 grid gap-3">
          <MobileContactPreview
            href={SITE_INFO.social.instagramUrl}
            title="Instagram"
            body={SITE_INFO.social.instagramLabel}
            icon={<MobileInstagramIcon />}
          />
          <MobileContactPreview
            href={SITE_INFO.social.whatsappUrl}
            title="WhatsApp"
            body="Hubungi admin GEIS CCC"
            icon={<MessageCircle className="size-6" aria-hidden="true" />}
          />
        </div>
      </MobileSection>

      <SiteFooter />
    </div>
  );
}
