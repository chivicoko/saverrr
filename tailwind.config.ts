import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#550022',
        primary_hover: '#880022',
        secondary: '#f87171',
        secondary_light: '#fecaca',
        secondary_lighter: '#fee2e2',
        customGray: '#E2E2E2',
        textGray: '#6b7280',
        textGrayDarker: '#121212',
        delete: '#b91c1c',
        delete_hover: '#dc2626',
      },
      borderRadius: {
        'radius-4': '4px',
        'radius-8': '8px',
        'radius-12': '12px',
      },
    },
  },
  plugins: [],
};
export default config;
