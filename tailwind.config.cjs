/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'cubic': 'cubic-bezier(0.24, 0.11, 0.27, 1)'
      }
    },
    fontFamily: {
      major: ['"Major Mono Display"', 'monospace'],
      train: ['"Train One"', 'monospace'],
    },
  },
  plugins: [],
};
