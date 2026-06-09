import type { ProgramDetail } from "../data/programs";
import { SITE_INFO } from "../config/site";
import pixelCross from "../../assets/decor/pixel-cross.jpg";
import pixelJesus from "../../assets/decor/pixel-jesus.jpg";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import warmWallpaper from "../../assets/decor/warm-wallpaper.jpg";
import BackHeader from "./BackHeader";
import PrimaryActionLink from "./PrimaryActionLink";

type ProgramDetailPageProps = {
  program: ProgramDetail;
};

export default function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const texture = program.path === "/alpha" ? redFluidShape : program.path === "/SJ" ? warmWallpaper : redGrain;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6f0] pt-[74px] md:pt-[92px]">
      <BackHeader title={program.title} />

      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: program.bgColor }}
      >
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[300px] w-[300px] rotate-12 rounded-full object-cover opacity-[0.13] mix-blend-multiply md:h-[480px] md:w-[480px]"
        />
        <img
          src={pixelCross}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-6 hidden h-16 w-16 rounded-[6px] object-cover opacity-25 mix-blend-multiply md:block"
        />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <p className="font-['Lato',sans-serif] font-bold text-[11px] md:text-[12px] text-[#d41c24] tracking-[3.5px] md:tracking-[4.5px] uppercase mb-5 md:mb-7">
            {program.eyebrow}
          </p>
          <h1 className="font-['Playfair_Display',serif] font-bold text-[42px] md:text-[68px] lg:text-[84px] text-[#15181c] leading-[1.15] mb-6 md:mb-8">
            {program.title}
          </h1>
          <p className="font-['Lato',sans-serif] font-normal text-[18px] md:text-[22px] lg:text-[26px] text-[#46505a] leading-[1.6] max-w-3xl mx-auto">
            {program.tagline}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f6f0] py-20 md:py-24">
        <img
          src={redFluidShape}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-12 h-[260px] w-[260px] -rotate-12 rounded-full object-cover opacity-[0.08] mix-blend-multiply md:h-[420px] md:w-[420px]"
        />
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="font-['Lato',sans-serif] font-normal text-[19px] md:text-[22px] text-[#15181c] leading-[1.8]">
            {program.intro}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffdf8] py-20 md:py-28">
        <img
          src={pixelJesus}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-10 hidden h-20 w-20 rounded-[8px] object-cover opacity-20 mix-blend-multiply md:block"
        />
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
          {program.sections.map((section) => (
            <div
              key={section.heading}
              className="relative pl-6 md:pl-8 border-l-2 border-[#b51b2a]/20"
            >
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] text-[#15181c] leading-[1.25] mb-5 md:mb-7 tracking-[-0.01em]">
                {section.heading}
              </h2>
              <p className="font-['Lato',sans-serif] font-normal text-[17px] md:text-[20px] text-[#46505a] leading-[1.8]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1e21] py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[34px] md:text-[48px] text-[#f8f8f6] leading-[1.2] mb-6 md:mb-8">
            Tertarik bergabung?
          </h2>
          <p className="font-['Lato',sans-serif] font-normal text-[18px] md:text-[22px] text-[#d7d9da] leading-[1.6] mb-10 md:mb-12 max-w-2xl mx-auto opacity-90">
            Hubungi admin kami untuk informasi lebih lanjut atau langsung
            kunjungi gereja kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-[640px] mx-auto">
            <PrimaryActionLink
              href={SITE_INFO.social.whatsappUrl}
              ariaLabel="WhatsApp Admin"
              label="WhatsApp Admin"
            />
            <PrimaryActionLink
              to="/"
              ariaLabel="Kembali ke Beranda"
              label="Kembali ke Beranda"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
