# Panduan Edit Manual GEIS CCC Web

File ini jadi peta cepat kalau kamu mau edit web secara manual tanpa perlu bongkar semua folder.

## Jalankan Project

```bash
npm install
npm run dev
```

Untuk cek hasil akhir sebelum upload:

```bash
npm run build
```

## File Yang Paling Sering Diedit

| Yang mau diedit | File |
| --- | --- |
| Nama gereja, alamat, link Instagram, WhatsApp, Google Maps, copyright | `src/app/config/site.ts` |
| Menu navigasi global hamburger | `src/app/config/site.ts` bagian `MAIN_ROUTE_LINKS` dan `src/app/data/programs.ts` |
| Menu navigasi section homepage | `src/app/config/site.ts` bagian `HOME_ANCHOR_LINKS` |
| Post Instagram di section "OUR RECENT POST!" | `src/app/config/site.ts` bagian `INSTAGRAM_RECENT_POSTS` |
| Jadwal ibadah dan deskripsi schedule | `src/app/data/schedules.ts` |
| Konten halaman program seperti Alpha, Spiritual Journey, Homecell | `src/app/data/programs.ts` |
| Background video homepage | `src/assets/videos/homepage-hero-background.mp4` |
| Tampilan homepage hasil Figma | `src/imports/AltHomepageDesktop/index.tsx` |
| Tampilan mobile homepage | `src/app/pages/MobileHomePage.tsx` |
| Tampilan about hasil Figma | `src/imports/AltRouteAboutFullProfilePage/index.tsx` |
| Tampilan mobile about | `src/app/pages/MobileAboutPage.tsx` |
| Font global | `src/styles/fonts.css` |
| Warna/theme global | `src/styles/theme.css` |
| Layout utama, hamburger nav, sticky nav, scroll anchor | `src/app/layouts/RootLayout.tsx`, `src/app/components/GlobalRouteMenu.tsx`, dan `src/app/components/StickyNav.tsx` |

## Struktur Folder

```text
src/
  app/
    components/       Komponen reusable untuk layout, nav, footer, halaman detail.
    config/           Data global site: profil gereja, link, ukuran frame Figma.
    data/             Konten yang aman diedit manual: jadwal dan program.
    layouts/          Layout utama web.
    pages/            Halaman route React.
    routes.tsx        Daftar URL/route.
  assets/
    videos/           Video yang dipakai di website.
  imports/            Export dari Figma. Edit seperlunya karena banyak posisi fixed.
  styles/             CSS global, Tailwind, font, theme.
```

## Cara Edit Konten

### Ubah Alamat, Sosmed, WhatsApp

Buka `src/app/config/site.ts`, lalu edit bagian:

```ts
SITE_INFO.location
SITE_INFO.social
```

### Ubah Menu Navigasi Global

Buka `src/app/config/site.ts`, lalu edit:

```ts
MAIN_ROUTE_LINKS
```

Menu `Programs` otomatis mengambil isi dari `src/app/data/programs.ts`.

### Ubah Menu Navigasi Section Homepage

Buka `src/app/config/site.ts`, lalu edit:

```ts
HOME_ANCHOR_LINKS
```

Pastikan `href` cocok dengan `id` section di homepage. Contoh `href: "#services"` harus punya elemen dengan `id="services"`.

### Ubah Jadwal Ibadah

Buka `src/app/data/schedules.ts`, lalu edit isi `SCHEDULE_ITEMS`.

Field penting:

- `title`: nama jadwal.
- `day`: hari.
- `time`: jam.
- `description`: penjelasan panjang.
- `bgColor`: warna background kartu.

### Ubah Post Instagram Schedule

Buka `src/app/config/site.ts`, lalu edit:

```ts
INSTAGRAM_RECENT_POSTS
```

Isi array ini dengan URL post/reel Instagram publik. Contoh:

```ts
export const INSTAGRAM_RECENT_POSTS = [
  "https://www.instagram.com/p/POST_ID/",
  "https://www.instagram.com/reel/REEL_ID/",
] as const;
```

Embed Instagram hanya bisa tampil kalau post/reel public dan browser tidak memblokir script Instagram.

### Ubah Program

Buka `src/app/data/programs.ts`, lalu edit `PROGRAM_DETAIL_PAGES`.

Field penting:

- `path`: URL halaman, contoh `/alpha`.
- `title`: judul program.
- `tagline`: kalimat pendek di hero.
- `intro`: paragraf pembuka.
- `sections`: blok konten detail.

## Cara Edit Homepage Figma

Homepage utama ada di:

```text
src/imports/AltHomepageDesktop/index.tsx
```

Karena file ini hasil export Figma, banyak elemen pakai posisi seperti:

```tsx
left-[360px] top-[716px] w-[470px]
```

Kalau mau geser elemen, ubah angka `left`, `top`, `w`, atau `h`. Kalau mau ubah teks, cari teksnya langsung dengan search di editor.

## Cara Edit Tampilan Mobile

Versi mobile tidak memakai frame desktop yang dikecilkan. File khususnya:

```text
src/app/pages/MobileHomePage.tsx
src/app/pages/MobileAboutPage.tsx
```

Edit teks dan susunan section mobile di file ini. Data jadwal tetap ambil dari `src/app/data/schedules.ts`, dan data program tetap ambil dari `src/app/data/programs.ts`.

## Ganti Background Video Homepage

Ganti file ini dengan video baru:

```text
src/assets/videos/homepage-hero-background.mp4
```

Nama file sebaiknya tetap sama supaya import tidak perlu diubah. Kalau nama file berubah, update import di:

```text
src/imports/AltHomepageDesktop/index.tsx
```

## Catatan Aman

- Folder `node_modules/` dan `dist/` tidak perlu diedit manual.
- Folder `src/app/data/` dan `src/app/config/` adalah tempat paling aman untuk edit konten.
- Folder `src/imports/` boleh diedit, tapi hati-hati karena itu hasil Figma export dan ukurannya panjang.
- Setelah edit manual, jalankan `npm run build` untuk memastikan tidak ada error.
