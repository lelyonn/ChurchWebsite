import type { ReactNode } from "react";

type FigmaPageFrameProps = {
  width?: number;
  height?: number;
  children: ReactNode;
  id?: string;
};

/**
 * @deprecated Dekonstruksi kanvas statis Figma ke pure fluid responsive CSS (LT-ARCH-01).
 * Komponen ini dipertahankan sebagai transparent container untuk backward compatibility.
 */
export default function FigmaPageFrame({
  children,
  id = "home",
}: FigmaPageFrameProps) {
  return (
    <div id={id} className="w-full">
      {children}
    </div>
  );
}
