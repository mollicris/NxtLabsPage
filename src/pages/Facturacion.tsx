import { Link } from "react-router-dom";
import { MasInformacion } from "../components/MasInformacion";
import imgFacturacion from "../assets/img_facturacion.png";
import iconSucursales from "../assets/icon_sucursales.png";
import iconAnulacion from "../assets/icon_anulacion.png";
import iconHomologacion from "../assets/icon_homologacion.png";
import iconUsuarios from "../assets/icon_usuarios.png";

const CARACTERISTICAS = [
  {
    icon: iconSucursales,
    title: "Gestión de sucursales",
    body: "Organiza las sucursales y consulta la actividad de tu operación.",
  },
  {
    icon: iconAnulacion,
    title: "Anulación de facturas",
    body: "Gestiona anulaciones y conserva tus procesos de facturación organizados.",
  },
  {
    icon: iconHomologacion,
    title: "Productos homologados",
    body: "Mantén al día tus productos y parámetros de facturación.",
  },
  {
    icon: iconUsuarios,
    title: "Control de usuarios",
    body: "Administra los accesos de tu equipo de acuerdo con las necesidades de tu empresa.",
  },
];

export function Facturacion() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#080D20] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-nxt-blue/30 blur-[120px]" />
          <div className="absolute -bottom-64 left-[15%] h-[28rem] w-[28rem] rounded-full bg-nxt-green/10 blur-[110px]" />
        </div>
        <div className="container-page grid min-h-[620px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-nxt-green shadow-[0_0_12px_#79E88F]" />
              Facturación electrónica · Bolivia
            </span>
            <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Factura con confianza.
              <span className="mt-2 block text-nxt-green">Cumple con el SIAT.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Emite y administra tus documentos fiscales desde una plataforma que simplifica el trabajo diario de tu empresa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contacto" className="btn-solid justify-center">
                <span>Solicitar información <span aria-hidden="true">→</span></span>
              </Link>
              <a href="#caracteristicas-facturacion" className="btn-hero-secondary">
                Conocer características
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-nxt-green/20 bg-nxt-green/[0.06] px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-nxt-green text-lg font-bold text-[#101827]" aria-hidden="true">✓</span>
              <span>
                <span className="block text-sm font-semibold text-white">Compatible con el SIAT</span>
                <span className="mt-0.5 block text-xs text-slate-400">Sistema de Impuestos Nacionales de Bolivia</span>
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-nxt-blue/40 to-nxt-green/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111a31] p-2 shadow-2xl shadow-black/40 sm:p-3">
              <img
                src={imgFacturacion}
                alt="Ilustración de la plataforma de facturación electrónica NXT Labs"
                className="aspect-[1.5] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between gap-4 px-3 py-4 sm:px-5">
                <div>
                  <p className="text-sm font-semibold text-white">Facturación electrónica</p>
                  <p className="mt-1 text-xs text-slate-400">Una gestión más simple y organizada</p>
                </div>
                <span className="shrink-0 rounded-full border border-nxt-green/30 bg-nxt-green/10 px-3 py-1.5 text-xs font-medium text-nxt-green">
                  SIAT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="caracteristicas-facturacion" className="scroll-mt-24 bg-[#F7F9FC] py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">Una solución para tu operación</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Todo lo esencial, en un solo lugar
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Administra los procesos clave de facturación y mantén a tu equipo conectado.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CARACTERISTICAS.map(({ icon, title, body }, index) => (
              <article key={title} className="feature-card">
                <span className="text-xs font-semibold tracking-[0.15em] text-nxt-blue">0{index + 1}</span>
                <div className="mt-6 flex h-16 items-center">
                  <img src={icon} alt="" className="h-14 w-auto object-contain object-left" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <div
            className="overflow-hidden rounded-3xl text-white shadow-xl"
            style={{ background: "linear-gradient(135deg, #111a31 0%, #16244a 55%, #1b2179 100%)" }}
          >
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  <span className="text-[#79E88F]" aria-hidden="true">✓</span>
                  Cumplimiento tributario
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Facturación alineada con el SIAT de Bolivia
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-200">
                  Gestiona tu facturación electrónica con una solución diseñada para trabajar de acuerdo con los requisitos del Sistema de Impuestos Nacionales.
                </p>
              </div>
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-[#79E88F]/40 bg-[#79E88F]/15 text-5xl font-semibold text-[#79E88F] lg:h-36 lg:w-36" aria-hidden="true">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">Acompañamiento para tu empresa</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              ¿Quieres conocer cómo funciona?
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Conversemos sobre las necesidades de tu operación y la solución de facturación de NXT Labs.
            </p>
          </div>
          <Link to="/contacto" className="btn-solid shrink-0 self-start lg:self-auto">
            <span>Hablar con un asesor <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
