import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";
import { Home } from "./pages/Home";
import { Soluciones } from "./pages/Soluciones";
import { Precios } from "./pages/Precios";
import { Facturacion } from "./pages/Facturacion";
import { Erp } from "./pages/Erp";
import { Contacto } from "./pages/Contacto";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/facturacion" element={<Facturacion />} />
            <Route path="/erp" element={<Erp />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </BrowserRouter>
  );
}
