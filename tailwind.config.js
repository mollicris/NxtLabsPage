/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tokens reales extraídos del archivo de Figma (get_design_context)
        "nxt-green": "#79E88F",
        "nxt-blue": "#324BD9",
        ink: "#000000",
        graytext: "#525252",
        bg1: "#F5F5F5", // fondo de "Facturación Electrónica"
        bg2: "#F1F1F1", // fondo de "ERP"
      },
      fontFamily: {
        // La tipografía real del diseño es "Apparat SemiCondensed" (Kimera,
        // fuente de pago, geométrica/humanista — NO es una condensada
        // angosta). Se usa "Poppins" como sustituto libre más cercano en
        // forma de letra y proporción — ver nota en el README sobre cómo
        // activar la fuente real si se dispone de su licencia.
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
