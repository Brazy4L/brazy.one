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
      transitionTimingFunction: {
        cubic: 'cubic-bezier(0.24, 0.11, 0.27, 1)',
      },
    },
  },
  plugins: [],
}
