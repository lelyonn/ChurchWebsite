import { useEffect, useRef, useState, type ReactNode } from "react";

type FigmaPageFrameProps = {
  width: number;
  height: number;
  children: ReactNode;
};

export default function FigmaPageFrame({
  width,
  height,
  children,
}: FigmaPageFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateScale = () => {
      const availableWidth = container.clientWidth || width;
      const nextScale = availableWidth / width;
      container.dataset.figmaScale = String(nextScale);
      setScale(nextScale);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [width]);

  return (
    <div
      id="home"
      ref={containerRef}
      className="w-full overflow-hidden"
      data-figma-frame="true"
      style={{ height: height * scale }}
    >
      <div
        className="relative overflow-hidden origin-top-left"
        data-figma-canvas="true"
        style={{
          width,
          height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
