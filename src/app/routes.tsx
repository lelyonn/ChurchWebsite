import { createBrowserRouter } from "react-router";
import ProgramDetailPage from "./components/ProgramDetailPage";
import { PROGRAM_DETAIL_PAGES } from "./data/programs";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
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
      ...programRoutes,
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
