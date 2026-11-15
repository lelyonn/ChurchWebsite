export const SITE_URL = "https://www.geisccc.my.id";

export interface RouteSeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string;
  ogType?: "website" | "article";
  robots?: string;
  jsonLd: Record<string, unknown>;
}

export const CHURCH_SCHEMA = {
  "@type": "Church",
  "@id": `${SITE_URL}/#church`,
  name: "GEIS CCC Solo",
  alternateName: [
    "Christian Creative Church",
    "Gereja El-Shaddai Injil Sepenuh",
    "GEIS CCC",
    "GEIS Solo",
    "GEIS CCC Manahan",
  ],
  description:
    "Gereja Kristen di Solo (Surakarta) yang kreatif, relevan, dan berdampak bagi generasi saat ini.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+62-821-3532-9709",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. RM Said No. 233",
    addressLocality: "Manahan, Surakarta",
    addressRegion: "Jawa Tengah",
    postalCode: "57139",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.5539,
    longitude: 110.8122,
  },
  hasMap: "https://share.google/gMQJXhHA3Pmvb8bCL",
  sameAs: [
    "https://www.instagram.com/geisccc/",
    "https://share.google/gMQJXhHA3Pmvb8bCL",
  ],
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ROUTE_SEO: Record<string, RouteSeoConfig> = {
  "/": {
    title: "GEIS CCC Solo - Christian Creative Church | Gereja Manahan",
    description:
      "Selamat datang di GEIS CCC Solo (Christian Creative Church) Manahan Surakarta. Gereja yang kreatif, relevan, dan berdampak bagi generasi saat ini.",
    keywords:
      "GEIS CCC, GEIS Solo, Christian Creative Church, Gereja Solo, Gereja Manahan, Gereja Surakarta, Sunday Service Solo, Jadwal Ibadah Solo",
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "GEIS CCC Solo",
          description: "Website resmi GEIS CCC Solo - Christian Creative Church",
          publisher: { "@id": `${SITE_URL}/#church` },
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: "GEIS CCC Solo - Christian Creative Church | Gereja Manahan",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Selamat datang di GEIS CCC Solo (Christian Creative Church) Manahan Surakarta. Gereja yang kreatif, relevan, dan berdampak bagi generasi saat ini.",
        },
      ],
    },
  },
  "/schedule": {
    title: "Jadwal Ibadah GEIS CCC Solo | Sunday Service, Youth & Ckids",
    description:
      "Jadwal ibadah lengkap GEIS CCC Solo: Sunday Service, Ckids Church, Youth Service, doa malam Power House, dan saat teduh online Pagi Bersama Tuhan (PBT).",
    keywords:
      "jadwal ibadah geis ccc, sunday service solo, youth service solo, ckids solo, doa malam powerhouse, pagi bersama tuhan, jadwal gereja solo",
    canonical: `${SITE_URL}/schedule`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/schedule#webpage`,
          url: `${SITE_URL}/schedule`,
          name: "Jadwal Ibadah GEIS CCC Solo | Sunday Service, Youth & Ckids",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Jadwal ibadah lengkap GEIS CCC Solo: Sunday Service, Ckids Church, Youth Service, doa malam Power House, dan saat teduh online Pagi Bersama Tuhan (PBT).",
        },
        {
          "@type": "Event",
          name: "Sunday Service GEIS CCC",
          description:
            "Ibadah umum untuk seluruh jemaat dengan pujian, penyembahan, dan khotbah firman Tuhan.",
          eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: "https://schema.org/Sunday",
            startTime: "09:00:00+07:00",
            endTime: "10:15:00+07:00",
          },
          location: { "@id": `${SITE_URL}/#church` },
          organizer: { "@id": `${SITE_URL}/#church` },
        },
        {
          "@type": "Event",
          name: "Ckids Service GEIS CCC",
          description:
            "Pelayanan ibadah anak dan balita bersamaan dengan Sunday Service di GEIS CCC Solo.",
          eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: "https://schema.org/Sunday",
            startTime: "09:00:00+07:00",
            endTime: "10:15:00+07:00",
          },
          location: { "@id": `${SITE_URL}/#church` },
          organizer: { "@id": `${SITE_URL}/#church` },
        },
        {
          "@type": "Event",
          name: "Youth Service GEIS CCC",
          description:
            "Ibadah pemuda dan remaja dengan pujian kontemporer dan khotbah relevan.",
          eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: "https://schema.org/Sunday",
            startTime: "11:00:00+07:00",
            endTime: "12:15:00+07:00",
          },
          location: { "@id": `${SITE_URL}/#church` },
          organizer: { "@id": `${SITE_URL}/#church` },
        },
        {
          "@type": "Event",
          name: "Power House GEIS CCC",
          description:
            "Pertemuan doa dan pujian malam Jumat untuk mencari hadirat Tuhan lebih dalam.",
          eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: "https://schema.org/Friday",
            startTime: "18:00:00+07:00",
          },
          location: { "@id": `${SITE_URL}/#church` },
          organizer: { "@id": `${SITE_URL}/#church` },
        },
      ],
    },
  },
  "/about": {
    title: "Tentang Kami - GEIS CCC Solo | Visi, Misi & Pastoral Team",
    description:
      "Mengenal visi, misi, nilai inti (core values), sejarah, dan tim pastoral GEIS CCC Solo. Gereja El-Shaddai Injil Sepenuh yang berdampak bagi kota Solo.",
    keywords:
      "tentang geis ccc, visi misi geis ccc, pastoral team geis solo, pendeta geis ccc, core values geis, sejarah geis solo",
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "AboutPage",
          "@id": `${SITE_URL}/about#webpage`,
          url: `${SITE_URL}/about`,
          name: "Tentang Kami - GEIS CCC Solo | Visi, Misi & Pastoral Team",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Mengenal visi, misi, nilai inti (core values), sejarah, dan tim pastoral GEIS CCC Solo. Gereja El-Shaddai Injil Sepenuh yang berdampak bagi kota Solo.",
        },
      ],
    },
  },
  "/youth": {
    title: "Youth Service GEIS CCC Solo | Komunitas Pemuda & Remaja",
    description:
      "Komunitas pemuda dan remaja GEIS CCC Solo. Ibadah Youth Service setiap Minggu jam 11.00 WIB dengan musik kontemporer, firman relevan, dan persahabatan solid.",
    keywords:
      "youth service solo, gereja pemuda solo, geis youth ccc, ibadah remaja solo, komunitas kristen muda solo",
    canonical: `${SITE_URL}/youth`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/youth#webpage`,
          url: `${SITE_URL}/youth`,
          name: "Youth Service GEIS CCC Solo | Komunitas Pemuda & Remaja",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Komunitas pemuda dan remaja GEIS CCC Solo. Ibadah Youth Service setiap Minggu jam 11.00 WIB dengan musik kontemporer, firman relevan, dan persahabatan solid.",
        },
      ],
    },
  },
  "/ckids": {
    title: "Ckids Church GEIS CCC Solo | Sekolah Minggu Anak & Balita",
    description:
      "Pelayanan anak Ckids Church di GEIS CCC Solo setiap Minggu jam 09.00 WIB. Tempat anak-anak belajar tentang Yesus dengan sukacita, aman, dan kreatif.",
    keywords:
      "sekolah minggu solo, ckids geis ccc, gereja anak solo, ibadah anak solo, sunday school surakarta",
    canonical: `${SITE_URL}/ckids`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ckids#webpage`,
          url: `${SITE_URL}/ckids`,
          name: "Ckids Church GEIS CCC Solo | Sekolah Minggu Anak & Balita",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Pelayanan anak Ckids Church di GEIS CCC Solo setiap Minggu jam 09.00 WIB. Tempat anak-anak belajar tentang Yesus dengan sukacita, aman, dan kreatif.",
        },
      ],
    },
  },
  "/powerhouse": {
    title: "Powerhouse Prayer & Worship | Doa Malam Jumat GEIS CCC Solo",
    description:
      "Pertemuan doa dan pujian Power House setiap hari Jumat pukul 18.00 WIB di GEIS CCC Solo. Suasana intim mencari hadirat Tuhan dan mengalami pemulihan rohani.",
    keywords:
      "doa malam solo, powerhouse prayer geis, doa jumat solo, persekutuan doa surakarta, praise and worship geis ccc",
    canonical: `${SITE_URL}/powerhouse`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/powerhouse#webpage`,
          url: `${SITE_URL}/powerhouse`,
          name: "Powerhouse Prayer & Worship | Doa Malam Jumat GEIS CCC Solo",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Pertemuan doa dan pujian Power House setiap hari Jumat pukul 18.00 WIB di GEIS CCC Solo. Suasana intim mencari hadirat Tuhan dan mengalami pemulihan rohani.",
        },
      ],
    },
  },
  "/alpha": {
    title: "Alpha Course Solo - GEIS CCC | Ruang Diskusi Iman & Hidup",
    description:
      "Ikuti Alpha Course di GEIS CCC Solo. Ruang terbuka yang ramah dan aman untuk mengeksplorasi pertanyaan besar tentang hidup, iman, dan tujuan bersama teman baru.",
    keywords:
      "alpha course solo, alpha indonesia, kelas alpha geis ccc, diskusi iman kristen solo, program alpha gereja solo",
    canonical: `${SITE_URL}/alpha`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/alpha#webpage`,
          url: `${SITE_URL}/alpha`,
          name: "Alpha Course Solo - GEIS CCC | Ruang Diskusi Iman & Hidup",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Ikuti Alpha Course di GEIS CCC Solo. Ruang terbuka yang ramah dan aman untuk mengeksplorasi pertanyaan besar tentang hidup, iman, dan tujuan bersama teman baru.",
        },
        {
          "@type": "Course",
          name: "Alpha Course Solo",
          description:
            "Ruang untuk mengenal iman, bertanya, berdiskusi, dan mengalami Tuhan secara pribadi bersama GEIS CCC Solo.",
          provider: { "@id": `${SITE_URL}/#church` },
        },
      ],
    },
  },
  "/SJ": {
    title: "Spiritual Journey - GEIS CCC Solo | Pemuridan Komunitas",
    description:
      "Program pemuridan Spiritual Journey di GEIS CCC Solo untuk bertumbuh dalam iman, identitas, dan tujuan hidup bersama mentor dan komunitas kecil.",
    keywords:
      "spiritual journey geis ccc, pemuridan solo, mentoring rohani solo, pembinaan jemaat geis, kelas pemuridan solo",
    canonical: `${SITE_URL}/SJ`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/SJ#webpage`,
          url: `${SITE_URL}/SJ`,
          name: "Spiritual Journey - GEIS CCC Solo | Pemuridan Komunitas",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Program pemuridan Spiritual Journey di GEIS CCC Solo untuk bertumbuh dalam iman, identitas, dan tujuan hidup bersama mentor dan komunitas kecil.",
        },
      ],
    },
  },
  "/homecell": {
    title: "Homecell GEIS CCC Solo | Persekutuan Komunitas Hangat",
    description:
      "Komunitas kecil Homecell GEIS CCC Solo. Ruang hangat untuk saling mengenal, berdoa, berbagi firman, dan bertumbuh bersama dalam suasana kekeluargaan.",
    keywords:
      "homecell geis ccc, komsel solo, persekutuan sel surakarta, cell group solo, komunitas keluarga kristen solo",
    canonical: `${SITE_URL}/homecell`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        CHURCH_SCHEMA,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/homecell#webpage`,
          url: `${SITE_URL}/homecell`,
          name: "Homecell GEIS CCC Solo | Persekutuan Komunitas Hangat",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#church` },
          description:
            "Komunitas kecil Homecell GEIS CCC Solo. Ruang hangat untuk saling mengenal, berdoa, berbagi firman, dan bertumbuh bersama dalam suasana kekeluargaan.",
        },
      ],
    },
  },
};

