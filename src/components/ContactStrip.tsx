import { Link } from "react-router-dom";

export function ContactStrip() {
  return (
    <section className="bg-stone-light">
      <div className="container-page flex flex-col items-start gap-6 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-ink md:text-3xl">
            ¿Listos para conocer NXT Labs?
          </h2>
          <p className="mt-2 max-w-md text-sm text-stone">
            Conéctate con nuestro equipo para ver una demo del sistema aplicada a tu operación.
          </p>
        </div>
        <Link to="/contacto" className="btn-solid">
          Hablar con un asesor
        </Link>
      </div>
    </section>
  );
}
