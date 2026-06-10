export type ProgramSection = {
  heading: string;
  body: string;
  bullets?: string[];
  items?: {
    title: string;
    body: string;
  }[];
};

export type ProgramDetail = {
  path: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  bgColor: string;
  websiteUrl?: string;
  websiteLabel?: string;
  sections: ProgramSection[];
};

export const PROGRAM_DETAIL_PAGES: ProgramDetail[] = [
  {
    path: "/alpha",
    eyebrow: "PROGRAM GEIS CCC",
    title: "Alpha",
    tagline:
      "Ruang terbuka untuk mengeksplorasi kehidupan, iman, dan tujuan melalui persahabatan, pengajaran, dan percakapan.",
    intro:
      "Alpha adalah ruang untuk mengenal iman, bertanya, berdiskusi, dan mengalami Tuhan secara pribadi. Melalui video yang sederhana, waktu untuk terkoneksi, dan diskusi kelompok kecil, setiap orang diberi tempat yang aman untuk mengeksplorasi pertanyaan besar tentang kehidupan, iman, dan tujuan.",
    bgColor: "#e8f4f8",
    websiteUrl: "https://indonesia.alpha.org/?lang=id",
    websiteLabel: "Website Alpha Indonesia",
    sections: [
      {
        heading: "Sejarah Alpha",
        body:
          "Alpha dimulai dari Gereja HTB di London lebih dari 30 tahun yang lalu. Saat ini Alpha berjalan di lebih dari 100 negara di seluruh dunia dan telah diterjemahkan ke dalam lebih dari 100 bahasa.",
        bullets: [
          "Berawal dari Holy Trinity Brompton (HTB), London.",
          "Berjalan di lebih dari 100 negara.",
          "Diterjemahkan ke dalam lebih dari 100 bahasa.",
          "Tokoh pendiri Alpha adalah Nicky Gumbel.",
        ],
      },
      {
        heading: "Bahan-Bahan Alpha",
        body:
          "Materi Alpha tersedia dalam beberapa seri yang disesuaikan dengan usia dan konteks peserta.",
        bullets: [
          "Alpha Youth Film Series: 12 video untuk usia 12-18 tahun.",
          "Alpha Youth Series: 13 video untuk usia 18-24 tahun.",
          "Alpha Film Series Konteks Indonesia: 15 video + 1 video intro AP untuk usia 25 tahun ke atas.",
          "NEW AYS: 10 video untuk Gen Z usia 12-17 tahun.",
        ],
      },
      {
        heading: "NEW AYS",
        body:
          "NEW AYS dirancang untuk membantu anak muda mengeksplorasi pertanyaan besar tentang kehidupan, iman, dan tujuan dengan format yang lebih segar dan dekat dengan Gen Z.",
        bullets: [
          "10 sesi berlangsung dalam sekitar 9 pertemuan.",
          "Sesi baru lebih pendek, kurang dari 20 menit.",
          "Dibuat oleh anak youth untuk anak youth.",
          "Dipandu oleh 8 anak Gen Z internasional.",
          "Menghadirkan ahli, cerita, dan wawancara baru.",
          "Menggunakan animasi dan gaya visual yang baru.",
        ],
      },
      {
        heading: "3 Elemen Penting di Alpha",
        body:
          "Setiap sesi Alpha dibangun dengan tiga elemen sederhana yang membantu peserta merasa diterima, memahami pengajaran, dan punya ruang untuk berdiskusi.",
        items: [
          {
            title: "Persahabatan",
            body:
              "Setiap sesi dimulai dengan waktu untuk terkoneksi dan bersahabat. Ini adalah waktu untuk menyambut tamu, membuat mereka merasa seperti di rumah sendiri, diterima, dan dikasihi.",
          },
          {
            title: "Pengajaran",
            body:
              "Pengajaran di Alpha mencakup konten yang sederhana, singkat, dan mudah dipahami melalui video.",
          },
          {
            title: "Percakapan",
            body:
              "Setelah video, para tamu masuk ke dalam kelompok kecil untuk berdiskusi, bertanya, dan saling mendengar.",
          },
        ],
      },
      {
        heading: "Bagaimana mengikutinya?",
        body:
          "Alpha biasanya berlangsung dalam beberapa sesi mingguan di gereja. Hubungi admin kami melalui WhatsApp untuk informasi jadwal terbaru dan cara mendaftar pada batch berikutnya.",
      },
    ],
  },
  {
    path: "/SJ",
    eyebrow: "PROGRAM GEIS CCC",
    title: "Spiritual Journey",
    tagline:
      "Perjalanan pemuridan untuk bertumbuh dalam iman, identitas, dan tujuan hidup.",
    intro:
      "Spiritual Journey adalah perjalanan pemuridan untuk membantu setiap pribadi bertumbuh dalam iman, identitas, dan tujuan hidup. Program ini menolong jemaat memahami proses pertumbuhan rohani secara lebih terarah.",
    bgColor: "#d4e8d8",
    sections: [
      {
        heading: "Mengapa Spiritual Journey?",
        body:
          "Bertumbuh dalam iman bukan peristiwa sekali jadi - ia adalah perjalanan. Spiritual Journey memberi peta yang jelas: dari mengenal Tuhan, dipulihkan oleh-Nya, hingga menemukan panggilan hidup.",
      },
      {
        heading: "Tahapan perjalanan",
        body:
          "Program ini disusun dalam beberapa tahap progresif. Setiap tahap menolong jemaat menggali identitas dalam Kristus, membangun karakter, dan menemukan area pelayanan yang sesuai dengan panggilannya.",
      },
      {
        heading: "Mentoring & komunitas",
        body:
          "Selain materi terstruktur, Spiritual Journey berjalan dalam komunitas kecil dengan pendampingan mentor. Kamu tidak berjalan sendirian - ada saudara seiman yang mendoakan dan menemani.",
      },
    ],
  },
  {
    path: "/homecell",
    eyebrow: "PROGRAM GEIS CCC",
    title: "Homecell",
    tagline: "Ruang bertumbuh bersama dalam komunitas yang lebih dekat.",
    intro:
      "Homecell menjadi tempat untuk saling mengenal, berdoa, berdiskusi, dan berjalan bersama dalam komunitas yang lebih dekat. Ruang kecil yang hangat untuk bertumbuh bersama dalam Tuhan.",
    bgColor: "#f5d7c8",
    sections: [
      {
        heading: "Apa itu Homecell?",
        body:
          "Homecell adalah komunitas kecil jemaat yang bertemu rutin di rumah atau tempat lain di luar ibadah Minggu. Di sini setiap orang dikenal namanya, didoakan, dan bertumbuh bersama dalam suasana keluarga.",
      },
      {
        heading: "Apa yang dilakukan saat Homecell?",
        body:
          "Pertemuan biasanya diisi dengan pujian sederhana, sharing firman, diskusi, dan doa bersama. Tidak ada format yang kaku - yang utama adalah kehadiran satu sama lain dan keterbukaan untuk saling menguatkan.",
      },
      {
        heading: "Bagaimana bergabung?",
        body:
          "Setiap Homecell terbuka untuk anggota baru. Hubungi admin kami untuk dihubungkan dengan kelompok Homecell terdekat yang sesuai dengan lokasi atau tahap hidupmu.",
      },
    ],
  },
];
