import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === PERSONALIZZA QUI I COLORI DEL TEMA ===
        background: "#0A0A0A", // Sfondo principale nero/grigio scuro
        "electric-blue": "#00F2FE", // Accento Blu Elettrico
        "neon-violet": "#4FACFE", // Accento Viola
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Gradiente primario riutilizzabile
        "gradient-primary": "linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
