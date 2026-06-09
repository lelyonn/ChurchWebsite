export const SITE_INFO = {
  name: "GEIS Christian Creative Church",
  shortName: "GEIS CCC",
  fullName: "Gereja El-Shaddai Injil Sepenuh",
  tagline: "Gereja yang Kreatif, Relevan, dan berdampak bagi generasi saat ini.",
  location: {
    street: "Jl. RM Said No. 233",
    area: "Manahan, Solo",
    mapsUrl: "https://share.google/gMQJXhHA3Pmvb8bCL",
  },
  social: {
    instagramUrl: "https://www.instagram.com/geisccc/",
    instagramLabel: "Instagram @geisccc",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=6282135329709&text&type=phone_number&app_absent=0",
  },
  copyright: "\u00a9 2026 GEIS Christian Creative Church. All rights reserved.",
} as const;

export const HOME_ANCHOR_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#programs", label: "Programs" },
  { href: "#visit-us", label: "Visit us" },
] as const;

export const MAIN_ROUTE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/schedule", label: "Schedule" },
] as const;

export const FOOTER_NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/schedule", label: "Schedule" },
] as const;

export const INSTAGRAM_RECENT_POSTS = [
  "https://www.instagram.com/p/DZSHT_JEQEx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DZMtclDEYZT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DZB6uR4R42_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
] as const;

export const EMBEDDED_FOOTER_PATHS = ["/"] as const;

export const FIGMA_PAGE_SIZES = {
  home: { width: 1440, height: 5577 },
  about: { width: 1440, height: 5420 },
} as const;
