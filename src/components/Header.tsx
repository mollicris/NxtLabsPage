import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const NAV = [
  { label: "Soluciones", to: "/soluciones", match: ["/soluciones", "/facturacion", "/erp"] },
  { label: "Precios", to: "/precios", match: ["/precios"] },
  { label: "Contacto", to: "/contacto", match: ["/contacto"] },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const handleLogoClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const linkClass = (match: string[]) =>
    match.includes(pathname)
      ? "text-nxt-blue"
      : "text-slate-600 hover:text-slate-950";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-[80px]">
        <Link to="/" onClick={handleLogoClick} aria-label="NXT Labs, inicio">
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={item.match.includes(pathname) ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${linkClass(item.match)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contacto" className="btn-outline-header hidden md:inline-flex">
          <span>INGRESAR A NXT LABS</span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white transition hover:bg-slate-50 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav aria-label="Navegación móvil" className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 pb-6 pt-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              aria-current={item.match.includes(pathname) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-slate-50 ${linkClass(item.match)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="btn-solid mt-3 justify-center">
            <span>INGRESAR A NXT LABS</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
