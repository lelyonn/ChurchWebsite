import { CORE_VALUES, type CoreValueDetail } from "../data/coreValues";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type CoreValuesAccordionProps = {
  desktopFrame?: boolean;
};

function CoreValueContent({ value }: { value: CoreValueDetail }) {
  return (
    <div className="space-y-4 font-['Lato',sans-serif] text-[15px] leading-[1.75] text-[#46505a] md:text-[16px]">
      {value.scripture && (
        <div className="rounded-[8px] border-l-4 border-[#d41c24] bg-[#f8f6f0] px-4 py-3 font-bold text-[#15181c]">
          {value.scripture}
        </div>
      )}

      {value.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {value.bullets && (
        <ul className="space-y-3 pl-5">
          {value.bullets.map((bullet) => (
            <li key={bullet} className="list-disc">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {value.sections && (
        <div className="grid gap-3 md:grid-cols-3">
          {value.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-[8px] border border-[#e2ded6] bg-white px-4 py-4"
            >
              <p className="font-['Montserrat',sans-serif] text-[13px] font-black uppercase tracking-[0.12em] text-[#d41c24]">
                {section.heading}
              </p>
              <p className="mt-3 text-[14px] leading-[1.65] text-[#46505a]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CoreValuesAccordion({
  desktopFrame = false,
}: CoreValuesAccordionProps) {
  const wrapperClassName = desktopFrame
    ? "absolute left-[74px] top-[320px] w-[1292px]"
    : "w-full";

  return (
    <div className={wrapperClassName} data-name="Core values long detail">
      <div className="grid gap-6 lg:grid-cols-[330px_1fr]">
        <aside className="rounded-[18px] bg-[#1b1e21] p-7 text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
          <p className="font-['Lato',sans-serif] text-[11px] font-black uppercase tracking-[0.24em] text-[#f3b7bd]">
            Nilai-nilai utama
          </p>
          <h3 className="mt-4 font-['Playfair_Display',serif] text-[38px] font-bold leading-[1.04]">
            Gaya hidup jemaat GEIS CCC.
          </h3>
          <p className="mt-5 font-['Lato',sans-serif] text-[15px] leading-[1.7] text-white/76">
            Buka setiap nilai untuk membaca versi lengkap, ayat dasar, dan
            penerapannya dalam kehidupan jemaat.
          </p>
        </aside>

        <Accordion
          type="single"
          collapsible
          defaultValue={CORE_VALUES[0].id}
          className="overflow-hidden rounded-[18px] border border-[#e2ded6] bg-[#fffdf8] shadow-[0_18px_42px_rgba(0,0,0,0.08)]"
        >
          {CORE_VALUES.map((value, index) => (
            <AccordionItem key={value.id} value={value.id}>
              <AccordionTrigger className="px-5 py-5 text-left hover:no-underline md:px-7 [&>svg]:mt-2">
                <span className="flex min-w-0 gap-4">
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d41c24] font-['Montserrat',sans-serif] text-[13px] font-black text-white">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-['Montserrat',sans-serif] text-[19px] font-black leading-[1.2] text-[#15181c] md:text-[24px]">
                      {value.title}
                    </span>
                    <span className="mt-1 block font-['Lato',sans-serif] text-[12px] font-black uppercase tracking-[0.18em] text-[#d41c24]">
                      {value.subtitle}
                    </span>
                    <span className="mt-3 block font-['Lato',sans-serif] text-[15px] font-normal leading-[1.6] text-[#46505a]">
                      {value.summary}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-7 md:px-7">
                <CoreValueContent value={value} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
