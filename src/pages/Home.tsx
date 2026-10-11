import { MasInformacion } from "../components/MasInformacion";
import imgFacturacion from "../assets/img_facturacion.png";
import imgErp from "../assets/img_erp.png";
import iconSucursales from "../assets/icon_sucursales.png";
import iconAnulacion from "../assets/icon_anulacion.png";
import iconHomologacion from "../assets/icon_homologacion.png";
import iconUsuarios from "../assets/icon_usuarios.png";
import iconDiamante from "../assets/icon_diamante.png";
import iconRed from "../assets/icon_red.png";
import iconEngranajes from "../assets/icon_engranajes.png";
import { IconLaptopChart } from "../components/Icon";
import clienteTotto from "../assets/cliente_totto.png";
import clienteBancoUnion from "../assets/cliente_banco_union.png";
import clienteAmper from "../assets/cliente_amper.png";
import clienteRedenlace from "../assets/cliente_redenlace.png";

const FACTURACION_FEATURES = [
  { src: iconSucursales, label: "Gestión de sucursales y eventos" },
  { src: iconAnulacion, label: "Anulación de facturas" },
  { src: iconHomologacion, label: "Homologación de productos y parámetros" },
  { src: iconUsuarios, label: "Gestión de usuarios" },
];

const RESULTADOS = [
  ["100%", "Illustration talk create box money requirements."],
  ["24 hrs.", "Underlying post low mifflin at"],
  ["70x", "To win idea hammer ladder win or per event out."],
  ["20x", "Hop prioritize invite strategies no I synergy."],
];

// Orden real confirmado por get_design_context (nodo CLIENTES): fila 1 =
// SAFI, LOGO-ELEFANTE-AZUL, Banco Unión, TOTTO — ninguno de los dos primeros
// se subió como archivo. Fila 2 = un logo no subido, Amper, Redenlace — y va
// CENTRADA como grupo, no de punta a punta como la fila 1.
const CLIENTES_FILA_1 = [
  { src: null, alt: "SAFI (falta logo)" },
  { src: null, alt: "Elefante Azul (falta logo)" },
  { src: clienteBancoUnion, alt: "Banco Unión" },
  { src: clienteTotto, alt: "TOTTO" },
];
const CLIENTES_FILA_2 = [
  { src: null, alt: "Cliente (falta logo)" },
  { src: clienteAmper, alt: "Amper" },
  { src: clienteRedenlace, alt: "Red Enlace Bolivia" },
];

