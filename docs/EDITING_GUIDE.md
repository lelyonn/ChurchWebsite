# Panduan Edit Manual GEIS CCC Web

Panduan ini dibuat supaya kamu tetap bisa mengedit website GEIS CCC walaupun tidak sedang memakai Codex. Fokusnya bukan menghafal React, tapi tahu file mana yang harus dibuka, apa yang aman diubah, dan cara mengecek hasilnya.

## Cara Paling Aman Mengedit

Untuk perubahan biasa, ikuti urutan ini:

1. Cari jenis perubahan di tabel "Peta File Cepat".
2. Edit file yang disebutkan.
3. Jalankan website dengan `npm run dev`.
4. Cek desktop dan HP.
5. Jalankan `npm run build` sebelum push.

Folder paling aman untuk edit konten:

```text
src/app/config/
src/app/data/
src/app/pages/
```

Folder yang perlu lebih hati-hati:

```text
src/imports/
```

Folder `src/imports/` berisi hasil export Figma untuk tampilan desktop. Banyak elemen memakai posisi fixed seperti `left-[40px] top-[120px]`, jadi kalau menggeser satu section biasanya perlu menggeser section lain juga.

## Jalankan Project

Install dependency:

```bash
npm install
```

Jalankan local development:

```bash
npm run dev
```

Biasanya website terbuka di:

```text
http://localhost:5173/
```

Cek build sebelum push:

```bash
npm run build
```

Folder `dist/` adalah hasil build. Folder ini tidak perlu diedit dan tidak perlu dipush.

## Buka Website Dari HP

Pastikan laptop dan HP berada di Wi-Fi yang sama.

Jalankan Vite supaya bisa diakses dari perangkat lain:

```bash
npm run dev -- --host 0.0.0.0
```

Cari IPv4 laptop:

```powershell
ipconfig
```

Cari bagian Wi-Fi, lalu lihat `IPv4 Address`. Contoh:

```text
192.168.1.23
```

Di browser HP, buka:

```text
http://192.168.1.23:5173/
```

Kalau tidak bisa dibuka:

- Pastikan HP dan laptop satu jaringan.
- Izinkan akses firewall Windows untuk Node.js/Vite.
- Jangan pakai `localhost` di HP, karena `localhost` di HP artinya HP itu sendiri, bukan laptop.

## Peta File Cepat

| Yang mau diedit | File |
| --- | --- |
| Nama gereja, alamat, link Instagram, WhatsApp, Google Maps, copyright | `src/app/config/site.ts` |
| Menu hamburger desktop dan mobile | `src/app/config/site.ts` |
| Menu section homepage seperti About, Services, Programs, Visit | `src/app/config/site.ts` |
| Link route Youth, Ckids, Power House | `src/app/config/site.ts` |
| Jadwal ibadah dan kegiatan | `src/app/data/schedules.ts` |
| Konten Alpha, Spiritual Journey, Homecell | `src/app/data/programs.ts` |
| Halaman detail Youth, Ckids, Power House | `src/app/pages/MinistryPage.tsx` |
| Daftar route/URL website | `src/app/routes.tsx` |
| Homepage desktop | `src/imports/AltHomepageDesktop/index.tsx` |
| Homepage mobile | `src/app/pages/MobileHomePage.tsx` |
| About desktop | `src/imports/AltRouteAboutFullProfilePage/index.tsx` |
| About mobile | `src/app/pages/MobileAboutPage.tsx` |
| Halaman schedule | `src/app/components/SchedulePage.tsx` |
| Logo Alpha | `src/assets/images/alpha-logo.png` |
| Foto pastors | `src/assets/images/pastors-photo.jpeg` |
| Video Ckids | `src/assets/videos/ckids-hero.mp4` |
| Favicon logo tab browser | `public/favicon.png` |
| Font global | `src/styles/fonts.css` |
| Warna/theme global | `src/styles/theme.css` |
| Deteksi HP/mobile | `src/app/components/ui/use-mobile.ts` |

## Struktur Project

```text
src/
  app/
    components/       Komponen reusable: nav, footer, schedule, detail page.
    config/           Info global website: link, kontak, ukuran frame Figma.
    data/             Konten yang aman diedit: jadwal, program, values.
    layouts/          Layout utama, anchor scroll, shell website.
    pages/            Halaman route React, terutama versi mobile dan ministry.
    routes.tsx        Daftar semua URL website.
  assets/
    decor/            Gambar dekorasi.
    images/           Logo dan foto.
    videos/           Video homepage dan ministry.
  imports/            Layout desktop hasil export Figma.
  styles/             CSS global, font, Tailwind, theme.

public/
  404.html            Fallback route untuk GitHub Pages.
  _redirects          Fallback route untuk Netlify.
  favicon.png         Logo tab browser.
```

## Konsep Penting Website Ini

Website ini punya 2 jenis tampilan:

1. Desktop:
   Banyak bagian desktop berasal dari export Figma di `src/imports/`. Bentuknya lebih fixed dan visual.

2. Mobile:
   Versi HP dibuat lebih manual di `src/app/pages/`, supaya tidak sekadar mengecilkan layout desktop.

