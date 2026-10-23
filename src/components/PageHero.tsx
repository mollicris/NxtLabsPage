import { ReactNode } from "react";

export function PageHero({ title, subtitle, art }: { title: string; subtitle?: string; art: ReactNode }) {
  return (
    <section
      className="bg-[#EDEDED]"
      style={{ backgroundImage: "radial-gradient(#00000014 1px, transparent 1px)", backgroundSize: "14px 14px" }}
    >
      <div className="container-page flex flex-col items-center gap-8 py-14 text-center sm:py-20">
        <h1 className="max-w-lg font-display text-3xl sm:text-4xl md:text-[40px] font-black leading-[1.15] text-black">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        )}
        <div>{art}</div>
      </div>
    </section>
  );
}
