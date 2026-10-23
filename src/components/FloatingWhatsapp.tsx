import { IconWhatsapp } from "./Icon";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/59178921050"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a NXT Labs por WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-1 hover:bg-[#1FBC5A] hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <IconWhatsapp
        width={32}
        height={32}
        stroke="white"
        strokeWidth={2.2}
        className="h-8 w-8"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