Artinya, kalau kamu ubah sesuatu di homepage desktop, belum tentu otomatis berubah di homepage mobile. Untuk perubahan penting, cek dua file:

```text
src/imports/AltHomepageDesktop/index.tsx
src/app/pages/MobileHomePage.tsx
```

Untuk About juga sama:

```text
src/imports/AltRouteAboutFullProfilePage/index.tsx
src/app/pages/MobileAboutPage.tsx
```

## Edit Info Gereja, Sosmed, Maps, WhatsApp

Buka:

```text
src/app/config/site.ts
```

Cari:

```ts
SITE_INFO
```

Bagian yang biasanya diedit:

- `SITE_INFO.location`: alamat dan Google Maps.
- `SITE_INFO.social.instagram`: link Instagram.
- `SITE_INFO.social.whatsapp`: link WhatsApp.
- `SITE_INFO.copyright`: teks copyright.

Kalau Google Maps preview tidak muncul, cek link `embed`. Link embed biasanya bentuknya panjang dan berasal dari Google Maps: Share > Embed a map.

## Edit Menu Hamburger

Buka:

```text
src/app/config/site.ts
```

Cari:

```ts
MAIN_ROUTE_LINKS
```

Menu `Programs` dan `Ministries` bisa punya anak menu/dropdown.

Untuk link ministry, cari:

```ts
MINISTRY_ROUTE_LINKS
```

Kalau menambah route baru, jangan cuma tambah menu. Tambahkan juga route di:

```text
src/app/routes.tsx
```

Dan update daftar route di:

```text
public/404.html
```

Ini penting supaya route tetap bisa dibuka setelah website dipublish sebagai static site.

## Edit Jadwal Ibadah

Buka:

```text
src/app/data/schedules.ts
```

Cari:

```ts
SCHEDULE_ITEMS
```

Field penting:

- `title`: nama kegiatan.
- `day`: hari.
- `time`: jam.
- `description`: penjelasan panjang.
- `bgColor`: warna kartu.
- `route`: link kalau kartu bisa diklik.

Kalau ingin jadwal muncul di homepage dan schedule page, edit data di file ini dulu. Setelah itu cek apakah homepage desktop/mobile memang mengambil data tersebut atau masih memakai layout Figma manual.

## Edit Program Alpha, Spiritual Journey, Homecell

Buka:

```text
src/app/data/programs.ts
```

Cari:

```ts
PROGRAM_DETAIL_PAGES
```

Field penting:

- `path`: URL, contoh `/alpha`.
- `title`: judul.
- `tagline`: teks pendek di hero.
- `intro`: paragraf pembuka.
- `sections`: isi detail.
- `links`: tombol/link tambahan kalau ada.

Kalau menambah program baru, pastikan:

1. Tambahkan data di `PROGRAM_DETAIL_PAGES`.
2. Tambahkan menu kalau perlu di `src/app/config/site.ts`.
3. Pastikan route otomatis dari `programRoutes` masih sesuai di `src/app/routes.tsx`.

## Edit Youth, Ckids, Power House

Halaman ministry ada di:

```text
src/app/pages/MinistryPage.tsx
```

Route-nya ada di:

```text
/youth
/ckids
/powerhouse
```

Ckids sudah punya video hero:

```text
src/assets/videos/ckids-hero.mp4
```

Kalau mau ganti video Ckids, cara paling gampang adalah mengganti file video dengan nama yang sama. Kalau nama file berubah, update import di `MinistryPage.tsx`.

## Edit Homepage Desktop

Buka:

```text
src/imports/AltHomepageDesktop/index.tsx
```

Untuk cari teks, pakai search di editor. Contoh cari:

```text
Join Us Every Sunday
Our Pastors
Visit Us
```

Kalau section desktop kepotong, cek 2 hal:

1. Ukuran frame di `src/app/config/site.ts`, cari:

```ts
FIGMA_PAGE_SIZES
```

2. Tinggi root di file Figma export, contoh:

```tsx
h-[6697px] min-h-[6697px]
```

Kalau kamu menambah section besar, dua angka ini harus cukup tinggi. Kalau cuma salah satu yang diubah, biasanya bagian bawah akan kelihatan kepotong.

## Edit Homepage Mobile

Buka:

```text
src/app/pages/MobileHomePage.tsx
```

File ini mengatur homepage versi HP. Di sini ada:

- Hero mobile.
- About preview.
- Pastors section.
- Schedule cards.
- Programs preview.
- Ministries preview.
- Visit Us dengan Google Maps.

Kalau perubahan diminta "integrasikan juga di HP", biasanya file ini yang harus dicek.

## Edit About Page

Desktop:

```text
src/imports/AltRouteAboutFullProfilePage/index.tsx
```

Mobile:

```text
src/app/pages/MobileAboutPage.tsx
```

Kalau foto pastors kepotong, cari class image seperti:

```tsx
object-cover
object-contain
object-bottom
```

`object-cover` membuat gambar memenuhi kotak, tapi bisa memotong sisi gambar.

