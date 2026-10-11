import logo from "../assets/Dimensions.png";

// Medidas tomadas de get_design_context (nodo "mas info", página Facturación):
// padding 80, título 48px Black #525252, subtítulo 16px Light azul con tracking
// 3.2px, inputs 499x62 blancos con borde #d9d9d9 y radio 5px, botón ENVIAR.
const CAMPOS = [
  { label: "Número de celular", type: "tel" },
  { label: "Nombre", type: "text" },
  { label: "Correo electrónico", type: "email" },
];

export function MasInformacion() {
  return (
    <section className="bg-[#E8E8E8]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 p-6 sm:p-10 lg:flex-row lg:items-stretch lg:justify-between lg:p-[80px]">
        <div className="relative flex min-h-[300px] flex-1 flex-col items-start lg:min-h-[440px]">
          <h2 className="font-display text-3xl font-black text-graytext sm:text-4xl lg:text-[48px]">
            
          </h2>
          <p className="font-display text-xs font-light uppercase tracking-[2px] text-nxt-blue sm:text-[16px] sm:tracking-[3.2px]">
            
          </p>
          <img src={logo} alt="NXT Labs" className="relative z-10 mt-10 w-[230px] opacity-50 lg:mt-[126px]" />
          <svg
            className="pointer-events-none absolute bottom-[-24px] left-[-24px] h-[220px] w-[calc(100%+48px)] opacity-60 lg:bottom-[-80px] lg:left-[-80px] lg:h-[260px] lg:w-[calc(100%+160px)]"
            viewBox="0 0 800 280"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMax slice"
          >
            {Array.from({ length: 25 }, (_, index) => {
              const y = 25 + index * 11;
              return (
                <path
                  key={`horizontal-${index}`}
                  d={`M-80 ${y + 90} C70 ${y + 90} 100 ${y - 55} 265 ${y - 55} C430 ${y - 55} 395 ${y + 95} 550 ${y + 95} C700 ${y + 95} 685 ${y - 5} 880 ${y - 5}`}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}
            {Array.from({ length: 21 }, (_, index) => {
              const x = index * 44 - 100;
              return (
                <path
                  key={`vertical-${index}`}
                  d={`M${x} 320 C${x + 115} 230 ${x - 50} 145 ${x + 70} 65 C${x + 165} 2 ${x + 130} -20 ${x + 220} -60`}
                  stroke="white"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>
        </div>

        <form className="flex w-full flex-col gap-5 py-[10px] lg:w-[499px]" onSubmit={(e) => e.preventDefault()}>
          {CAMPOS.map((c) => (
            <label key={c.label} className="flex flex-col font-display text-[16px] text-graytext">
              {c.label}
              <input
                type={c.type}
                className="h-[62px] w-full rounded-[5px] border border-[#d9d9d9] bg-white px-4 text-base outline-none focus:border-nxt-blue"
              />
            </label>
          ))}
          <button type="submit" className="btn-solid btn-caps w-full">
            <span className="flex-1">ENVIAR</span>
          </button>
        </form>
      </div>
    </section>
  );
}
