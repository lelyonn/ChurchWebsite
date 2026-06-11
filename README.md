# GEIS CCC Web

GEIS CCC Web is the official website project for **GEIS Christian Creative Church** in Solo, Indonesia. It is built with React, Vite, Tailwind CSS, and a set of Figma-exported desktop layouts that have been organized into a maintainable app structure.

The site presents church identity, weekly services, ministry programs, contact links, location details, and mobile-friendly pages for visitors and contributors.

## Why This Project Is Useful

- **Church website in one codebase**: home, about, schedule, and program detail pages live in a single React app.
- **Editable content model**: common content such as service schedules, program pages, navigation links, social links, and location details is centralized in `src/app/config/` and `src/app/data/`.
- **Responsive experience**: desktop pages use polished Figma-imported layouts, while mobile pages are implemented as dedicated responsive React pages.
- **Production-oriented build**: Vite provides fast local development and optimized static production output.
- **Design continuity**: global styles, typography, warm neutral backgrounds, GEIS red accents, and Figma frame helpers preserve the visual system.

## Tech Stack

- React 18
- React Router 7
- Vite 6
- Tailwind CSS 4
- Radix UI Accordion
- Lucide React icons

## Pages And Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, about preview, services, programs, and visit information |
| `/about` | Church profile and core values |
| `/schedule` | Weekly service schedule and activity overview |
| `/alpha` | Alpha program detail page |
| `/SJ` | Spiritual Journey program detail page |
| `/homecell` | Homecell program detail page |
| `/youth` | Youth ministry page |
| `/ckids` | Ckids ministry page with video hero |
| `/powerhouse` | Power House ministry page |

Program detail routes are generated from `src/app/data/programs.ts`.

## Getting Started

Bagian ini ditulis untuk dua jenis pembaca:

- **Public reader**: orang yang hanya ingin clone, menjalankan, atau mempelajari project.
- **Collaborator**: orang yang diundang ke repository dan ikut mengerjakan perubahan.

### Prerequisites

- Node.js 18 or newer
- npm
- Git
- Akun GitHub, khusus untuk collaborator

This repository includes `package-lock.json`, so npm is the recommended package manager for consistent installs.

### 1. Clone Repository

Gunakan salah satu opsi berikut.

HTTPS:

```bash
git clone https://github.com/lelyonn/ChurchWebsite.git
```

SSH:

```bash
git clone git@github.com:lelyonn/ChurchWebsite.git
```

Masuk ke folder project:

```bash
cd ChurchWebsite
```

### 2. Choose Your Workflow

#### Public Reader

Kalau kamu hanya ingin menjalankan project secara lokal, kamu bisa tetap berada di branch default setelah clone.

Lanjut langsung ke langkah **Install Dependencies**.

#### Collaborator

Kalau kamu adalah collaborator, semua pekerjaan dimulai dari branch `dev`.

```bash
git checkout dev
git pull origin dev
```

Buat branch kerja masing-masing dari `dev`.

Format branch:

```text
developer/nama-developer
```

Contoh:

```bash
git checkout -b developer/leon
git push -u origin developer/leon
```

Contoh lain:

```bash
git checkout -b developer/media-team
git push -u origin developer/media-team
```

Setelah branch dibuat, kerjakan perubahan di branch tersebut. Jangan push langsung ke `main`.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Local Development

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173/
```

Kalau ingin membuka dari HP di jaringan Wi-Fi yang sama:

```bash
npm run dev -- --host 0.0.0.0
```

Lalu cari IPv4 laptop dengan:

```powershell
ipconfig
```

Buka dari browser HP:

```text
http://YOUR_IPV4_ADDRESS:5173/
```

Contoh:

```text
http://192.168.1.23:5173/
```

### 5. Build For Production

```bash
npm run build
```

The production build is generated in `dist/`. That folder is ignored by Git and can be regenerated at any time.

### 6. Preview The Production Build

```bash
npm run preview
```

### 7. Collaborator: Commit And Push

Jika kamu collaborator dan sudah selesai mengedit:

```bash
npm run build
git status --short
git add .
git commit -m "feat: describe the change"
git push
```

Lalu buka GitHub dan buat Pull Request:

```text
developer/nama-developer -> dev
```

Maintainer akan review dan merge ke `dev`. Jika `dev` sudah stabil, maintainer akan merge `dev` ke `main`.

### Static Hosting Routes

This project uses React Router with clean routes such as `/about`, `/schedule`, and `/alpha`. Static hosts need a fallback to serve `index.html` for those routes.

The repository includes:

- `public/404.html` for GitHub Pages route fallback
- `public/_redirects` for Netlify fallback
- `vercel.json` for Vercel rewrites
- `base: "./"` in `vite.config.ts` so built assets work from a GitHub Pages repository subpath

## Common Editing Tasks

Most routine content edits should start in these files:

| Task | File |
| --- | --- |
| Church name, tagline, address, social links, WhatsApp, Google Maps | `src/app/config/site.ts` |
| Homepage anchor navigation | `src/app/config/site.ts` |
| Global route navigation | `src/app/config/site.ts` |
| Service schedule content | `src/app/data/schedules.ts` |
| Program detail pages | `src/app/data/programs.ts` |
| Core values content | `src/app/data/coreValues.ts` |
| Youth, Ckids, and Power House pages | `src/app/pages/MinistryPage.tsx` |
| Desktop homepage Figma layout | `src/imports/AltHomepageDesktop/index.tsx` |
| Desktop about Figma layout | `src/imports/AltRouteAboutFullProfilePage/index.tsx` |
| Mobile homepage | `src/app/pages/MobileHomePage.tsx` |
| Mobile about page | `src/app/pages/MobileAboutPage.tsx` |
| Pastors photo, Alpha logo, and ministry images | `src/assets/images/` |
| Homepage and ministry videos | `src/assets/videos/` |
| Browser tab favicon | `public/favicon.png` |
| Global styling, fonts, and theme tokens | `src/styles/` |

For a more detailed editing map, see [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md).

## Project Structure

```text
src/
  app/
    components/       Reusable layout, navigation, footer, and page components
    config/           Site-wide constants, links, profile data, and Figma sizes
    data/             Editable schedule, program, and core values content
    layouts/          Root layout, anchor scrolling, and shared app shell
    pages/            Route-level pages
    routes.tsx        React Router route definitions
  assets/
    decor/            Decorative images and textures
    images/           Logo and carousel photos
    videos/           Homepage hero video
  imports/            Figma-exported desktop page layouts
  styles/             Tailwind entry, fonts, theme, and global CSS
