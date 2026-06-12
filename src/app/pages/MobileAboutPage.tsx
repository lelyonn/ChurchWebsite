import { Link } from "react-router";
import CoreValuesAccordion from "../components/CoreValuesAccordion";
import PrimaryActionLink from "../components/PrimaryActionLink";
import { SITE_INFO } from "../config/site";
import pastorsPhoto from "../../assets/images/pastors-photo.jpeg";
import { COMMUNITY_PHOTOS } from "../data/communityPhotos";

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

      <section className="bg-[#1b1e21] px-6 py-16 text-white">
        <h2 className="font-['Montserrat',sans-serif] text-[42px] font-black leading-[1.05]">
          YOU BELONG HERE
        </h2>
        <div className="mt-8 space-y-5 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#d7d9da]">
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
            percaya gereja bukan hanya tempat yang dikunjungi, tetapi komunitas
            tempat orang bertumbuh, dilayani, dan diutus untuk menjadi dampak.
          </p>
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
        </div>
        <div className="mt-10 overflow-hidden rounded-[8px]">
          <img
            src={COMMUNITY_PHOTOS.worshipCommunity}
            alt="Worship Community"
            className="h-[340px] w-full object-cover"
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
              className="geis-pop-card rounded-[8px] border border-[#e2ded6] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
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

      <section className="bg-black">
        <div className="flex overflow-x-auto hide-scrollbar">
          {[
            COMMUNITY_PHOTOS.loveCommunity,
            COMMUNITY_PHOTOS.worshipTeam,
            COMMUNITY_PHOTOS.youthService,
            COMMUNITY_PHOTOS.worshipLeader,
            COMMUNITY_PHOTOS.ckidsClassroom,
            COMMUNITY_PHOTOS.worshipResponse,
          ].map((photoSrc, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[240px] h-[170px] border-r border-[#333]"
            >
              <img
                src={photoSrc}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f6f0] px-6 py-16 text-[#15181c]">
        <h2 className="font-['Montserrat',sans-serif] text-[42px] font-black leading-[1.05]">
          THE FOUNDATION
        </h2>
        <div className="mt-8 space-y-5 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#46505a]">
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
        <div className="mt-10 overflow-hidden rounded-[8px]">
          <img
            src={COMMUNITY_PHOTOS.worshipHands}
            alt="The Foundation"
            className="h-[340px] w-full object-cover"
          />
        </div>
      </section>

      <section className="relative flex h-[60px] w-full items-center overflow-hidden bg-black">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee-group {
              animation: marquee 15s linear infinite;
            }
          `}
        </style>
        <div className="flex min-w-full shrink-0 items-center justify-around animate-marquee-group">
          {Array(6).fill("YOU BELONG HERE").map((text, i) => (
            <span key={i} className="mx-6 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase text-[#000fff]">
              {text}
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around animate-marquee-group">
          {Array(6).fill("YOU BELONG HERE").map((text, i) => (
            <span key={i} className="mx-6 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase text-[#000fff]">
              {text}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#151313] px-6 py-16 text-white">
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
        <div className="mt-8 space-y-5 font-['Lato',sans-serif] text-[16px] leading-[1.75] text-[#d7d9da]">
          <p>
            Jika hari ini kita berdiri dan merayakan perjalanan ini, bukan
            karena kekuatan atau kehebatan manusia, melainkan karena tangan
            Tuhan yang setia menopang.
          </p>
          <p>
            Di tengah suka dan duka, kelimpahan dan keterbatasan, Dia tetap
            hadir memimpin gereja-Nya dengan kasih yang tidak pernah berubah.
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
            visi yang Tuhan percayakan kepada gereja ini.
          </p>
          <p>
            Bertumbuhlah dalam pengenalan yang benar akan Tuhan, sehingga iman
            kita berakar kuat dan menghasilkan buah bagi kemuliaan nama-Nya.
          </p>
          <p>
            Kerinduan saya agar gereja ini tidak hanya menjadi rumah untuk
            berkumpul, tetapi juga menjadi terang yang membawa banyak jiwa
            kepada Kristus.
          </p>
          <p>
            Dan ketika tahun-tahun berikutnya terbentang di hadapan kita,
            biarlah setiap langkah tetap menjadi kesaksian tentang kebesaran
            Tuhan yang menyertai gereja-Nya dari generasi ke generasi.
          </p>
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
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
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
