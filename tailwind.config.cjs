/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        magnificent: '#fa00ff',
        pretty: '#212025',
        inaccessible: '#727272',
      },
    },
  },
  plugins: [],
}
