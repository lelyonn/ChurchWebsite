import AltRouteAboutFullProfilePage from "../../imports/AltRouteAboutFullProfilePage";
import FigmaPageFrame from "../components/FigmaPageFrame";
import { useIsMobile } from "../components/ui/use-mobile";
import { FIGMA_PAGE_SIZES } from "../config/site";
import MobileAboutPage from "./MobileAboutPage";

export default function AboutPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileAboutPage />;
  }

  return (
    <FigmaPageFrame
      width={FIGMA_PAGE_SIZES.about.width}
      height={FIGMA_PAGE_SIZES.about.height}
    >
      <AltRouteAboutFullProfilePage />
    </FigmaPageFrame>
  );
}
