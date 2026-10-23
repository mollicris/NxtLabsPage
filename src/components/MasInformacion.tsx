import dimensions from "../assets/Dimensions.png";

const CAMPOS = [
  {
    id: "contact-phone",
    label: "Número de celular",
    type: "tel",
    placeholder: "+591",
    autoComplete: "tel",
    required: false,
  },
  {
    id: "contact-name",
    label: "Nombre",
    type: "text",
    placeholder: "",
    autoComplete: "name",
    required: true,
  },
  {
    id: "contact-email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "",
    autoComplete: "email",
    required: true,
  },
];

export function MasInformacion() {
  return (
    <section className="bg-[#F3F5FA]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_499px] lg:items-center lg:gap-16 lg:px-[80px] lg:py-[80px]">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-nxt-blue/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-nxt-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-nxt-green" />
            Hablemos de tu empresa
          </span>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-[48px]">
            Más información
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Cuéntanos qué necesita tu negocio. Nuestro equipo te ayudará a conocer las soluciones de NXT Labs.
          </p>
          <div className="mt-8 flex min-h-[150px] w-full max-w-[440px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm sm:min-h-[180px]">
            <img
              src={dimensions}
              alt="NXT Labs"
              className="h-auto max-h-[112px] w-full max-w-[340px] object-contain"
            />
          </div>
        </div>

        <form
          className="flex w-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.08)] sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="mb-1 border-b border-slate-100 pb-5">
            <h3 className="font-display text-xl font-semibold text-slate-900">Solicita información</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-500">Déjanos tus datos y nos pondremos en contacto.</p>
          </div>
          {CAMPOS.map((campo) => (
            <label
              key={campo.id}
              htmlFor={campo.id}
              className="flex flex-col gap-1.5 font-display text-[14px] font-medium text-slate-700 sm:text-[15px]"
            >
              {campo.label}
              <input
                id={campo.id}
                name={campo.id}
                type={campo.type}
                placeholder={campo.placeholder}
                autoComplete={campo.autoComplete}
                inputMode={campo.type === "tel" ? "tel" : undefined}
                required={campo.required}
                className="h-[62px] w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-nxt-blue focus:bg-white focus:ring-4 focus:ring-nxt-blue/10"
              />
            </label>
          ))}

          <button type="submit" className="btn-solid btn-caps mt-1 w-full justify-center">
            <span className="h-[48px] w-full">Enviar solicitud</span>
          </button>
          <p className="text-center text-xs leading-5 text-slate-500">
            Usaremos tus datos únicamente para responder a tu solicitud.
          </p>
        </form>
      </div>
    </section>
  );
}