export function Home() {
  return (
    <>
      {/* HERO — fondo de puntos aproximado (no se subió fondo8.png) */}
      <section
        className="bg-[#EDEDED]"
        style={{ backgroundImage: "radial-gradient(#00000014 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      >
        <div className="container-page flex flex-col items-start gap-0 pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pl-[162px] lg:pt-[265px] lg:pb-[144px]">
          <h1 className="w-full max-w-[591px] font-display text-3xl sm:text-4xl md:text-[48px] font-black leading-[1.05] text-graytext">
            Pharetra nulla scelerisque eleifend arcu tellus nunc.
          </h1>
          <p className="mt-3 font-display text-base sm:text-[20px] font-bold text-graytext">
            Dignissim tempus fringilla est neque tristique.
          </p>
          <a href="#" className="btn-solid mt-8 sm:mt-[50px]">
            <span>Lorem ipsum dolor sit amet</span>
          </a>
        </div>
      </section>

      {/* FACTURACIÓN ELECTRÓNICA */}
      <section id="soluciones" className="bg-bg1 pt-8 sm:pt-[40px]">
        <div className="container-page flex flex-col items-center">
          <h2 className="w-full max-w-[591px] text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black">
            Facturación Electrónica
          </h2>
          <p className="mt-2 px-4 text-center font-display text-sm sm:text-[16px] font-light uppercase tracking-[2px] sm:tracking-[3.2px] text-nxt-blue">
            Dignissim tempus fringilla est neque tristique.
          </p>

          <div className="mt-8 sm:mt-[50px] w-full overflow-hidden rounded-[12px]">
            <img src={imgFacturacion} alt="Sistema de facturación electrónica NXT Labs" className="w-full" />
          </div>

          <div className="w-full pb-[40px]">
            <h3 className="mt-10 sm:mt-[50px] text-center font-display text-2xl sm:text-[32px] font-black text-black">
              Características del sistema
            </h3>
            <div className="mt-8 sm:mt-[40px] grid grid-cols-2 gap-8 md:flex md:items-start md:justify-between md:gap-6">
              {FACTURACION_FEATURES.map(({ src, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <img src={src} alt="" className="h-16 sm:h-[96px] w-auto" />
                  <p className="mt-4 sm:mt-5 w-full md:w-[190px] text-center font-display text-sm sm:text-[20px] text-graytext">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP */}
      <section className="border-b border-[#8D8D8D] bg-bg2">
        <div className="container-page flex flex-col items-center py-10 sm:py-[50px]">
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <h2 className="flex-1 text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black sm:text-left">ERP</h2>
            <p className="text-center font-display text-sm sm:text-[16px] font-light uppercase tracking-[2px] sm:tracking-[3.2px] text-black sm:whitespace-nowrap">
              Dignissim tempus fringilla est neque tristique.
            </p>
          </div>
          <div className="mt-8 sm:mt-[50px] w-full overflow-hidden rounded-[12px]">
            <img src={imgErp} alt="Panel ERP NXT Labs" className="w-full" />
          </div>
        </div>
      </section>

      {/* PORQUE ELEGIR */}
      <section className="bg-white">
        <div className="container-page flex flex-col items-center pt-10 sm:pt-[50px]">
          <h2 className="mx-auto w-full max-w-[848px] text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black">
            ¿Porqué elegir NXT Labs?
          </h2>
          <div className="mt-8 sm:mt-[40px] grid grid-cols-2 gap-8 pb-8 sm:gap-6 md:flex md:items-start md:justify-between md:pb-[40px]">
            <div className="flex w-full md:w-[220px] flex-col items-center">
              <img src={iconDiamante} alt="" className="h-[64px] w-auto" />
              <p className="mt-5 text-center font-display text-[20px] text-black">Dunder dogpile explore level whatever walk.</p>
            </div>
            <div className="flex w-full md:w-[220px] flex-col items-center">
              <img src={iconRed} alt="" className="h-[64px] w-auto" />
              <p className="mt-5 text-center font-display text-[20px] text-black">Illustration talk create box money requirements.</p>
            </div>
            <div className="flex w-full md:w-[220px] flex-col items-center">
              <img src={iconEngranajes} alt="" className="h-[64px] w-auto" />
              <p className="mt-5 text-center font-display text-[20px] text-black">Helicopter view pulling time invite comes existing.</p>
            </div>
            <div className="flex w-full md:w-[220px] flex-col items-center">
              {/* Este 4to ícono (laptop+chart) no se subió como archivo — se mantiene
                  reconstruido a mano hasta contar con el real. */}
              <IconLaptopChart width={64} height={64} />
              <p className="mt-5 text-center font-display text-[20px] text-black">We watches please most chime three winning of.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS RESULTADOS */}
      <section className="bg-white">
        <div className="container-page flex flex-col items-center gap-3 pb-10 sm:pb-[50px]">
          <h2 className="mx-auto w-full max-w-[848px] text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black">
            Nuestros resultados
          </h2>
          <div className="mt-8 sm:mt-[50px] grid grid-cols-2 gap-y-8 gap-x-4 text-center sm:flex sm:items-start sm:justify-between">
            {RESULTADOS.map(([stat, label]) => (
              <div key={label} className="flex flex-col items-center">
                <p className="font-display text-5xl sm:text-6xl md:text-[96px] font-bold leading-none text-nxt-green">{stat}</p>
                <p className="mt-2 mx-auto w-full max-w-[222px] font-display text-sm sm:text-[20px] text-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-white pb-[50px]">
        <div className="container-page flex flex-col items-center gap-3 px-6 sm:px-10 lg:px-[80px]">
          <h2 className="mx-auto w-full max-w-[848px] text-center font-display text-3xl sm:text-4xl md:text-[48px] font-black text-black">
            Clientes que usan NXT Labs
          </h2>
          <div className="mt-8 sm:mt-[50px] flex w-full flex-col items-center gap-10 sm:gap-[60px]">
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-8 sm:flex sm:justify-between sm:grayscale">
              {CLIENTES_FILA_1.map((c) =>
                c.src ? (
                  <img key={c.alt} src={c.src} alt={c.alt} className="h-12 sm:h-[68px] w-auto object-contain" />
                ) : (
                  <div key={c.alt} className="placeholder-frame h-12 w-full sm:h-[58px] sm:w-[200px] text-[10px]">
                    {c.alt}
                  </div>
                ),
              )}
            </div>
            <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:flex sm:justify-center sm:gap-[43px] sm:grayscale">
              {CLIENTES_FILA_2.map((c) =>
                c.src ? (
                  <img key={c.alt} src={c.src} alt={c.alt} className="h-14 sm:h-[73px] w-auto object-contain" />
                ) : (
                  <div key={c.alt} className="placeholder-frame h-14 w-full sm:h-[73px] sm:w-[120px] text-[10px] col-span-2 sm:col-span-1">
                    {c.alt}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
