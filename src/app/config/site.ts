const WA_PHONE = "6282135329709";
const WA_DEFAULT_MESSAGE = encodeURIComponent(
  "Halo admin GEIS CCC, saya ingin bertanya tentang informasi gereja dan jadwal ibadah"
);

export const SITE_INFO = {
  name: "Geis CCC",
  shortName: "GEIS CCC",
  fullName: "Gereja El-Shaddai Injil Sepenuh",
  tagline: "Gereja yang Kreatif, Relevan, dan berdampak bagi generasi saat ini.",
  contact: {
    phone: "0821-3532-9709",
    whatsappRaw: WA_PHONE,
  },
  location: {
    street: "Jl. RM Said No. 233",
    area: "Manahan, Solo",
    mapsUrl: "https://share.google/gMQJXhHA3Pmvb8bCL",
  },
  social: {
    instagramUrl: "https://www.instagram.com/geisccc/",
    instagramLabel: "Instagram @geisccc",
    whatsappUrl: `https://wa.me/${WA_PHONE}?text=${WA_DEFAULT_MESSAGE}`,
  },
  copyright: "\u00a9 2026 Geis CCC. All rights reserved.",
} as const;

export const HOME_ANCHOR_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#programs", label: "Programs" },
  { href: "#visit-us", label: "Lokasi" },
] as const;

export const MAIN_ROUTE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/schedule", label: "Schedule" },
] as const;

export const MINISTRY_ROUTE_LINKS = [
  { to: "/youth", label: "Youth" },
  { to: "/ckids", label: "Ckids" },
  { to: "/powerhouse", label: "Powerhouse" },
] as const;

export const FOOTER_NAV_LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang Kami" },
  { to: "/schedule", label: "Jadwal Ibadah" },
  { to: "/schedule#pagi-bersama-tuhan", label: "Pagi Bersama Tuhan" },
  { to: "/alpha", label: "Program Alpha" },
] as const;

export const INSTAGRAM_RECENT_POSTS = [
  "https://www.instagram.com/p/DZSHT_JEQEx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DZMtclDEYZT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DZB6uR4R42_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
] as const;

export const EMBEDDED_FOOTER_PATHS = [] as const;

export const FIGMA_PAGE_SIZES = {
  home: { width: 1440, height: 6697 },
  about: { width: 1440, height: 5844 },
} as const;