```

## Development Notes

- Treat `src/app/config/` and `src/app/data/` as the safest places for regular content updates.
- Treat `src/imports/` as generated Figma output. It can be edited, but many elements use absolute positioning, so small visual changes should be checked carefully.
- Keep visitor-facing church copy in Indonesian by default, following [guidelines/Guidelines.md](guidelines/Guidelines.md).
- Do not commit `node_modules/` or `dist/`; both are already ignored in `.gitignore`.

## GitHub Collaboration Guide

Project ini menggunakan konsep kolaborasi seperti repo tim kecil: **`main` untuk versi publik**, **`dev` untuk integrasi/testing**, dan **`developer/nama` untuk branch kerja masing-masing orang**.

```text
main
|
`-- dev
    |
    |-- developer/nama-1
    |-- developer/nama-2
    `-- developer/nama-lain
```

Alur ini membuat `main` tetap aman, sementara perubahan dari beberapa orang bisa digabung dulu di `dev` sebelum dipublish.

### 1. Invite Collaborators

Di GitHub:

1. Buka repository ini.
2. Masuk ke **Settings**.
3. Buka **Collaborators** di bagian **Access**.
4. Klik **Add people**.
5. Masukkan username atau email GitHub orang yang mau diajak.
6. Kirim undangan dan tunggu mereka accept.

Gunakan akses seperlunya. Untuk kontributor biasa, akses **Write** sudah cukup supaya mereka bisa push branch dan membuat pull request. Simpan akses **Admin** hanya untuk orang yang benar-benar perlu mengubah settings repository.

Referensi resmi: [Inviting collaborators to a personal repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

### 2. Create The `dev` Branch

Maintainer membuat branch `dev` dari `main`:

```bash
git checkout main
git pull origin main
git checkout -b dev
git push -u origin dev
```

Setelah itu, semua developer mulai kerja dari `dev`, bukan langsung dari `main`.

### 3. Protect `main` And `dev`

Supaya branch penting tidak rusak karena push langsung:

1. Buka **Settings**.
2. Buka **Branches**.
3. Di **Branch protection rules**, klik **Add rule**.
4. Isi **Branch name pattern** dengan `main`.
5. Aktifkan **Require a pull request before merging**.
6. Jika ada reviewer lain, aktifkan **Require approvals** dan set minimal `1`.
7. Aktifkan **Require conversation resolution before merging**.
8. Klik **Create**.

Ulangi rule yang sama untuk branch `dev`.

Kalau nanti sudah punya GitHub Actions/CI, tambahkan juga **Require status checks to pass before merging** supaya pull request hanya bisa merge kalau build/test lolos.

Referensi resmi: [Managing a branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule).

### 4. Branch Rules

#### `main`

Branch production/final.

Aturan:

- Dipakai untuk versi yang tampil publik.
- Tidak boleh dipakai langsung untuk development.
- Hanya menerima merge dari `dev` kalau perubahan sudah stabil.
- Dikelola oleh maintainer.

#### `dev`

Branch integrasi/staging.

Aturan:

- Menjadi tempat gabungan fitur dari semua developer.
- Semua pull request developer diarahkan ke branch ini.
- Dipakai untuk testing sebelum masuk ke `main`.
- Dikelola oleh maintainer.

#### `developer/nama`

Branch kerja masing-masing developer.

Aturan:

- Dibuat dari branch `dev`.
- Dipakai untuk mengerjakan fitur/perbaikan.
- Setelah selesai, buat pull request ke `dev`.

Contoh nama branch:

```text
developer/jonathan
developer/media-team
developer/update-schedule
```

### 5. Daily Workflow For Contributors

Setiap kontributor sebaiknya memakai alur ini:

```bash
git checkout dev
git pull origin dev
git checkout -b developer/nama-kamu
npm install
npm run dev
```

Setelah selesai edit:

```bash
npm run build
git status --short
git add .
git commit -m "feat: describe the change"
git push -u origin developer/nama-kamu
```

Lalu buka GitHub dan buat **Pull Request**:

```text
developer/nama-kamu -> dev
```

Kalau branch `developer/nama-kamu` sudah pernah dibuat sebelumnya, cukup update dari `dev` sebelum mulai kerja:

```bash
git checkout dev
git pull origin dev
git checkout developer/nama-kamu
git merge dev
```

### 6. Commit Message Rules

Gunakan format commit yang jelas:

```text
type: message
```

Type yang disarankan:

| Type | Fungsi |
| --- | --- |
| `feat` | Menambahkan fitur baru |
| `fix` | Memperbaiki bug |
| `style` | Perubahan styling/UI |
| `refactor` | Merapikan kode tanpa mengubah fitur |
| `docs` | Perubahan dokumentasi |
| `chore` | Setup, config, dependency |

Contoh:

```bash
git commit -m "feat: add mobile visit section"
git commit -m "fix: adjust desktop homepage height"
git commit -m "style: improve pastors section spacing"
git commit -m "docs: update collaboration guide"
```

### 7. Pull Request Rules

Saat membuat pull request:

- Base branch harus `dev`.
- Compare branch adalah branch developer masing-masing.
- Judul PR harus jelas.
- Jelaskan perubahan yang dibuat.
- Tambahkan screenshot kalau mengubah tampilan.
- Pastikan tidak ada file rahasia, `node_modules/`, atau `dist/` yang ikut masuk commit.

Format judul PR:

```text
[type] short description
```

Contoh:

```text
[Feature] Add Ckids route
[Fix] Fix mobile navbar spacing
[Docs] Update editing guide
```

Template deskripsi PR:

```md
## Description

