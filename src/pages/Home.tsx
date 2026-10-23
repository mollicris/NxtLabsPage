import { Link } from "react-router-dom";
import { MasInformacion } from "../components/MasInformacion";
import imgFacturacion from "../assets/img_facturacion.png";
import imgErp from "../assets/img_erp.png";
import { IconDiamond, IconNetwork, IconGearsDuo, IconLaptopChart } from "../components/Icon";
import clienteTotto from "../assets/cliente_totto.png";
import clienteBancoUnion from "../assets/cliente_banco_union.png";
import clienteAmper from "../assets/cliente_amper.png";
import clienteRedenlace from "../assets/cliente_redenlace.png";

const RAZONES_PARA_ELEGIR = [
  {
    Icon: IconDiamond,
    title: "Calidad en cada detalle",
    body: "Soluciones diseñadas para facilitar la gestión de tu empresa.",
  },
  {
    Icon: IconNetwork,
    title: "Tu operación conectada",
    body: "Información y procesos reunidos en una sola plataforma.",
  },
  {
    Icon: IconGearsDuo,
    title: "Procesos más simples",
    body: "Herramientas prácticas para organizar el trabajo diario.",
  },
  {
    Icon: IconLaptopChart,
    title: "Mejor visibilidad",
    body: "Consulta la información de tu negocio para tomar decisiones.",
  },
];

const RESULTADOS = [
  { value: "100%", label: "Enfoque en simplificar la gestión de tu empresa." },
  { value: "24 hrs.", label: "Acceso a tus herramientas cuando las necesitas." },
  { value: "70x", label: "Procesos conectados para una operación más ágil." },
  { value: "20x", label: "Más claridad para gestionar tu negocio." },
];

const CLIENTES = [
  { src: clienteTotto, alt: "TOTTO" },
  { src: clienteBancoUnion, alt: "Banco Unión" },
  { src: clienteAmper, alt: "Amper" },
  { src: clienteRedenlace, alt: "Red Enlace Bolivia" },
];

export function Home() {
  return (
    <>
      <section className="hero-tech relative isolate overflow-hidden bg-[#080D20] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-20 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-nxt-blue/30 blur-[120px]" />
          <div className="absolute -bottom-64 left-[30%] h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>
        <div className="container-page grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-nxt-green shadow-[0_0_12px_#79E88F]" />
              Tecnología para empresas bolivianas
            </span>
            <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Gestiona tu negocio.
              <span className="mt-2 block text-nxt-green">Crece con confianza.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Facturación electrónica y gestión empresarial en un solo lugar.
              Simplifica tus procesos y toma decisiones con información clara.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/soluciones" className="btn-solid justify-center">
                <span>Explorar soluciones <span aria-hidden="true">→</span></span>
              </Link>
              <Link to="/contacto" className="btn-hero-secondary">
                Hablar con un asesor
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><span className="text-nxt-green">✓</span> Facturación electrónica</span>
              <span className="flex items-center gap-2"><span className="text-nxt-green">✓</span> ERP para tu operación</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-nxt-blue/50 to-nxt-green/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#101832] p-2 shadow-2xl shadow-black/40 sm:p-3">
              <img
                src={imgFacturacion}
                alt="Vista del sistema de facturación electrónica NXT Labs"
                className="aspect-[1.65] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between gap-4 px-3 py-4 sm:px-5">
                <div>
                  <p className="text-sm font-semibold text-white">Una operación más conectada</p>
                  <p className="mt-1 text-xs text-slate-400">Facturación y gestión en una plataforma</p>
                </div>
                <span className="shrink-0 rounded-full border border-nxt-green/30 bg-nxt-green/10 px-3 py-1.5 text-xs font-medium text-nxt-green">
                  NXT Labs
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#111a31]/95 px-4 py-3 shadow-xl backdrop-blur sm:block lg:-left-8">
              <p className="text-xs text-slate-400">Soluciones empresariales</p>
              <p className="mt-1 text-sm font-semibold text-white">Diseñadas para simplificar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-page flex flex-col items-center gap-7 py-9 sm:flex-row sm:justify-between">
          <p className="max-w-xs text-center text-sm font-medium leading-6 text-slate-500 sm:text-left">
            Tecnología que acompaña a empresas de distintos sectores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-end sm:gap-x-12">
            {CLIENTES.map(({ src, alt }) => (
              <img key={alt} src={src} alt={alt} className="h-9 max-w-[120px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-11" />
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="bg-[#F7F9FC] py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">Soluciones NXT</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Todo lo que necesitas para avanzar
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Herramientas integradas para administrar con menos esfuerzo y mantener tu negocio en movimiento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link to="/facturacion" className="solution-card group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="solution-label">01 / FACTURACIÓN</span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Facturación electrónica</h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Emite y administra tus facturas con una solución práctica para el día a día de tu empresa.
                  </p>
                </div>
                <span className="solution-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img src={imgFacturacion} alt="Plataforma de facturación electrónica" className="aspect-[1.9] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nxt-blue">
                Conocer facturación <span aria-hidden="true">→</span>
              </span>
            </Link>

            <Link to="/erp" className="solution-card group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="solution-label">02 / GESTIÓN EMPRESARIAL</span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">ERP para tu empresa</h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Centraliza procesos y organiza la información que necesitas para gestionar tu operación.
                  </p>
                </div>
                <span className="solution-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img src={imgErp} alt="Panel de gestión empresarial ERP de NXT Labs" className="aspect-[1.9] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nxt-blue">
                Conocer ERP <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">¿Por qué elegir NXT Labs?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Tecnología pensada para ayudarte a avanzar
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Integramos herramientas y acompañamiento para que gestionar tu empresa sea más claro y sencillo.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RAZONES_PARA_ELEGIR.map(({ Icon, title, body }, index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-nxt-blue/30 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="text-xs font-semibold tracking-[0.15em] text-nxt-blue">0{index + 1}</span>
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-nxt-blue/5">
                  <Icon className="h-10 w-10" />
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-blue">NXT Labs en cifras</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Nuestros resultados
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Un vistazo al valor que buscamos aportar a la gestión diaria de tu empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTADOS.map(({ value, label }) => (
              <article key={value} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
                <p className="font-display text-5xl font-semibold leading-none tracking-tight text-nxt-green sm:text-6xl">{value}</p>
                <p className="mx-auto mt-4 max-w-[220px] text-sm leading-6 text-slate-600">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1124] py-16 text-white sm:py-20">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nxt-green">¿Listo para dar el siguiente paso?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Encuentra la solución adecuada para tu empresa.
            </h2>
          </div>
          <Link to="/contacto" className="btn-solid shrink-0 self-start lg:self-auto">
            <span>Conversemos <span aria-hidden="true">→</span></span>
          </Link>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