`object-contain` membuat seluruh gambar terlihat, tapi bisa menyisakan ruang kosong.

`object-bottom` membantu fokus ke bagian bawah gambar.

## Ganti Gambar atau Video

Cara paling aman:

1. Simpan file baru di folder asset yang sama.
2. Kalau bisa, pakai nama file yang sama dengan file lama.
3. Jalankan `npm run dev` dan cek hasilnya.

Lokasi asset penting:

```text
src/assets/images/alpha-logo.png
src/assets/images/pastors-photo.jpeg
src/assets/videos/ckids-hero.mp4
src/assets/videos/homepage-hero-background.mp4
public/favicon.png
```

Kalau favicon di tab browser belum berubah, coba hard refresh atau buka incognito. Browser sering menyimpan favicon lama di cache.

## Sebelum Push Ke GitHub

Jalankan:

```bash
npm run build
```

Lalu cek status file:

```bash
git status --short
```

Kalau `dist/` muncul, jangan dipush. Folder itu hasil build lokal dan bisa dibuat ulang.

Commit contoh:

```bash
git add README.md docs/EDITING_GUIDE.md src
git commit -m "Update homepage content and documentation"
git push
```

Kalau kamu tidak yakin file mana yang berubah, pakai:

```bash
git diff --stat
git diff
```

## Error Yang Sering Terjadi

### Route Bisa Dibuka Di Local Tapi Tidak Setelah Deploy

Cek file:

```text
vite.config.ts
public/404.html
public/_redirects
vercel.json
```

Untuk GitHub Pages, route fallback di `public/404.html` penting.

### HP Tetap Membuka Layout Desktop

Cek:

```text
src/app/components/ui/use-mobile.ts
```

File ini menentukan kapan website dianggap mobile. Kalau breakpoint terlalu kecil, tablet/Android tertentu bisa dianggap desktop.

### Section Desktop Kepotong

Cek:

```text
src/app/config/site.ts
src/imports/AltHomepageDesktop/index.tsx
src/imports/AltRouteAboutFullProfilePage/index.tsx
```

Biasanya masalahnya ada di tinggi frame, tinggi root, atau posisi `top-[...]`.

### Google Maps Tidak Muncul Di HP

Cek iframe di:

```text
src/app/pages/MobileHomePage.tsx
src/app/pages/MobileAboutPage.tsx
```

Pastikan `src` iframe memakai link embed, bukan link Google Maps biasa.

### Foto Kepotong

Cari class image:

```tsx
object-cover
object-contain
object-bottom
```

Untuk foto orang, sering lebih aman pakai `object-cover object-bottom` atau memperbesar tinggi kotak gambar.

## Template Prompt Untuk Minta Bantuan AI

Kalau nanti kamu pakai AI lain, prompt yang jelas akan sangat membantu. Contoh:

```text
Saya punya project React Vite di folder ini. Tolong ubah teks "SUNDAY 09.00" menjadi "Join Us Every Sunday" di homepage desktop dan mobile. File penting: src/imports/AltHomepageDesktop/index.tsx dan src/app/pages/MobileHomePage.tsx. Setelah edit, jalankan npm run build.
```

```text
Tolong tambahkan satu jadwal baru di src/app/data/schedules.ts. Pastikan tampil juga di schedule page dan mobile homepage. Jangan ubah desain lain.
```

```text
Section Visit Us di desktop kepotong. Tolong cek src/imports/AltHomepageDesktop/index.tsx dan src/app/config/site.ts. Kemungkinan perlu adjust height root dan FIGMA_PAGE_SIZES.
```

```text
Tolong ganti gambar pastors dengan file baru. Pastikan tidak kepotong di desktop dan HP. Cek file desktop about, mobile about, desktop homepage, dan mobile homepage.
```

```text
Tolong tambahkan route /nama-route. Update src/app/routes.tsx, menu di src/app/config/site.ts, dan public/404.html supaya route tetap jalan setelah deploy.
```

Kalimat penting yang sebaiknya selalu kamu tambahkan:

```text
Jangan hapus perubahan existing yang tidak berkaitan. Setelah selesai, jelaskan file apa saja yang diubah dan kenapa.
```

## Tips Edit Tanpa Takut Rusak

- Ubah satu hal dulu, lalu cek.
- Jangan edit `node_modules/`.
- Jangan edit `package-lock.json` kecuali kamu memang install/update package.
- Untuk teks dan link, mulai dari `src/app/config/` atau `src/app/data/`.
- Untuk tampilan HP, cari file di `src/app/pages/`.
- Untuk tampilan desktop yang mirip Figma, cari file di `src/imports/`.
- Sebelum eksperimen besar, commit dulu kondisi yang sudah aman.

## Checklist Cepat

Sebelum bilang "sudah selesai":

- Desktop sudah dicek.
- HP sudah dicek.
- Link menu bisa dibuka.
- Route baru masuk `src/app/routes.tsx`.
- Kalau route baru perlu deploy static, `public/404.html` sudah diupdate.
- Gambar tidak kepotong.
- `npm run build` berhasil.
- `git status --short` tidak menampilkan file aneh seperti `dist/`.
