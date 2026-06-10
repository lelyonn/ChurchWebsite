import { createBrowserRouter } from "react-router";
import ProgramDetailPage from "./components/ProgramDetailPage";
import { PROGRAM_DETAIL_PAGES } from "./data/programs";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MinistryPage from "./pages/MinistryPage";
import NotFoundPage from "./pages/NotFoundPage";
import SchedulePage from "./components/SchedulePage";

const programRoutes = PROGRAM_DETAIL_PAGES.map((program) => ({
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
      ...programRoutes,
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
