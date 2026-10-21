import { useState } from "react";
import { Link } from "react-router";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Heart,
  HelpCircle,
  MessageCircle,
  MessageSquare,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import { SITE_INFO } from "../config/site";
import alphaLogo from "../../assets/images/alpha-logo.png";
import BackHeader from "../components/BackHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ALPHA_OFFICIAL_URL = "https://indonesia.alpha.org/try-alpha/?lang=id";

const whatsappNumber = SITE_INFO.contact?.whatsappRaw || "6282135329709";
const WA_ALPHA_URL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Halo admin GEIS CCC, saya tertarik untuk mengikuti kelas Alpha. Kapan jadwal batch terdekat dimulai?"
)}`;

const THREE_ELEMENTS = [
  {
    step: "01",
    title: "Makanan & Koneksi",
    subtitle: "Food & Connection",
    icon: Utensils,
    description:
      "Setiap sesi selalu diawali dengan makan bersama atau sekadar menikmati camilan dan secangkir teh/kopi. Ini adalah waktu santai untuk saling mengenal, beristirahat dari rutinitas, dan mencairkan suasana sebelum masuk ke materi.",
    highlight: "Santai & akrab tanpa keharusan formal",
  },
  {
    step: "02",
    title: "Tontonan Video Inspiratif",
    subtitle: "Talk / Content",
    icon: PlayCircle,
    description:
      "Menyaksikan video pendek berdurasi sekitar 20–25 menit yang dikemas secara sinematik dan relevan. Mengangkat pertanyaan nyata seputar hidup dan iman: 'Siapakah Yesus?', 'Bagaimana menghadapi keraguan?', atau 'Mengapa dan bagaimana kita berdoa?'.",
    highlight: "Singkat, bernas, dan mudah dipahami",
  },
  {
    step: "03",
    title: "Percakapan Terbuka",
    subtitle: "Discussion / Conversation",
    icon: MessageSquare,
    description:
      "Momen paling bermakna di Alpha: diskusi dalam kelompok kecil. Setiap orang bebas membagikan pemikiran, ide, atau keraguannya secara jujur. Tidak ada kewajiban untuk bicara, tidak ada jawaban yang salah, dan tidak ada penghakiman.",
    highlight: "Semua pertanyaan dan keraguan dihargai",
  },
];

const ALPHA_SERIES = [
  {
    tag: "DEWASA & UMUM (USIA 25+)",
    name: "Alpha Film Series (Konteks Indonesia)",
    description:
      "Diproduksi khusus dengan latar belakang dan konteks budaya Indonesia. Mengangkat kisah nyata, wawancara, dan pergumulan yang sangat dekat dengan kehidupan sehari-hari masyarakat kita.",
    features: [
      "15 episode video berkualitas sinematik",
      "Kisah nyata inspiratif dari berbagai pelosok Indonesia",
      "Relevan bagi profesional, keluarga muda, dan umum",
    ],
  },
  {
    tag: "REMAJA, MAHASISWA & GEN Z (USIA 12–24)",
    name: "Alpha Youth Series (AYS)",
    description:
      "Dirancang khusus oleh anak muda untuk anak muda. Format video cepat, visual dinamis, dipandu oleh figur Gen Z internasional untuk menjawab kegelisahan generasi masa kini.",
    features: [
      "Durasi video ringkas di bawah 20 menit",
      "Gaya visual interaktif, humor, dan animasi segar",
      "Membahas identitas, kesehatan mental, dan tujuan hidup",
    ],
  },
];

const CORE_VALUES = [
  {
    icon: Users,
    title: "Terbuka untuk Siapa Saja",
    description:
      "Tidak perlu beragama Kristen atau tahu isi Alkitab. Kamu yang ragu, skeptis, mencari tahu, atau baru mengenal gereja diterima dengan tangan terbuka.",
  },
  {
    icon: Heart,
    title: "Bebas Tekanan Apapun",
    description:
      "Kamu tidak akan diminta berdoa di depan umum, tidak akan didebat, dan tidak dipaksa setuju. Kamu boleh datang hanya untuk mendengarkan.",
  },
  {
    icon: Sparkles,
    title: "100% Bebas Biaya (Gratis)",
    description:
      "Tidak ada biaya pendaftaran, materi diberikan cuma-cuma, dan konsumsi disiapkan oleh komunitas GEIS CCC sebagai bentuk pelayanan kasih.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Menjaga Privasi",
    description:
      "Diskusi kelompok kecil dibangun di atas prinsip saling menghormati dan kerahasiaan. Cerita dan pandangan pribadimu aman bersama kami.",
  },
];

const FAQS = [
  {
    id: "faq-cost",
    question: "Berapa biaya untuk mengikuti Alpha di GEIS CCC?",
    answer:
      "Alpha 100% gratis. Mulai dari video materi, modul diskusi, hingga makanan/camilan dan minuman yang disediakan tim GEIS CCC dapat dinikmati tanpa biaya pendaftaran maupun iuran tersembunyi apa pun.",
  },
  {
    id: "faq-who",
    question: "Apakah saya harus beragama Kristen atau hafal Alkitab untuk ikut?",
    answer:
      "Sama sekali tidak. Alpha justru dirancang khusus bagi siapa saja yang ingin bertanya, orang yang skeptis, belum pernah ke gereja, atau ingin memahami dasar iman tanpa doktrin yang rumit. Tidak ada ujian atau syarat awal.",
  },
  {
    id: "faq-duration",
    question: "Berapa lama rangkaian program Alpha ini berlangsung?",
    answer:
      "Alpha umumnya berjalan selama 9 hingga 11 minggu berturut-turut, dengan 1 pertemuan per minggu berdurasi sekitar 1,5 hingga 2 jam. Di pertengahan rangkaian biasanya ada satu sesi akhir pekan/retret santai (Alpha Weekend) untuk membangun keakraban.",
  },
  {
    id: "faq-talk",
    question: "Apakah saya wajib berbicara atau menjawab saat sesi diskusi kelompok?",
    answer:
      "Tidak wajib sama sekali. Kamu bebas datang dan sekadar mendengarkan video serta menyimak obrolan rekan satu kelompok. Kami sangat menghargai zona nyaman setiap peserta.",
  },
  {
    id: "faq-miss",
    question: "Bagaimana jika saya berhalangan hadir di salah satu sesi pertemuan?",
    answer:
      "Tidak masalah. Tim fasilitator kelompok kecil akan membantu membagikan ringkasan materi atau tautan video agar kamu tetap bisa mengikuti topik di minggu berikutnya.",
  },
  {
    id: "faq-register",
    question: "Bagaimana cara mendaftar untuk batch Alpha berikutnya di GEIS CCC?",
    answer:
      "Cukup klik tombol hubungi admin via WhatsApp di halaman ini. Tim kami akan memberikan informasi mengenai tanggal mulai batch terdekat, lokasi pertemuan di Manahan Solo (atau opsi daring), serta mencatat konfirmasi kehadiranmu.",
  },
];

export default function AlphaPage() {
  const [activeFaq, setActiveFaq] = useState<string | undefined>("faq-cost");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fdfcf9] text-[#15181c]">
      <BackHeader title="Alpha Course" backLabel="Kembali ke Beranda" backTo="/" />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e2ded6]/70 bg-gradient-to-b from-[#fffdf8] to-[#f8f6f0] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-24 w-auto items-center justify-center md:h-28">
            <img
              src={alphaLogo}
              alt="Logo Alpha Indonesia"
              className="h-full w-auto object-contain drop-shadow-sm"
            />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c41820]/20 bg-[#c41820]/5 px-4 py-1.5 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.2em] text-[#c41820]">
            <Sparkles className="size-3.5 shrink-0" aria-hidden="true" />
            <span>Program Eksplorasi Iman & Kehidupan</span>
          </div>

          <h1 className="mb-5 font-['Playfair_Display',serif] text-[36px] font-bold leading-[1.12] text-[#15181c] sm:text-[50px] md:text-[62px]">
            Adakah kehidupan yang lebih dari sekadar hidup?
          </h1>

          <p className="mx-auto mb-8 max-w-2xl font-['Lato',sans-serif] text-[18px] leading-[1.7] text-[#4b5560] md:text-[20px]">
            Alpha adalah ruang yang hangat, terbuka, dan santai untuk mengeksplorasi pertanyaan-pertanyaan besar seputar hidup, iman, dan arti keberadaan kita bersama teman baru tanpa penghakiman.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 font-['Lato',sans-serif] text-[13px] font-semibold text-[#15181c] md:text-[14px]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2ded6] bg-white px-3.5 py-1.5 shadow-sm">
              <CheckCircle2 className="size-4 text-[#c41820]" aria-hidden="true" />
              100% Gratis Tanpa Biaya
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2ded6] bg-white px-3.5 py-1.5 shadow-sm">
              <Heart className="size-4 text-[#c41820]" aria-hidden="true" />
              Bebas Tekanan & Santai
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2ded6] bg-white px-3.5 py-1.5 shadow-sm">
              <Users className="size-4 text-[#c41820]" aria-hidden="true" />
              Terbuka untuk Siapa Saja
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_ALPHA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daftar kelas Alpha via WhatsApp"
              className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] bg-[#c41820] px-7 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase tracking-[0.08em] text-white no-underline shadow-[0_12px_24px_rgba(196,24,32,0.22)] transition-colors hover:bg-[#9a1319] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41820] focus-visible:ring-offset-2"
            >
              <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
              <span>Daftar / Info Batch Terdekat</span>
            </a>

            <a
              href={ALPHA_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka website resmi Alpha Indonesia (tab baru)"
              className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border border-[#e2ded6] bg-white px-6 font-['Montserrat',sans-serif] text-[13px] font-bold text-[#15181c] no-underline shadow-sm transition-colors hover:bg-[#f8f6f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41820] focus-visible:ring-offset-2"
            >
              <span>indonesia.alpha.org</span>
              <ExternalLink className="size-4 text-[#4b5560]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Apa itu Alpha - Overview */}
      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#c41820]">
                Mengenal Alpha
              </p>
              <h2 className="mb-6 font-['Playfair_Display',serif] text-[32px] font-bold leading-[1.2] text-[#15181c] sm:text-[40px]">
                Bukan ceramah satu arah, tetapi ruang berbagi yang aman.
              </h2>
              <div className="space-y-4 font-['Lato',sans-serif] text-[17px] leading-[1.75] text-[#4b5560]">
                <p>
                  Alpha berawal dari gereja <strong>Holy Trinity Brompton (HTB)</strong> di London lebih dari 30 tahun yang lalu. Kini, Alpha telah berjalan di lebih dari 100 negara, diterjemahkan ke dalam lebih dari 100 bahasa, dan diikuti oleh jutaan orang di seluruh dunia.
                </p>
                <p>
                  Di <strong>GEIS CCC Manahan Solo</strong>, kami percaya bahwa setiap pertanyaan tentang kehidupan berharga untuk didengarkan. Alpha dirancang tanpa suasana yang menghakimi: tidak ada tuntutan berbusana tertentu, tidak ada keharusan menjadi orang Kristen, dan tidak ada pertanyaan yang dianggap tabu atau konyol.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[16px] border border-[#e2ded6] bg-[#f8f6f0] p-7 shadow-sm">
                <h3 className="mb-4 font-['Montserrat',sans-serif] text-[18px] font-bold text-[#15181c]">
                  Mengapa Orang Suka Ikut Alpha?
                </h3>
                <ul className="space-y-3.5 font-['Lato',sans-serif] text-[15px] leading-[1.6] text-[#4b5560]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c41820]/10 text-[#c41820]">
                      ✓
                    </span>
                    <span>Bisa ngobrol santai tanpa takut didebat atau dipojokkan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c41820]/10 text-[#c41820]">
                      ✓
                    </span>
                    <span>Video berkualitas tinggi dengan topik yang relevan bagi kehidupan sehari-hari.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c41820]/10 text-[#c41820]">
                      ✓
                    </span>
                    <span>Menemukan sahabat baru yang saling mendukung di kota Solo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c41820]/10 text-[#c41820]">
                      ✓
                    </span>
                    <span>Bebas hadir hanya untuk mendengarkan tanpa dipaksa berbicara.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiga Hal yang Selalu Ada di Setiap Sesi (The 3 Core Elements) */}
      <section className="border-y border-[#e2ded6]/70 bg-[#f8f6f0] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#c41820]">
              Format Kegiatan
            </p>
            <h2 className="mb-4 font-['Playfair_Display',serif] text-[32px] font-bold leading-[1.2] text-[#15181c] sm:text-[44px]">
              Tiga Hal yang Selalu Ada di Setiap Sesi
            </h2>
            <p className="mx-auto max-w-2xl font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#4b5560]">
              Meskipun setiap kelompok dapat berjalan di tempat yang berbeda, semua sesi Alpha di seluruh dunia dibangun di atas tiga elemen sederhana yang konsisten.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {THREE_ELEMENTS.map((el) => {
              const IconComp = el.icon;
              return (
                <div
                  key={el.step}
                  className="relative flex flex-col justify-between rounded-[16px] border border-[#e2ded6] bg-white p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-[12px] bg-[#c41820]/10 text-[#c41820]">
                        <IconComp className="size-6" aria-hidden="true" />
                      </div>
                      <span className="font-['Montserrat',sans-serif] text-[13px] font-black tracking-widest text-[#a8acb1]">
                        {el.step}
                      </span>
                    </div>

                    <h3 className="mb-1 font-['Montserrat',sans-serif] text-[20px] font-bold text-[#15181c]">
                      {el.title}
                    </h3>
                    <p className="mb-4 font-['Lato',sans-serif] text-[13px] font-semibold uppercase tracking-wider text-[#c41820]">
                      {el.subtitle}
                    </p>

                    <p className="font-['Lato',sans-serif] text-[15px] leading-[1.7] text-[#4b5560]">
                      {el.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#f0eee8] pt-4 font-['Lato',sans-serif] text-[13px] font-semibold text-[#15181c]">
                    <span className="inline-block text-[#c41820] mr-1.5">●</span>
                    {el.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materi Seri Alpha yang Tersedia */}
      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#c41820]">
              Pilihan Seri
            </p>
            <h2 className="mb-4 font-['Playfair_Display',serif] text-[32px] font-bold leading-[1.2] text-[#15181c] sm:text-[44px]">
              Seri Alpha yang Tersedia di GEIS CCC
            </h2>
            <p className="mx-auto max-w-2xl font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#4b5560]">
              Materi Alpha dirancang sesuai tahapan usia dan konteks peserta agar percakapan berlangsung естественно dan relevan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {ALPHA_SERIES.map((series) => (
              <div
                key={series.name}
                className="flex flex-col justify-between rounded-[16px] border border-[#e2ded6] bg-[#f8f6f0] p-8 shadow-sm"
              >
                <div>
                  <div className="mb-3 inline-block rounded-full bg-white px-3 py-1 font-['Lato',sans-serif] text-[11px] font-bold uppercase tracking-wider text-[#c41820] shadow-xs">
                    {series.tag}
                  </div>
                  <h3 className="mb-4 font-['Montserrat',sans-serif] text-[22px] font-bold leading-[1.3] text-[#15181c]">
                    {series.name}
                  </h3>
                  <p className="mb-6 font-['Lato',sans-serif] text-[16px] leading-[1.7] text-[#4b5560]">
                    {series.description}
                  </p>
                  <ul className="mb-6 space-y-2.5 font-['Lato',sans-serif] text-[14px] text-[#15181c]">
                    {series.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-[#c41820]" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WA_ALPHA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[44px] items-center justify-center rounded-[8px] bg-white border border-[#e2ded6] px-5 font-['Montserrat',sans-serif] text-[13px] font-bold text-[#15181c] no-underline transition-colors hover:bg-[#c41820] hover:text-white hover:border-[#c41820]"
                >
                  Tanya Jadwal Seri Ini via WA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai Utama Alpha */}
      <section className="border-t border-[#e2ded6]/70 bg-[#f8f6f0] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#c41820]">
              Komitmen Kami
            </p>
            <h2 className="mb-4 font-['Playfair_Display',serif] text-[32px] font-bold leading-[1.2] text-[#15181c] sm:text-[44px]">
              Ruang Aman Tanpa Prasangka
            </h2>
            <p className="mx-auto max-w-2xl font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#4b5560]">
              Kami menjaga standar lingkungan Alpha agar setiap orang merasa nyaman dan dihormati sejak menit pertama.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-[14px] border border-[#e2ded6] bg-white p-6 shadow-xs"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] bg-[#c41820]/10 text-[#c41820]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-['Montserrat',sans-serif] text-[17px] font-bold text-[#15181c]">
                    {val.title}
                  </h3>
                  <p className="font-['Lato',sans-serif] text-[14px] leading-[1.65] text-[#4b5560]">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#c41820]">
              FAQ
            </p>
            <h2 className="mb-4 font-['Playfair_Display',serif] text-[32px] font-bold leading-[1.2] text-[#15181c] sm:text-[42px]">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="font-['Lato',sans-serif] text-[17px] leading-[1.7] text-[#4b5560]">
              Semua hal penting yang perlu kamu ketahui sebelum mengikuti sesi Alpha.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            value={activeFaq}
            onValueChange={setActiveFaq}
            className="space-y-4"
          >
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-[12px] border border-[#e2ded6] bg-[#f8f6f0] px-6 py-1 shadow-xs transition-colors data-[state=open]:border-[#c41820]/40 data-[state=open]:bg-white"
              >
                <AccordionTrigger className="font-['Montserrat',sans-serif] text-[17px] font-bold leading-[1.4] text-[#15181c] hover:no-underline">
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle className="size-4 shrink-0 text-[#c41820]" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-1 font-['Lato',sans-serif] text-[16px] leading-[1.75] text-[#4b5560]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#1b1e21] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-['Lato',sans-serif] text-[12px] font-bold uppercase tracking-[0.22em] text-[#f3b7bd]">
            LANGKAH BERIKUTNYA
          </p>
          <h2 className="mb-5 font-['Playfair_Display',serif] text-[34px] font-bold leading-[1.2] text-[#f8f8f6] sm:text-[46px]">
            Siap mengeksplorasi pertanyaan terbesar dalam hidupmu?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-['Lato',sans-serif] text-[18px] leading-[1.7] text-[#d7d9da]">
            Pintu Alpha selalu terbuka untukmu. Hubungi admin kami untuk mendaftar pada batch berikutnya atau kunjungi website resmi Alpha Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_ALPHA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi admin via WhatsApp untuk daftar Alpha"
              className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-[8px] bg-[#c41820] px-8 font-['Montserrat',sans-serif] text-[14px] font-bold uppercase tracking-[0.08em] text-white no-underline shadow-[0_12px_24px_rgba(196,24,32,0.3)] transition-colors hover:bg-[#9a1319] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
              <span>Daftar Alpha via WhatsApp</span>
            </a>

            <a
              href={ALPHA_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi website resmi Alpha Indonesia (buka di tab baru)"
              className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border border-white/20 bg-white/5 px-6 font-['Montserrat',sans-serif] text-[13px] font-bold text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <span>Kunjungi indonesia.alpha.org</span>
              <ExternalLink className="size-4 text-[#d7d9da]" aria-hidden="true" />
            </a>

            <Link
              to="/"
              className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center rounded-[8px] px-6 font-['Montserrat',sans-serif] text-[13px] font-bold text-[#d7d9da] no-underline transition-colors hover:text-white"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
