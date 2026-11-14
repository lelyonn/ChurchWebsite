import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CoreValuesAccordion from "../components/CoreValuesAccordion";
import PrimaryActionLink from "../components/PrimaryActionLink";
import { SITE_INFO } from "../config/site";
import pastorsPhoto from "../../assets/images/pastors-photo-600.webp";
import { COMMUNITY_PHOTOS } from "../data/communityPhotos";

const GALLERY_PHOTOS = [
  COMMUNITY_PHOTOS.loveCommunity,
  COMMUNITY_PHOTOS.worshipTeam,
  COMMUNITY_PHOTOS.youthService,
  COMMUNITY_PHOTOS.worshipLeader,
  COMMUNITY_PHOTOS.ckidsClassroom,
  COMMUNITY_PHOTOS.worshipResponse,
];

export default function MobileAboutPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    const el = galleryRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 280;
    const gap = 16;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(GALLERY_PHOTOS.length - 1, Math.max(0, newIndex)));
  };

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollByDirection = (direction: "left" | "right") => {
    const el = galleryRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 280;
    const scrollAmount = direction === "left" ? -(cardWidth + 16) : cardWidth + 16;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToPhoto = (index: number) => {
    const el = galleryRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | null;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <div id="about" className="w-full bg-[#f8f6f0] text-[#15181c] scroll-mt-24 md:scroll-mt-28">
      {/* 01. Intro Hero */}
      <section className="px-6 pb-16 pt-28 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="font-['Lato',sans-serif] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#d41c24]">
                About GEIS CCC
              </p>
              <h1 className="mt-4 font-['Playfair_Display',serif] text-[46px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] text-[#15181c]">
                A Home For Generation.
              </h1>
              <p className="mt-6 max-w-xl font-['Lato',sans-serif] text-[17px] lg:text-[19px] leading-[1.75] text-[#46505a]">
                GEIS CCC adalah Gereja yang kreatif, relevan, dan berdampak bagi
                generasi saat ini. Kami percaya setiap orang bisa bertumbuh dalam
                iman, menemukan tujuan, dan berjalan bersama dalam komunitas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md">
                <PrimaryActionLink
                  to="/schedule"
                  ariaLabel="Lihat Jadwal Ibadah"
                  label="Jadwal Ibadah"
                />
                <PrimaryActionLink
                  href={SITE_INFO.location.mapsUrl}
                  ariaLabel="Buka Lokasi"
                  label="Buka Lokasi"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[16px] border border-[#e2ded6] shadow-xl">
                <img
                  src={COMMUNITY_PHOTOS.worshipCommunity}
                  alt="Worship Community GEIS CCC"
                  className="h-[340px] md:h-[400px] lg:h-[460px] w-full object-cover object-[50%_55%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. You Belong Here Section */}
      <section className="bg-[#1b1e21] px-6 py-16 md:px-12 lg:px-16 lg:py-24 text-white">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-['Montserrat',sans-serif] text-[42px] sm:text-[52px] lg:text-[64px] font-black leading-[1.05] tracking-tight">
            YOU BELONG HERE
          </h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-6 space-y-5 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#d7d9da]">
              <p>
                GEIS CCC adalah komunitas iman, kreativitas, dan pertumbuhan. Di
                sini setiap orang dapat mengenal Tuhan, menemukan komunitas, dan
                melangkah dalam tujuan hidupnya.
              </p>
              <p>
                Sebagai Christian Creative Church di Manahan, Solo, GEIS CCC hadir
                untuk menjadi rumah rohani yang kreatif, relevan, dan berdampak bagi
                generasi masa kini.
              </p>
              <p>
                GEIS CCC adalah bagian dari Gereja El-Shaddai Injil Sepenuh. Kami
                percaya Gereja bukan hanya tempat yang dikunjungi, tetapi komunitas
                tempat orang bertumbuh, dilayani, dan diutus untuk menjadi dampak.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-5 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#d7d9da]">
              <p>
                Kami membangun budaya penyembahan, pemuridan, pelayanan, dan
                kreativitas agar setiap jemaat dapat mengenal Tuhan lebih dalam dan
                menjalankan Amanat Agung dengan relevan.
              </p>
              <p>
                Website ini menjadi pintu masuk bagi pengunjung baru, jemaat, anak
                muda, dan tim internal untuk mengenal identitas, jadwal, nilai,
                program, dan lokasi GEIS CCC.
              </p>
              <div className="mt-8 overflow-hidden rounded-[12px] border border-white/10 shadow-lg">
                <img
                  src={COMMUNITY_PHOTOS.worshipResponse}
                  alt="Jemaat GEIS CCC"
                  className="h-[220px] lg:h-[260px] w-full object-cover object-[50%_44%] opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. 3 Core Pillars */}
      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "What We Believe",
                body:
                  "Kami percaya Gereja adalah rumah bagi pertumbuhan iman, komunitas, dan kehidupan yang semakin dekat dengan Yesus.",
              },
              {
                title: "Our Mission",
                body:
                  "Memaksimalkan potensi jemaat untuk melaksanakan Amanat Agung dengan cara yang kreatif dan relevan.",
              },
              {
                title: "Community",
                body:
                  "Kami membangun ruang yang hangat untuk orang baru, keluarga, anak muda, dan setiap pribadi yang ingin bertumbuh.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="geis-pop-card flex flex-col justify-between rounded-[12px] border border-[#e2ded6] bg-white p-7 lg:p-8 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <h2 className="font-['Montserrat',sans-serif] text-[24px] lg:text-[26px] font-bold leading-[1.2] text-[#15181c]">
                    {item.title}
                  </h2>
                  <p className="mt-4 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#46505a]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Galeri Foto Komunitas */}
      <section className="relative bg-black py-12 md:py-16" aria-label="Galeri Foto Komunitas">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 mb-6">
          <p className="font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.2em] text-[#d41c24]">
            Komunitas
          </p>
          <h2 className="mt-2 font-['Montserrat',sans-serif] text-[28px] md:text-[36px] font-black uppercase tracking-tight text-white">
            Life in Community
          </h2>
        </div>

        <div className="relative">
          <div
            ref={galleryRef}
            onScroll={updateScrollState}
            className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-12 lg:px-16 pe-12 md:pe-16 gap-4 md:gap-6"
          >
            {GALLERY_PHOTOS.map((photoSrc, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[78vw] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[220px] sm:h-[240px] md:h-[270px] rounded-[12px] overflow-hidden border border-white/10 bg-[#1b1e21] snap-start"
              >
                <img
                  src={photoSrc}
                  alt={`Gallery ${idx + 1}`}
                  className="h-full w-full object-cover object-center opacity-[0.9] transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {canScrollRight && (
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black/85 to-transparent z-10"
              aria-hidden="true"
            />
          )}

          {canScrollLeft && (
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black/85 to-transparent z-10"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-2" role="tablist" aria-label="Indikator galeri foto">
            {GALLERY_PHOTOS.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToPhoto(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 cursor-pointer ${
                    isActive ? "w-8 bg-[#d41c24]" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Lihat foto ${idx + 1}`}
                  aria-selected={isActive}
                  role="tab"
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByDirection("left")}
              disabled={!canScrollLeft}
              aria-label="Foto sebelumnya"
              className={`flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 cursor-pointer ${
                canScrollLeft
                  ? "opacity-100 hover:bg-white/20 active:scale-95"
                  : "cursor-not-allowed opacity-30"
              }`}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection("right")}
              disabled={!canScrollRight}
              aria-label="Foto berikutnya"
              className={`flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 cursor-pointer ${
                canScrollRight
                  ? "opacity-100 hover:bg-white/20 active:scale-95"
                  : "cursor-not-allowed opacity-30"
              }`}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 05. The Foundation */}
      <section className="bg-[#f8f6f0] px-6 py-16 md:px-12 lg:px-16 lg:py-24 text-[#15181c]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <h2 className="font-['Montserrat',sans-serif] text-[42px] sm:text-[52px] lg:text-[60px] font-black leading-[1.05] tracking-tight">
                THE FOUNDATION
              </h2>
              <div className="mt-8 space-y-5 font-['Lato',sans-serif] text-[17px] lg:text-[18px] leading-[1.75] text-[#46505a]">
                <p>
                  Iman kami berpusat kepada Yesus Kristus. Kami percaya setiap orang
                  diciptakan serupa gambar Allah, memiliki nilai, potensi, dan tujuan.
                </p>
                <p>
                  Gereja bukan hanya tempat untuk datang, tetapi gerakan yang diikuti:
                  tempat orang bertumbuh dalam iman, menemukan komunitas, dan membawa
                  harapan bagi dunia.
                </p>
                <p>
                  Kami percaya masa depan penuh harapan, dan tidak ada orang yang
                  dipanggil untuk berjalan sendirian.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[16px] shadow-xl">
                <img
                  src={COMMUNITY_PHOTOS.worshipHands}
                  alt="The Foundation"
                  className="h-[340px] md:h-[400px] lg:h-[460px] w-full object-cover object-[48%_52%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Ticker Banner */}
      <section className="relative flex h-[60px] w-full items-center overflow-hidden bg-black" aria-hidden="true">
        <div className="geis-about-ticker-track flex w-max items-center gap-10 whitespace-nowrap px-6">
          {Array(14).fill("YOU BELONG HERE.").map((text, i) => (
            <span
              key={i}
              className="font-['Montserrat',sans-serif] text-[14px] font-black uppercase tracking-[0.16em] text-[#f3b7bd]"
            >
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* 07. Our Pastors Section */}
      <section className="bg-[#151313] px-6 py-16 md:px-12 lg:px-16 lg:py-24 text-white">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-['Montserrat',sans-serif] text-[48px] md:text-[56px] lg:text-[64px] font-black uppercase leading-[0.95] tracking-[0] text-[#f8f8f6]">
                Our Pastors
              </h2>
              <p className="mt-4 font-['Playfair_Display',serif] text-[28px] md:text-[34px] font-bold italic leading-[1.1] text-[#f3b7bd]">
                Ps. Denso
                <br />
                & Ps. Glory
              </p>
              <div className="mt-8 overflow-hidden rounded-[12px] border border-white/10 bg-black shadow-2xl">
                <img
                  src={pastorsPhoto}
                  alt="Ps. Denso dan Ps. Glory"
                  className="h-[420px] md:h-[480px] lg:h-[560px] w-full object-cover object-[50%_72%] grayscale"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l-4 border-[#d41c24] pl-6">
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] font-black uppercase tracking-[0.18em] text-[#f3b7bd]">
                  Zakharia 4:6
                </p>
                <p className="mt-3 font-['Playfair_Display',serif] text-[24px] md:text-[28px] lg:text-[30px] font-bold italic leading-[1.35] text-[#f8f8f6]">
                  "Bukan dengan keperkasaan dan bukan dengan kekuatan, melainkan
                  dengan Roh-Ku, firman TUHAN semesta alam."
                </p>
              </div>
              <div className="mt-8 space-y-4 text-left font-['Lato',sans-serif] text-[16px] lg:text-[17px] leading-[1.75] text-[#d7d9da]">
                <p>
                  Jika hari ini kita berdiri dan merayakan perjalanan ini, bukan
                  karena kekuatan atau kehebatan manusia, melainkan karena tangan
                  Tuhan yang setia menopang.
                </p>
                <p>
                  Di tengah suka dan duka, kelimpahan dan keterbatasan, Dia tetap
                  hadir memimpin Gereja-Nya dengan kasih yang tidak pernah berubah.
                </p>
                <p>
                  Karena itu, mari GEIS CCC, teruslah menambatkan hati kepada
                  Kristus, Sang Kepala Gereja dan sumber kehidupan kita.
                </p>
                <p>
                  Tetaplah setia mengikut Dia, sekalipun jalan yang ditempuh tidak
                  selalu mudah.
                </p>
                <p>
                  Marilah kita berjalan seiring, sehati, dan sepikir dalam menggenapi
                  visi yang Tuhan percayakan kepada Gereja ini.
                </p>
                <p>
                  Bertumbuhlah dalam pengenalan yang benar akan Tuhan, sehingga iman
                  kita berakar kuat dan menghasilkan buah bagi kemuliaan nama-Nya.
                </p>
                <p>
                  Kerinduan saya agar Gereja ini tidak hanya menjadi rumah untuk
                  berkumpul, tetapi juga menjadi terang yang membawa banyak jiwa
                  kepada Kristus.
                </p>
                <p>
                  Dan ketika tahun-tahun berikutnya terbentang di hadapan kita,
                  biarlah setiap langkah tetap menjadi kesaksian tentang kebesaran
                  Tuhan yang menyertai Gereja-Nya dari generasi ke generasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. 5 Core Values Accordion */}
      <section className="bg-[#f3f0e9] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-['Lato',sans-serif] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#d41c24]">
            Nilai Kami
          </p>
          <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] md:text-[54px] lg:text-[62px] font-bold leading-[1.05] text-[#15181c]">
            5 Core Values
          </h2>
          <p className="mt-4 max-w-2xl font-['Lato',sans-serif] text-[16px] md:text-[18px] leading-[1.7] text-[#46505a]">
            Nilai-nilai utama yang menjadi gaya hidup jemaat GEIS CCC.
          </p>
          <div className="mt-10">
            <CoreValuesAccordion />
          </div>
        </div>
      </section>

      {/* 09. Lokasi & Petunjuk Arah */}
      <section id="visit-us" className="bg-[#1b1e21] px-6 py-16 md:px-12 lg:px-16 lg:py-24 text-white scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <p className="font-['Lato',sans-serif] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#f3b7bd]">
                Lokasi & Petunjuk Arah
              </p>
              <h2 className="mt-4 font-['Playfair_Display',serif] text-[42px] md:text-[50px] lg:text-[58px] font-bold leading-[1.08] text-[#f8f8f6]">
                You belong here.
              </h2>
              <p className="mt-4 font-['Lato',sans-serif] text-[17px] md:text-[19px] leading-[1.7] text-[#d7d9da]">
                {SITE_INFO.location.street}, {SITE_INFO.location.area}
              </p>
              <div className="mt-8">
                <a
                  href={SITE_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="geis-button-hover inline-flex items-center justify-between gap-4 rounded-[8px] bg-[#b51b2a] px-6 py-4 font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.12em] text-white no-underline shadow-md hover:bg-[#8f1621] transition-colors"
                >
                  Buka Petunjuk Arah di Google Maps
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-8">
                <Link
                  to="/"
                  className="inline-flex min-h-[44px] items-center py-2.5 px-3 -ml-3 rounded-[6px] font-['Lato',sans-serif] text-[16px] font-bold text-[#f3b7bd] hover:bg-white/10 no-underline transition-colors"
                >
                  Kembali ke Home -&gt;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#f8f6f0] shadow-[0_20px_42px_rgba(0,0,0,0.22)]">
                <iframe
                  title="GEIS CCC Location - Google Maps"
                  src="https://www.google.com/maps?q=Jl.+RM+Said+No.+233,+Manahan,+Solo&output=embed"
                  className="h-[320px] md:h-[380px] lg:h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
