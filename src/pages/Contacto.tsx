import { PageHero } from "../components/PageHero";
import { MasInformacion } from "../components/MasInformacion";
import { GeometricHexagons } from "../components/GeometricArt";
import { IconWhatsapp, IconPhone, IconPin } from "../components/Icon";

const CANALES = [
  { Icon: IconWhatsapp, title: "Contáctanos por WhatsApp para recibir ayuda inmediata.", action: "CONTACTAR", href: "https://wa.me/59178921050" },
  { Icon: IconPhone, title: "Regístrate y agenda una llamada con nuestro equipo.", action: "AGENDAR", href: "tel:+59178921050" },
  { Icon: IconPin, title: "Visita nuestras oficinas en La Paz, Bolivia.", action: "VER MAPA", href: "#" },
];

export function Contacto() {
  return (
    <>
      <PageHero
        title="Pharetra nulla scelerisque eleifend arcu tellus nunc."
        art={<GeometricHexagons />}
      />

      <section className="bg-white">
        <div className="container-page py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {CANALES.map(({ Icon, title, action, href }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon className="text-nxt-blue" width={56} height={56} />
                <p className="mt-4 max-w-[200px] text-sm text-graytext">{title}</p>
                <a href={href} className="btn-solid mt-5">
                  <span className="text-sm">{action}</span>
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
