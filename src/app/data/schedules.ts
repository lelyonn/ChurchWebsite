export type ScheduleItem = {
  title: string;
  day: string;
  time: string;
  description: string;
  bgColor: string;
  placeholderBg: string;
  placeholderBorder: string;
  iconBg: string;
  textColor?: string;
  accentColor?: string;
};

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    title: "Sunday Service",
    day: "Setiap Minggu",
    time: "09.00 - 10.15",
    description:
      "Ibadah umum untuk seluruh jemaat dengan pujian, penyembahan, dan khotbah firman Tuhan. Tempat di mana komunitas berkumpul untuk bertumbuh dalam iman bersama-sama. Ibadah ini dirancang untuk semua kalangan, dari anak muda hingga dewasa, dengan pesan yang relevan dan praktis untuk kehidupan sehari-hari.",
    bgColor: "#e8f4f8",
    placeholderBg: "rgba(255,255,255,0.55)",
    placeholderBorder: "rgba(125,160,180,0.35)",
    iconBg: "rgba(181,27,42,0.12)",
  },
  {
    title: "Ckids",
    day: "Setiap Minggu",
    time: "09.00 - 10.15",
    description:
      "Pelayanan khusus untuk anak-anak yang berlangsung bersamaan dengan Sunday Service. Program interaktif yang dirancang untuk membantu anak-anak belajar tentang Yesus dengan cara yang menyenangkan melalui cerita Alkitab, permainan, musik, dan aktivitas kreatif. Ruangan yang aman dan pelayan yang terlatih siap melayani buah hati Anda.",
    bgColor: "#d4e8d8",
    placeholderBg: "rgba(255,255,255,0.55)",
    placeholderBorder: "rgba(120,160,130,0.35)",
    iconBg: "rgba(181,27,42,0.12)",
  },
  {
    title: "Youth Service",
    day: "Setiap Minggu",
    time: "11.00 - 12.15",
    description:
      "Ibadah khusus untuk remaja dan pemuda dengan worship musik kontemporer dan firman yang relevan dengan kehidupan generasi muda. Tempat di mana para pemuda dapat bertumbuh dalam iman, membangun persahabatan yang solid, dan menemukan tujuan hidup mereka di dalam Kristus. Diskusi terbuka dan komunitas yang mendukung.",
    bgColor: "#f5d7c8",
    placeholderBg: "rgba(255,255,255,0.55)",
    placeholderBorder: "rgba(190,140,115,0.35)",
    iconBg: "rgba(181,27,42,0.12)",
  },
  {
    title: "Power House",
    day: "Setiap Jumat",
    time: "18.00",
    description:
      "Pertemuan doa dan pujian di malam Jumat untuk mencari hadirat Tuhan lebih dalam. Waktu khusus untuk bersekutu, saling mendoakan, dan mengalami kuasa Roh Kudus. Terbuka untuk semua umur yang ingin bertumbuh dalam kehidupan doa dan mengalami pemulihan rohani. Suasana intim dan penuh dengan kehadiran Tuhan.",
    bgColor: "#e5d4e8",
    placeholderBg: "rgba(255,255,255,0.55)",
    placeholderBorder: "rgba(160,130,170,0.35)",
    iconBg: "rgba(181,27,42,0.12)",
  },
  {
    title: "Pagi Bersama Tuhan",
    day: "Senin - Sabtu",
    time: "05.30",
    description:
      "Saat teduh pagi setiap hari untuk memulai hari dengan renungan firman Tuhan dan doa bersama. Waktu khusus untuk memperkuat hubungan pribadi dengan Tuhan sebelum memulai aktivitas sehari-hari. Program ini membantu membangun disiplin rohani dan memberikan fondasi yang kuat untuk menghadapi tantangan hari ini dengan iman yang teguh.",
    bgColor: "#f8ead4",
    placeholderBg: "rgba(255,255,255,0.55)",
    placeholderBorder: "rgba(200,170,110,0.35)",
    iconBg: "rgba(181,27,42,0.12)",
  },
];
