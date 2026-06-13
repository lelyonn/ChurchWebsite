export type CoreValueDetail = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  scripture?: string;
  paragraphs: string[];
  bullets?: string[];
  sections?: {
    heading: string;
    body: string;
  }[];
};

export const CORE_VALUES: CoreValueDetail[] = [
  {
    id: "worship-is-our-style",
    title: "Worship Is Our Style",
    subtitle: "Penyembahan",
    summary:
      "Penyembahan adalah gaya hidup yang menghubungkan setiap pribadi dengan Tuhan Yesus secara konsisten.",
    scripture:
      "Yohanes 4:23 - Tetapi saatnya akan datang dan sudah tiba sekarang, bahwa penyembah-penyembah benar akan menyembah Bapa dalam roh dan kebenaran; sebab Bapa menghendaki penyembah-penyembah demikian.",
    paragraphs: [
      "Untuk menjadi Gereja yang creative dan relevan, setiap individu harus terhubung dengan Tuhan Yesus secara konsisten melalui penyembahan yang dijadikan gaya hidup sehari-hari.",
      "Hidup yang menyembah akan menghasilkan:",
    ],
    sections: [
      {
        heading: "Keserupaan",
        body: "Kita akan menjadi seperti siapa yang kita sembah.",
      },
      {
        heading: "Kreatifitas",
        body:
          "Tuhan memberikan kemampuan untuk menghasilkan hal-hal yang baru untuk kita gunakan dalam menjangkau jiwa-jiwa.",
      },
      {
        heading: "Pertumbuhan",
        body:
          "Hidup yang terhubung dengan Tuhan Yesus dalam penyembahan akan memberikan pertumbuhan rohani.",
      },
    ],
  },
  {
    id: "servant-heart",
    title: "Servant Heart",
    subtitle: "Hati Hamba",
    summary:
      "Kami melayani dengan kerendahan hati, ketaatan, dan kesediaan untuk memberi ruang bagi orang lain bertumbuh.",
    scripture:
      "Matius 20:26-28 - Barangsiapa ingin menjadi besar di antara kamu, hendaklah ia menjadi pelayanmu, dan barangsiapa ingin menjadi terkemuka di antara kamu, hendaklah ia menjadi hambamu; sama seperti Anak Manusia datang bukan untuk dilayani, melainkan untuk melayani.",
    paragraphs: [
      "Seluruh kehidupan kita dan apapun yang kita lakukan harus berpusat pada Kristus dan untuk kepentingan Kerajaan Allah.",
      "Hati hamba akan tampak terefleksi dalam hal:",
    ],
    bullets: [
      "Bersedia tunduk dan menghormati kepemimpinan yang Tuhan percayakan dalam GEIS CCC, baik Gembala Sidang, Majelis, Homecell Leader, maupun Koordinator Departemen.",
      "Memiliki hati yang lembut untuk terus belajar berubah ke arah Kristus.",
      "Bersedia ditegur dan fokus pada pemenuhan Visi GEIS CCC.",
    ],
  },
  {
    id: "fathering",
    title: "Fathering",
    subtitle: "Pembapaan",
    summary:
      "Pembapaan rohani menolong generasi menerima identitas, otoritas, dan tujuan dari Tuhan.",
    scripture:
      "Lukas 15:22 - Tetapi ayah itu berkata kepada hamba-hambanya: Lekaslah bawa ke mari jubah yang terbaik, pakaikanlah itu kepadanya dan kenakanlah cincin pada jarinya dan sepatu pada kakinya.",
    paragraphs: [
      "GEIS CCC percaya bahwa pembapaan adalah cara yang Alkitabiah untuk mewariskan nilai-nilai dari generasi ke generasi.",
      "Hubungan guru dan murid mengimpartasikan informasi dan pengetahuan, tetapi hubungan bapa rohani dan anak rohani mengimpartasikan hati dan pewahyuan.",
      "Dibutuhkan kerendahan hati untuk menundukkan diri di dalam proses pembapaan. Bapa rohani kita tidak sempurna, namun mereka adalah otoritas yang Tuhan tempatkan di atas kita.",
    ],
    sections: [
      {
        heading: "Jubah - Identitas",
        body:
          "Ketika dibapai, kita menemukan rasa berharga dan jati diri kita di dalam Tuhan.",
      },
      {
        heading: "Cincin - Otoritas",
        body:
          "Ketika dibapai, kita hidup di bawah covering yang melindungi secara spiritual dan memberikan kuasa.",
      },
      {
        heading: "Sepatu - Tujuan",
        body:
          "Ketika dibapai, bapa rohani membantu menemukan tujuan hidup serta potensi yang tersimpan di dalam diri kita.",
      },
    ],
  },
  {
    id: "reach-in-reach-out",
    title: "Reach In & Reach Out",
    subtitle: "Penginjilan",
    summary:
      "Kami menjangkau ke dalam dan ke luar untuk melaksanakan Amanat Agung dan membawa kabar Injil.",
    scripture:
      "Matius 28:18-20 - Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus, dan ajarlah mereka melakukan segala sesuatu yang telah Kuperintahkan kepadamu.",
    paragraphs: [
      "GEIS CCC lahir untuk melaksanakan Amanat Agung, yakni menyampaikan kabar Injil kepada semua orang.",
      "GEIS CCC percaya bahwa perintah ini bukan hanya untuk hamba Tuhan atau pejabat gerejawi, namun untuk semua pengikut Kristus.",
    ],
  },
  {
    id: "relevant",
    title: "Relevant",
    subtitle: "Relevan",
    summary:
      "Pesan Injil tidak berubah, tetapi cara menyampaikannya perlu relevan dengan generasi dan perkembangan zaman.",
    paragraphs: [
      "Berita Injil selalu sama dan tidak akan pernah berubah.",
      "Namun cara atau metode dalam menyampaikan kabar Injil perlu disesuaikan dengan generasi dan perubahan zaman yang terjadi.",
    ],
  },
] as const;
