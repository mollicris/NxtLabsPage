import { PageHero } from "../components/PageHero";
import { MasInformacion } from "../components/MasInformacion";
import { GeometricCubes } from "../components/GeometricArt";

const PLANES = [
  {
    nombre: "Básico",
    resumen: "Regroup digital request roll existing hand tentative.",
    precio: "Bs 999",
    periodo: "/año",
    destacado: false,
    incluye: [
      "Six ground discussion close will running.",
      "That unlock gate door another driving.",
      "Interim exploratory take reference resources.",
    ],
  },
  {
    nombre: "Estándar",
    resumen: "Regroup digital request roll existing hand tentative.",
    precio: "Bs 2000",
    periodo: "/año",
    destacado: false,
    incluye: [
      "Six ground discussion close will running.",
      "That unlock gate door another driving.",
      "Interim exploratory take reference resources.",
      "Complete a form and download to receive.",
    ],
  },
  {
    nombre: "Premium",
    resumen: "Regroup digital request roll existing hand tentative.",
    precio: "Bs 4000",
    periodo: "/año",
    destacado: true,
    incluye: [
      "Six ground discussion close will running.",
      "That unlock gate door another driving.",
      "Interim exploratory take reference resources.",
      "Complete a form and download to receive.",
      "Software over network administer solution.",
    ],
  },
  {
    nombre: "Enterprise",
    resumen: "Regroup digital request roll existing hand tentative.",
    precio: "A medida",
    periodo: "",
    destacado: false,
    incluye: [
      "Six ground discussion close will running.",
      "That unlock gate door another driving.",
      "Interim exploratory take reference resources.",
    ],
  },
];

export function Precios() {
  return (
    <>
      <PageHero
        title="Pharetra nulla scelerisque eleifend arcu tellus nunc."
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

                <a href="#" className="btn-solid mt-4 justify-center">
                  <span className="w-full justify-center text-sm">CONTRATAR</span>
                </a>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.incluye.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-graytext">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