/**
 * Fallback metadata for unmatched / 404 routes.
 */
export const NOT_FOUND_SEO: RouteSeoConfig = {
  title: "Halaman Tidak Ditemukan - GEIS CCC Solo",
  description:
    "Halaman yang Anda tuju tidak ditemukan di situs resmi GEIS CCC Solo (Christian Creative Church).",
  keywords: "GEIS CCC, Solo, Christian Creative Church",
  canonical: `${SITE_URL}/`,
  ogImage: DEFAULT_OG_IMAGE,
  ogType: "website",
  robots: "noindex, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [CHURCH_SCHEMA],
  },
};

/**
 * Resolve SEO metadata for the current pathname.
 * Handles exact matches, case-insensitive mapping for known paths like /sj -> /SJ,
 * and trailing slash normalization.
 */
export function getRouteSeo(rawPathname: string): RouteSeoConfig {
  let normalized = rawPathname.trim();

  // Strip trailing slashes unless root
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  // Exact match
  if (ROUTE_SEO[normalized]) {
    return ROUTE_SEO[normalized];
  }

  // Case-insensitive match for known paths (e.g. /sj -> /SJ)
  const lower = normalized.toLowerCase();
  for (const [key, config] of Object.entries(ROUTE_SEO)) {
    if (key.toLowerCase() === lower) {
      return config;
    }
  }

  return NOT_FOUND_SEO;
}

/**
 * AppSec Hardening:
 * Safely escape JSON-LD data for embedding into <script type="application/ld+json">.
 * Prevents HTML entity confusion and script tag breakouts (e.g. </script> XSS attacks).
 */
export function sanitizeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