Jelaskan perubahan yang dibuat.

## Changes

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Sudah menjalankan `npm run dev`
- [ ] Sudah menjalankan `npm run build`
- [ ] Tampilan sudah dicek di desktop
- [ ] Tampilan sudah dicek di mobile

## Screenshot

Tambahkan screenshot jika ada perubahan UI.
```

### 8. Pull Request Checklist

Sebelum pull request di-merge:

- Perubahan sudah dicek di desktop.
- Perubahan sudah dicek di HP/mobile.
- `npm run build` berhasil.
- Tidak ada `dist/` atau `node_modules/` ikut masuk commit.
- Route baru, kalau ada, sudah ditambahkan ke `src/app/routes.tsx` dan `public/404.html`.
- Reviewer sudah paham file mana yang berubah dan kenapa.

### 9. Maintainer Flow

Maintainer review PR dari developer ke `dev`. Jika aman, merge melalui GitHub.

Ketika `dev` sudah stabil dan siap publish:

```text
dev -> main
```

Disarankan tetap memakai pull request dari `dev` ke `main`, supaya riwayat perubahan production jelas.

### 10. Recommended Team Rules

- Jangan push langsung ke `main`.
- Jangan push langsung ke `dev` kecuali maintainer.
- Semua developer bekerja di branch `developer/nama`.
- Pakai pull request walaupun perubahan kecil, supaya ada riwayat dan bisa direview.
- Jangan merge pull request kalau `npm run build` belum dicoba.
- Kalau dua orang mengedit file Figma export di `src/imports/`, koordinasikan dulu karena file itu panjang dan rawan conflict.

GitHub menjelaskan dua model kolaborasi utama: **fork and pull model** dan **shared repository model**. Untuk project internal seperti ini, shared repository biasanya lebih praktis. Referensi resmi: [About collaborative development models](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models).

## Helpful Commands

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Verify the production build
npm run build

# Preview the built site
npm run preview
```

## Support And Documentation

- Editing guide: [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md)
- Project guidelines: [guidelines/Guidelines.md](guidelines/Guidelines.md)
- Asset attributions: [ATTRIBUTIONS.md](ATTRIBUTIONS.md)

If something is unclear, start by checking the files above, then open an issue or contact the project maintainer in the repository where this code is hosted.

## Maintainers And Contributors

This project is maintained for GEIS Christian Creative Church.

Contributions should keep the website easy for church staff and future developers to edit:

1. Keep reusable UI in `src/app/components/`.
2. Put editable long-form content in `src/app/data/`.
3. Put shared URLs, contact links, and site constants in `src/app/config/site.ts`.
4. Run `npm run build` before submitting changes.
5. Keep generated or dependency folders out of commits.

There is no separate `CONTRIBUTING.md` yet. Until one is added, use this README and [guidelines/Guidelines.md](guidelines/Guidelines.md) as the contribution reference.
