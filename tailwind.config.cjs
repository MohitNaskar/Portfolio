/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-bg)",
        "bg-secondary": "var(--color-bg-secondary)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "#5A8A6A",
        "accent-muted": "#3D6B5A",
        "text-primary": "var(--color-text-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "Fira Code", "monospace"],
      },
      screens: {
        xs: "450px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
