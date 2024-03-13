import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background-yellow': '#FFFAED',
        'dark-green':'#066D2A',
        'golden-yellow':'#F1D32A',
        'goldern-brown':'#ED8B22',
        'claier-blue' : '#389DC7',
        'gaz-brown' : '#624626'
      },
    },
  },
  plugins: [],
};
export default config;
