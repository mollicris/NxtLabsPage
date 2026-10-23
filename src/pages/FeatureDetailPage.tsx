import { Link } from "react-router-dom";
import { MasInformacion } from "../components/MasInformacion";

export interface Caracteristica { title: string; body: string; }
export interface DetailSection { title: string; paragraphs: string[]; reverse?: boolean; tight?: boolean; }

// Recuadro de imagen vacío del Figma ("img": caja con diagonales cruzadas), 436x399.
function ImgPlaceholder() {
  return (
    <div className="relative h-[240px] w-full shrink-0 border border-[#8d8d8d] bg-white sm:h-[300px] lg:h-[399px] lg:w-[436px]">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#8d8d8d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#8d8d8d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export function FeatureDetailPage({
  eyebrow,
  heroTitle,
  heroSubtitle,
  heroImg,
  heroImgNote = "",
  bandTitle,
  caracteristicas,
  detailSections,
}: {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImg?: string;
  heroImgNote?: string;
  bandTitle: string;
  caracteristicas: Caracteristica[];
  detailSections: DetailSection[];
}) {
  return (
    <>
      {/* HERO — fondo plano #F1F1F1, alto 560, padding 80 (sin textura de puntos) */}
      <section className="bg-[#F1F1F1]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 p-6 py-12 sm:p-10 lg:min-h-[560px] lg:flex-row lg:justify-between lg:p-[80px]">
          <div className="flex flex-col items-start gap-[10px] lg:pt-[50px]">
            <p className="font-display text-base text-black sm:text-[20px]">{eyebrow}</p>
            <h1 className="w-full max-w-[591px] font-display text-3xl font-black leading-[1.2] text-black sm:text-4xl lg:text-[48px]">
              {heroTitle}
            </h1>
            <p className="font-display text-xs font-light uppercase tracking-[2px] text-black sm:text-[16px] sm:tracking-[3.2px]">
              {heroSubtitle}
            </p>
            <Link to="/contacto" className="btn-solid btn-caps mt-6 lg:mt-[60px]">
              <span>Solicitar información</span>
            </Link>
          </div>

          {heroImg ? (
            <img src={heroImg} alt={eyebrow} className="w-full max-w-[559px] object-cover lg:h-[407px]" />
          ) : (
            <div className="placeholder-frame h-[240px] w-full max-w-[559px] px-4 text-center text-[11px] lg:h-[407px]">
              {heroImgNote}
            </div>
          )}
        </div>
      </section>

      {/* BANDA AZUL — texto blanco directo sobre #324BD9, SIN tarjetas */}
      <section className="bg-nxt-blue text-white">
        <div className="mx-auto max-w-[1440px] p-6 sm:p-10">
          <h2 className="text-center font-display text-3xl font-black sm:text-4xl lg:text-[48px]">{bandTitle}</h2>
          <div className="grid grid-cols-1 gap-10 py-8 sm:grid-cols-2 lg:grid-cols-[374px_374px_374px] lg:justify-between lg:gap-y-[80px] lg:py-[40px]">
            {caracteristicas.map((c, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <h3 className="font-display text-2xl font-black lg:text-[32px]">{c.title}</h3>
                <p className="font-display text-base lg:text-[20px]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIONES ALTERNADAS — padding lateral 200, gap 100, imagen 436x399 */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-6 sm:px-10 lg:px-[100px] xl:px-[200px] lg:py-[40px]">
          {detailSections.map((d, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-8 py-8 lg:gap-[100px] lg:py-[40px] ${
                d.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-[10px] text-black">
                <h2 className="font-display text-2xl font-black lg:text-[32px]">{d.title}</h2>
                <div className="font-display text-base lg:text-[20px]">
                  {d.paragraphs.map((p, j) => (
                    <p key={j} className={d.tight || j === d.paragraphs.length - 1 ? "" : "mb-5"}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <ImgPlaceholder />
            </div>
          ))}
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
