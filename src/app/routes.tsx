import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { PROGRAM_DETAIL_PAGES } from "./data/programs";
import RootLayout from "./layouts/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const AlphaPage = lazy(() => import("./pages/AlphaPage"));
const MinistryPage = lazy(() => import("./pages/MinistryPage"));
const ProgramDetailPage = lazy(() => import("./pages/ProgramDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const RouteFallback = () => (
  <div
    className="min-h-[70vh] w-full bg-[#0f1115] flex flex-col items-center justify-center gap-4 text-white"
    role="status"
    aria-live="polite"
    aria-label="Memuat halaman..."
  >
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#d41c24] border-t-transparent" />
    <span className="font-['Montserrat',sans-serif] text-[13px] tracking-[0.14em] text-[#d7d9da]/80 uppercase">
      GEIS CCC
    </span>
  </div>
);

const programRoutes = PROGRAM_DETAIL_PAGES.filter((p) => p.path !== "/alpha").map((program) => ({
  path: program.path,
  element: (
    <Suspense fallback={<RouteFallback />}>
      <ProgramDetailPage program={program} />
    </Suspense>
  ),
}));

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/schedule",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <SchedulePage />
          </Suspense>
        ),
      },
      { path: "/pagi-bersama-tuhan", element: <Navigate to="/schedule#pagi-bersama-tuhan" replace /> },
      { path: "/pbt", element: <Navigate to="/schedule#pagi-bersama-tuhan" replace /> },
      {
        path: "/youth",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <MinistryPage ministry="youth" />
          </Suspense>
        ),
      },
      {
        path: "/ckids",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <MinistryPage ministry="ckids" />
          </Suspense>
        ),
      },
      {
        path: "/powerhouse",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <MinistryPage ministry="powerhouse" />
          </Suspense>
        ),
      },
      {
        path: "/alpha",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AlphaPage />
          </Suspense>
        ),
      },
      ...programRoutes,
      {
        path: "*",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
