import { CalendarDays, MapPin, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import pixelCross from "../../assets/decor/pixel-cross.jpg";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import gcLogo from "../../assets/images/gc-logo.png";
import heroBackgroundVideo from "../../assets/videos/homepage-hero-background.mp4";
import SiteFooter from "../components/SiteFooter";
import { SITE_INFO } from "../config/site";
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
              alt="GEIS Christian Creative Church"
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
              className="geis-button-hover mt-7 flex min-h-[76px] items-center justify-between rounded-[6px] bg-[#b51b2a] px-5 no-underline"
            >
              <p className="font-['Montserrat',sans-serif] text-[20px] font-bold leading-[1.25] text-white">
                SUNDAY 09.00
                <br />
                YOUTH 11.00
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
          berlokasi di Manahan, Solo. Kami hadir untuk menjadi gereja yang
          kreatif, relevan, dan berdampak bagi generasi saat ini.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4">
          <div className="rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
            <p className="font-['Montserrat',sans-serif] text-[22px] font-bold">
              Visi
            </p>
            <p className="mt-3 font-['Lato',sans-serif] text-[16px] leading-[1.65] text-[#46505a]">
              Menjadi gereja yang kreatif dan relevan bagi generasi.
            </p>
          </div>
          <div className="rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
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

      <MobileSection id="services" className="bg-[#1b1e21] text-white">
        <SectionLabel>Jadwal Ibadah</SectionLabel>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[42px] font-bold leading-[1.08] text-[#f8f8f6]">
          Bertemu setiap minggu
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#d7d9da]">
          Pilih waktu yang paling sesuai. Semua orang diterima dengan hangat.
        </p>
        <div className="mt-8 space-y-4">
          {SCHEDULE_ITEMS.slice(0, 4).map((item) => (
            <Link
              key={item.title}
              to="/schedule"
              className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 no-underline"
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
          {PROGRAM_DETAIL_PAGES.map((program) => (
            <Link
              key={program.path}
              to={program.path}
              className="block rounded-[8px] border border-[#e2ded6] bg-[#fffdf8] p-6 no-underline shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <p className="font-['Montserrat',sans-serif] text-[24px] font-bold leading-[1.2] text-[#15181c]">
                {program.title}
              </p>
              <p className="mt-4 font-['Lato',sans-serif] text-[15px] leading-[1.65] text-[#46505a]">
                {program.tagline}
              </p>
              <p className="mt-5 font-['Lato',sans-serif] text-[15px] font-bold text-[#d41c24]">
                Pelajari lagi -&gt;
              </p>
            </Link>
          ))}
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
        <a
          href={SITE_INFO.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="geis-button-hover mt-8 flex h-[58px] items-center justify-between rounded-[8px] bg-[#b51b2a] px-6 font-['Lato',sans-serif] text-[16px] font-bold text-white no-underline"
        >
          Google Maps
          <MapPin className="size-5" aria-hidden="true" />
        </a>
      </MobileSection>

      <SiteFooter />
    </div>
  );
}
