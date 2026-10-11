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
  const linkClass = (match: string[]) =>
    match.includes(pathname) ? "text-nxt-green" : "text-graytext hover:text-black";

  return (
    <header className="relative bg-white">
      <div className="flex items-center justify-between p-5 sm:px-10 lg:px-[40px] lg:py-[20px]">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-start gap-[61px] md:flex">
          {NAV.map((item) => (
            <Link key={item.label} to={item.to} className={`text-[16px] ${linkClass(item.match)}`}>
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
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-black/10 bg-white px-5 pb-6 pt-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-2 py-3 text-[16px] hover:bg-black/5 ${linkClass(item.match)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="btn-outline-header mt-2 justify-center">
            <span>INGRESAR A NXT LABS</span>
          </Link>
        </div>
      )}
    </header>
  );
}
