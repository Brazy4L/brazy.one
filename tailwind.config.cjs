/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        magnificent: '#d698ff',
        pretty: '#212025',
        inaccessible: '#959595',
      },
    },
  },
  plugins: [],
}
