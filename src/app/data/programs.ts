export type ProgramSection = {
  heading: string;
  body: string;
};

export type ProgramDetail = {
  path: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  bgColor: string;
  sections: ProgramSection[];
};

export const PROGRAM_DETAIL_PAGES: ProgramDetail[] = [
  {
    path: "/alpha",
    eyebrow: "PROGRAM GEIS CCC",
    title: "Alpha",
    tagline: "Ruang terbuka untuk mengenal iman dan mengalami Tuhan secara pribadi.",
    intro:
      "Alpha adalah ruang untuk mengenal iman, bertanya, berdiskusi, dan mengalami Tuhan secara pribadi. Alpha cocok untuk pengunjung baru, anak muda, atau siapa pun yang ingin memahami dasar iman Kristen dalam suasana terbuka.",
    bgColor: "#e8f4f8",
    sections: [
      {
        heading: "Untuk siapa Alpha?",
        body:
          "Alpha terbuka untuk semua kalangan - pengunjung baru, anak muda, mahasiswa, hingga keluarga muda yang ingin mengenal Yesus lebih dekat. Tidak perlu latar belakang Kristen; cukup hadir dengan keterbukaan untuk bertanya dan berdiskusi.",
      },
      {
        heading: "Apa yang dipelajari?",
        body:
          "Setiap pertemuan membahas pertanyaan-pertanyaan fundamental seputar iman: siapa Yesus, mengapa Ia datang, bagaimana berdoa, dan apa artinya hidup bersama Tuhan. Suasana santai, tanpa tekanan, dengan ruang diskusi yang luas.",
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
