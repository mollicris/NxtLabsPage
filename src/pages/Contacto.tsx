import { PageHero } from "../components/PageHero";
import { MasInformacion } from "../components/MasInformacion";
import { GeometricHexagons } from "../components/GeometricArt";
import { IconWhatsapp, IconPhone, IconPin } from "../components/Icon";

const CANALES = [
  {
    Icon: IconWhatsapp,
    title: "Escríbenos por WhatsApp",
    description: "Conversemos sobre las necesidades de tu empresa.",
    action: "Iniciar conversación",
    href: "https://wa.me/59178921050",
  },
  {
    Icon: IconPhone,
    title: "Hablemos por teléfono",
    description: "Llámanos para recibir orientación de nuestro equipo.",
    action: "Llamar ahora",
    href: "tel:+59178921050",
  },
  {
    Icon: IconPin,
    title: "Visítanos en La Paz",
    description: "Estamos en Calle Los Pinos #4, zona Jupapina, La Paz, Bolivia.",
    action: "Ver ubicación",
    href: "https://www.google.com/maps/search/?api=1&query=Calle+Los+Pinos+4+Jupapina+La+Paz+Bolivia",
  },
];

export function Contacto() {
  return (
    <>
      <PageHero
        title="Estamos aquí para ayudarte."
        subtitle="Cuéntanos qué necesita tu empresa. Nuestro equipo te orientará para encontrar la solución adecuada."
        art={<GeometricHexagons />}
      />

      <section className="bg-white">
        <div className="container-page py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {CANALES.map(({ Icon, title, description, action, href }) => (
              <div key={title} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="text-nxt-blue" width={56} height={56} />
                <h2 className="mt-5 font-display text-lg font-semibold text-slate-900">{title}</h2>
                <p className="mt-2 min-h-12 max-w-[260px] text-sm leading-6 text-slate-600">{description}</p>
                <a
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noreferrer" : undefined}
                  className="btn-solid mt-5"
                >
                  <span className="text-sm">{action} <span aria-hidden="true">→</span></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MasInformacion />
    </>
  );
}
