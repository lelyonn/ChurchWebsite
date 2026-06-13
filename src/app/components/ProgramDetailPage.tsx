import type { ProgramDetail } from "../data/programs";
import { SITE_INFO } from "../config/site";
import pixelCross from "../../assets/decor/pixel-cross.jpg";
import pixelJesus from "../../assets/decor/pixel-jesus.jpg";
import redFluidShape from "../../assets/decor/red-fluid-shape.jpg";
import redGrain from "../../assets/decor/red-grain.jpg";
import warmWallpaper from "../../assets/decor/warm-wallpaper.jpg";
import alphaLogo from "../../assets/images/alpha-logo.png";
import BackHeader from "./BackHeader";
import PrimaryActionLink from "./PrimaryActionLink";

type ProgramDetailPageProps = {
  program: ProgramDetail;
};

export default function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const isAlpha = program.path === "/alpha";
  const texture = isAlpha ? alphaLogo : program.path === "/SJ" ? warmWallpaper : redGrain;

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
          className={`pointer-events-none absolute -right-20 -top-16 h-[300px] w-[300px] rotate-12 rounded-full opacity-[0.13] mix-blend-multiply md:h-[480px] md:w-[480px] ${
            isAlpha ? "object-contain" : "object-cover"
          }`}
        />
        <img
          src={pixelCross}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-6 hidden h-16 w-16 rounded-[6px] object-cover opacity-25 mix-blend-multiply md:block"
        />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          {isAlpha && (
            <img
              src={alphaLogo}
              alt="Alpha"
              className="mx-auto mb-8 h-[128px] w-auto object-contain md:h-[180px]"
            />
          )}
          <p className="font-['Lato',sans-serif] font-bold text-[11px] md:text-[12px] text-[#d41c24] tracking-[3.5px] md:tracking-[4.5px] uppercase mb-5 md:mb-7">
            {program.eyebrow}
          </p>
          <h1 className="font-['Playfair_Display',serif] font-bold text-[42px] md:text-[68px] lg:text-[84px] text-[#15181c] leading-[1.15] mb-6 md:mb-8">
            {program.title}
          </h1>
          <p className="font-['Lato',sans-serif] font-normal text-[18px] md:text-[22px] lg:text-[26px] text-[#46505a] leading-[1.6] max-w-3xl mx-auto">
            {program.tagline}
          </p>
          {program.websiteUrl && (
            <a
              href={program.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-[8px] bg-[#d41c24] px-6 py-4 font-['Montserrat',sans-serif] text-[12px] font-black uppercase tracking-[0.12em] text-white no-underline shadow-[0_16px_34px_rgba(212,28,36,0.22)] transition-colors hover:bg-[#8f1621]"
            >
              {program.websiteLabel ?? "Website Resmi"}
            </a>
          )}
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
              {section.bullets && (
                <ul className="mt-6 grid gap-3 font-['Lato',sans-serif] text-[16px] leading-[1.65] text-[#46505a] md:text-[18px]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 size-2 shrink-0 rounded-full bg-[#d41c24]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.items && (
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {section.items.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[8px] border border-[#e2ded6] bg-[#f8f6f0] p-6"
                    >
                      <h3 className="font-['Montserrat',sans-serif] text-[20px] font-black leading-[1.2] text-[#15181c]">
                        {item.title}
                      </h3>
                      <p className="mt-4 font-['Lato',sans-serif] text-[15px] leading-[1.7] text-[#46505a] md:text-[16px]">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              )}
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
            kunjungi Gereja kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-[900px] mx-auto">
            <PrimaryActionLink
              href={SITE_INFO.social.whatsappUrl}
              ariaLabel="WhatsApp Admin"
              label="WhatsApp Admin"
            />
            {program.websiteUrl && (
              <PrimaryActionLink
                href={program.websiteUrl}
                ariaLabel={program.websiteLabel ?? "Website Resmi"}
                label={program.websiteLabel ?? "Website Resmi"}
              />
            )}
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
