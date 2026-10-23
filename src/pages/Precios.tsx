import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { MasInformacion } from "../components/MasInformacion";
import { GeometricCubes } from "../components/GeometricArt";

const PLANES = [
  {
    nombre: "Básico",
    resumen: "Una alternativa para comenzar a digitalizar la gestión de tu negocio.",
    precio: "Bs 999",
    periodo: "/año",
    destacado: false,
  },
  {
    nombre: "Estándar",
    resumen: "Una opción para acompañar las necesidades de una empresa en crecimiento.",
    precio: "Bs 2000",
    periodo: "/año",
    destacado: false,
  },
  {
    nombre: "Premium",
    resumen: "Una propuesta para negocios que buscan una solución más completa.",
    precio: "Bs 4000",
    periodo: "/año",
    destacado: true,
  },
  {
    nombre: "Enterprise",
    resumen: "Una propuesta personalizada según el alcance de tu operación.",
    precio: "A medida",
    periodo: "",
    destacado: false,
  },
];

export function Precios() {
  return (
    <>
      <PageHero
        title="Planes pensados para acompañar el crecimiento de tu empresa."
        art={<GeometricCubes />}
      />

      <section className="bg-white">
        <div className="container-page py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANES.map((plan) => (
              <div
                key={plan.nombre}
                className={`flex flex-col rounded-[8px] p-6 ${
                  plan.destacado ? "bg-[#E9ECF9] ring-2 ring-nxt-blue" : "bg-[#F5F5F5]"
                }`}
              >
                <h3 className="font-display text-lg font-black text-black">{plan.nombre}</h3>
                <p className="mt-1 text-xs text-graytext">{plan.resumen}</p>

                <p className="mt-5 font-display text-2xl font-black text-black">
                  {plan.precio}
                  <span className="text-sm font-normal text-graytext">{plan.periodo}</span>
                </p>

                <Link to="/contacto" className="btn-solid mt-4 justify-center">
                  <span className="w-full justify-center text-sm">Consultar plan</span>
                </Link>

                <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-graytext">
                  Contáctanos para conocer el alcance del plan y encontrar la opción adecuada para tu empresa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
