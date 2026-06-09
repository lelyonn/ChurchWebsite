import AltHomepageDesktop from "../../imports/AltHomepageDesktop";
import FigmaPageFrame from "../components/FigmaPageFrame";
import { useIsMobile } from "../components/ui/use-mobile";
import { FIGMA_PAGE_SIZES } from "../config/site";
import MobileHomePage from "./MobileHomePage";

export default function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHomePage />;
  }

  return (
    <FigmaPageFrame
      width={FIGMA_PAGE_SIZES.home.width}
      height={FIGMA_PAGE_SIZES.home.height}
    >
      <AltHomepageDesktop />
    </FigmaPageFrame>
  );
}
