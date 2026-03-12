import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sea-blue-light": "#97A6B5",
        "sea-blue-mid": "#44607B",
        "sea-blue-dark": "#001D39",
        "sand-light": "#F9F6F1",
        "dark-neutral": "#212121",
        "green-light": "#9AB4A7",
        "green-mid": "#688F7A",
        "green-dark": "#244F39",
        "sun-light": "#FCE5BD",
        "sun-mid": "#F7B139",
        "sun-dark": "#C37600",
        "sky-blue-light": "#E9F2F4",
        "sky-blue-mid": "#9DC4CE",
        "sky-blue-dark": "#5F8A96",
        "purple-light": "#A497D9",
        "purple-mid": "#796BB2",
        "purple-dark": "#463880",
      },
      fontFamily: {
        heading: ["MartinaPlantin", "Lora", "Georgia", "serif"],
        body: ["Inter", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
