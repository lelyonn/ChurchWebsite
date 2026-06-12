import ckidsBible from "../../assets/images/community/ckids-bible.jpg";
import ckidsCircle from "../../assets/images/community/ckids-circle.jpg";
import ckidsClassroom from "../../assets/images/community/ckids-classroom.jpg";
import ckidsListening from "../../assets/images/community/ckids-listening.jpg";
import ckidsReading from "../../assets/images/community/ckids-reading.jpg";
import loveCommunity from "../../assets/images/community/love-community.jpg";
import worshipCommunity from "../../assets/images/community/worship-community.jpg";
import worshipHands from "../../assets/images/community/worship-hands.jpg";
import worshipLeader from "../../assets/images/community/worship-leader.jpg";
import worshipPrayer from "../../assets/images/community/worship-prayer.jpg";
import worshipResponse from "../../assets/images/community/worship-response.jpg";
import worshipTeam from "../../assets/images/community/worship-team.jpg";
import youthService from "../../assets/images/community/youth-service.jpg";

export const COMMUNITY_PHOTOS = {
  ckidsBible,
  ckidsCircle,
  ckidsClassroom,
  ckidsListening,
  ckidsReading,
  loveCommunity,
  worshipCommunity,
  worshipHands,
  worshipLeader,
  worshipPrayer,
  worshipResponse,
  worshipTeam,
  youthService,
} as const;

export const CKIDS_PHOTOS = [
  {
    src: ckidsClassroom,
    alt: "Anak-anak Ckids belajar bersama di ruang kelas",
    label: "Learning",
    objectPosition: "50% 48%",
  },
  {
    src: ckidsBible,
    alt: "Anak-anak Ckids membaca Alkitab bersama",
    label: "Bible Time",
    objectPosition: "58% 52%",
  },
  {
    src: ckidsCircle,
    alt: "Kelompok kecil Ckids berdiskusi bersama leader",
    label: "Small Group",
    objectPosition: "50% 50%",
  },
  {
    src: ckidsReading,
    alt: "Anak Ckids membaca Alkitab dengan fokus",
    label: "Faith",
    objectPosition: "54% 48%",
  },
  {
    src: ckidsListening,
    alt: "Anak Ckids mendengarkan pengajaran",
    label: "Safe Space",
    objectPosition: "52% 45%",
  },
] as const;

export const WORSHIP_PHOTOS = [
  {
    src: worshipCommunity,
    alt: "Suasana ibadah komunitas GEIS CCC",
    label: "Sunday Worship",
    objectPosition: "50% 54%",
  },
  {
    src: worshipTeam,
    alt: "Tim worship memimpin pujian di GEIS CCC",
    label: "Worship Team",
    objectPosition: "50% 46%",
  },
  {
    src: worshipHands,
    alt: "Jemaat mengangkat tangan dalam penyembahan",
    label: "Worship",
    objectPosition: "48% 52%",
  },
  {
    src: worshipLeader,
    alt: "Worship leader memimpin pujian",
    label: "Praise",
    objectPosition: "50% 44%",
  },
  {
    src: worshipResponse,
    alt: "Jemaat berdoa dan menyembah Tuhan",
    label: "Response",
    objectPosition: "50% 44%",
  },
  {
    src: worshipPrayer,
    alt: "Jemaat berdoa di ruang ibadah",
    label: "Prayer",
    objectPosition: "50% 46%",
  },
] as const;
