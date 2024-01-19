import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      'white': '#ffffff',
      'silver': '#ecebff',
      'gray': "#737373",

      main_link: "#DD845A",
      main_background: "#FFFFFF",
      main_heading: "#000000",
      main_texts: "#000000",

      card1_background: "#E4E7D4",
      card1_heading: "#554333",
      card1_texts: "#FFFFFF",

      card2_background: "#FFFCF5",
      card2_heading: "#554333",
      card2_texts: "#000000",

      columms_button: "#DD845A",
      columms_heading: "#000000",
      columms_button_text: "#FFFFFF",
      columms_line: "#DD845A",
    },
    extend: {
      fontFamily: {
        catamaran: ["var(--font-catamaran)"],
        martel: ["var(--font-martel_sans)"],
        pridi: ["var(--font-pridi)"],
      },
    },
  },
  plugins: [],
};
export default config;
