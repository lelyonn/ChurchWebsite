import { Link } from "react-router";
import CoreValuesAccordion from "../components/CoreValuesAccordion";
import PrimaryActionLink from "../components/PrimaryActionLink";
import { SITE_INFO } from "../config/site";

export default function MobileAboutPage() {
  return (
    <div className="bg-[#f8f6f0] text-[#15181c]">
      <section className="px-6 pb-16 pt-28">
        <p className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.28em] text-[#d41c24]">
          About GEIS CCC
        </p>
        <h1 className="mt-4 font-['Playfair_Display',serif] text-[46px] font-bold leading-[1.05]">
          A Home For Generation.
        </h1>
        <p className="mt-6 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#46505a]">
          GEIS CCC adalah gereja yang kreatif, relevan, dan berdampak bagi
          generasi saat ini. Kami percaya setiap orang bisa bertumbuh dalam
          iman, menemukan tujuan, dan berjalan bersama dalam komunitas.
        </p>
        <div className="mt-8 flex flex-col gap-4">
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
      </section>

      <section className="bg-[#fffdf8] px-6 py-16">
        <div className="space-y-5">
          {[
            {
              title: "What We Believe",
              body:
                "Kami percaya gereja adalah rumah bagi pertumbuhan iman, komunitas, dan kehidupan yang semakin dekat dengan Yesus.",
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
              className="rounded-[8px] border border-[#e2ded6] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold leading-[1.2]">
                {item.title}
              </h2>
              <p className="mt-4 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#46505a]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f0e9] px-6 py-16">
        <p className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.28em] text-[#d41c24]">
          Nilai Kami
        </p>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.05] text-[#15181c]">
          5 Core Values
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#46505a]">
          Nilai-nilai utama yang menjadi gaya hidup jemaat GEIS CCC.
        </p>
        <div className="mt-8">
          <CoreValuesAccordion />
        </div>
      </section>

      <section className="bg-[#1b1e21] px-6 py-16 text-white">
        <p className="font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-[0.28em] text-[#f3b7bd]">
          Visit Us
        </p>
        <h2 className="mt-4 font-['Playfair_Display',serif] text-[42px] font-bold leading-[1.08] text-[#f8f8f6]">
          You belong here.
        </h2>
        <p className="mt-5 font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#d7d9da]">
          {SITE_INFO.location.street}, {SITE_INFO.location.area}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex font-['Lato',sans-serif] text-[16px] font-bold text-[#f3b7bd] no-underline"
        >
          Kembali ke Home -&gt;
        </Link>
      </section>
    </div>
  );
}
