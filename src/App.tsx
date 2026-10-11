import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Soluciones } from "./pages/Soluciones";
import { Precios } from "./pages/Precios";
import { Facturacion } from "./pages/Facturacion";
import { Erp } from "./pages/Erp";
import { Contacto } from "./pages/Contacto";

export function App() {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  );
}
