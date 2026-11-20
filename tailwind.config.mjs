/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        p5red: '#E60012',
        p5dark: '#0A0A0A',
        p5gray: '#1E1E1E',
        p5lightgray: '#D9D9D9',
        p5yellow: '#FFE600',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
