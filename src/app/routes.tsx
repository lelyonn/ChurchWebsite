import { createBrowserRouter } from "react-router";
import { PROGRAM_DETAIL_PAGES } from "./data/programs";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import AlphaPage from "./pages/AlphaPage";
import HomePage from "./pages/HomePage";
import MinistryPage from "./pages/MinistryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import SchedulePage from "./pages/SchedulePage";

const programRoutes = PROGRAM_DETAIL_PAGES.filter((p) => p.path !== "/alpha").map((program) => ({
  path: program.path,
  element: <ProgramDetailPage program={program} />,
}));

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/about", Component: AboutPage },
      { path: "/schedule", Component: SchedulePage },
      { path: "/youth", element: <MinistryPage ministry="youth" /> },
      { path: "/ckids", element: <MinistryPage ministry="ckids" /> },
      { path: "/powerhouse", element: <MinistryPage ministry="powerhouse" /> },
      { path: "/alpha", Component: AlphaPage },
      ...programRoutes,
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
