import { Link } from "react-router-dom";
import imgFacturacion from "../assets/img_facturacion.png";
import imgErp from "../assets/img_erp.png";
import { MasInformacion } from "../components/MasInformacion";

const SOLUCIONES = [
  {
    to: "/facturacion",
    title: "Sistema de facturación",
    body: "Regroup digital request roll existing hand tentative open slipstream decisions. Six ground discussion close will running. That unlock gate door another driving point with. Interim exploratory take reference resources.",
    img: imgFacturacion,
    circleBg: "#324BD9",
  },
  {
    to: "/erp",
    title: "Sistema de planificación de recursos empresariales",
    body: "Regroup digital request roll existing hand tentative open slipstream decisions. Six ground discussion close will running. That unlock gate door another driving point with. Interim exploratory take reference resources.",
    img: imgErp,
    circleBg: "#1B2179",
  },
];

export function Soluciones() {
  return (
    <>
      <section
        className="bg-[#EDEDED]"
        style={{ backgroundImage: "radial-gradient(#00000014 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      >
        <div className="container-page py-14 sm:py-20">
          <h1 className="text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black">
            Soluciones
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-14 sm:mt-16 md:grid-cols-2 md:gap-10">
            {SOLUCIONES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nxt-blue"
              >
                <h2 className="font-display text-xl sm:text-2xl font-black text-black">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-graytext">{s.body}</p>
                <div
                  className="mx-auto mt-10 h-[220px] w-[220px] overflow-hidden rounded-full sm:h-[260px] sm:w-[260px]"
                  style={{ backgroundColor: s.circleBg }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full scale-[1.8] object-cover object-center"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <MasInformacion />
    </>
  );
}
