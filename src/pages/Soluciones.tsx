import { Link } from "react-router-dom";
import imgFacturacion from "../assets/img_facturacion.png";
import imgErp from "../assets/img_erp.png";
import dimensions from "../assets/Dimensions.png";
import { MasInformacion } from "../components/MasInformacion";

const SOLUCIONES = [
  {
    to: "/facturacion",
    number: "01",
    category: "FACTURACIÓN ELECTRÓNICA",
    title: "Factura con confianza y cumple con el SIAT.",
    body: "Emite y administra tus documentos fiscales en una plataforma pensada para simplificar la operación diaria de tu empresa.",
    highlights: ["Cumplimiento SIAT", "Gestión de sucursales", "Control de usuarios"],
    img: imgFacturacion,
    alt: "Plataforma NXT Labs para facturación electrónica",
    linkLabel: "Explorar facturación",
  },
  {
    to: "/erp",
    number: "02",
    category: "GESTIÓN EMPRESARIAL",
    title: "Toda tu operación, mejor organizada.",
    body: "Centraliza la información de tu empresa y conecta los procesos que necesitas para gestionar tu negocio con más claridad.",
    highlights: ["Información centralizada", "Procesos conectados", "Visibilidad de tu operación"],
    img: imgErp,
    alt: "Panel de gestión empresarial ERP de NXT Labs",
    linkLabel: "Explorar ERP",
  },
];

export function Soluciones() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#080D20] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-nxt-blue/30 blur-[120px]" />
          <div className="absolute -bottom-56 left-[20%] h-[24rem] w-[24rem] rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>
        <div className="container-page grid min-h-[460px] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.85fr] lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-nxt-green shadow-[0_0_12px_#79E88F]" />
              Soluciones NXT Labs
            </span>
            <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Tecnología que trabaja al ritmo de tu empresa.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Simplifica la facturación y conecta la gestión de tu negocio con soluciones diseñadas para empresas bolivianas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#soluciones-disponibles" className="btn-solid justify-center">
                <span>Ver soluciones <span aria-hidden="true">↓</span></span>
              </a>
              <Link to="/contacto" className="btn-hero-secondary">
                Hablar con un asesor
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-nxt-blue/40 to-nxt-green/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111a31] p-3 shadow-2xl shadow-black/40 sm:p-5">
              <div className="relative aspect-[2.57] w-full overflow-hidden">
                <img
                  src={dimensions}
                  alt="Ilustración de tecnología conectada y herramientas digitales"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-5 sm:px-2 sm:pt-6">
                <div>
                  <p className="text-base font-semibold text-white sm:text-lg">Una plataforma para crecer</p>
                  <p className="mt-1.5 text-sm text-slate-400 sm:text-base">Procesos claros. Gestión conectada.</p>
                </div>
                <span className="shrink-0 rounded-full border border-nxt-green/30 bg-nxt-green/10 px-4 py-2 text-xs font-medium text-nxt-green sm:text-sm">
                  Bolivia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones-disponibles" className="scroll-mt-24 bg-[#F7F9FC] py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">Un ecosistema para tu negocio</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Elige lo que tu empresa necesita
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Soluciones prácticas para simplificar tareas, organizar información y avanzar con seguridad.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SOLUCIONES.map((solucion) => (
              <Link key={solucion.to} to={solucion.to} className="solution-card group">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="solution-label">{solucion.number} / {solucion.category}</span>
                    <h3 className="mt-4 max-w-md font-display text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                      {solucion.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-7 text-slate-600">{solucion.body}</p>
                  </div>
                  <span className="solution-arrow" aria-hidden="true">↗</span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {solucion.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={solucion.img}
                    alt={solucion.alt}
                    className="aspect-[1.8] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nxt-blue">
                  {solucion.linkLabel} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">Pensado para empresas</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Menos complejidad. Más control.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Herramientas digitales que ayudan a ordenar el trabajo diario y a tener tus procesos más visibles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Centraliza", "Consulta tu información desde una plataforma."],
                ["02", "Organiza", "Gestiona procesos y tareas de manera clara."],
                ["03", "Avanza", "Dedica más tiempo al crecimiento del negocio."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-2xl bg-[#F7F9FC] p-5">
                  <span className="text-xs font-semibold tracking-[0.15em] text-nxt-blue">{number}</span>
                  <h3 className="mt-5 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1124] py-16 text-white sm:py-20">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-green">Hablemos de tu empresa</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Te ayudamos a encontrar la solución adecuada.
            </h2>
          </div>
          <Link to="/contacto" className="btn-solid shrink-0 self-start lg:self-auto">
            <span>Contactar a NXT Labs <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
