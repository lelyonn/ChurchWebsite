import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <p className="font-['Roboto_Mono',monospace] text-sm tracking-[0.24em] uppercase text-[#b51b2a] mb-4">
          Page not found
        </p>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl text-[#15181c] mb-8 leading-tight">
          The page you requested does not exist.
        </h1>
        <Link
          to="/"
          className="geis-button-hover inline-flex rounded-md bg-[#b51b2a] px-6 py-3 font-['Lato',sans-serif] font-bold text-white no-underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
