import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#080D20] text-white">
      <div className="container-page grid gap-10 py-12 sm:py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link to="/" aria-label="NXT Labs, inicio" className="inline-flex rounded-lg bg-white px-3 py-2">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Tecnología para simplificar la gestión y acompañar el crecimiento de tu empresa.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explora</h2>
          <nav aria-label="Navegación del pie de página" className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400">
            <Link to="/soluciones" className="transition hover:text-nxt-green">Soluciones</Link>
            <Link to="/precios" className="transition hover:text-nxt-green">Precios</Link>
            <Link to="/contacto" className="transition hover:text-nxt-green">Contacto</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contacto</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <a href="tel:+59178921050" className="transition hover:text-white">+591 78921050</a>
            <a href="mailto:r.delgadillo@nxtlabs.com.bo" className="transition hover:text-white">r.delgadillo@nxtlabs.com.bo</a>
            <p>La Paz, Bolivia</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} NXT Labs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
