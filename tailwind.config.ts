/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#130f40',

          secondary: '#e056fd',

          accent: '#7ed6df',

          neutral: '#34495e',

          'base-100': '#ecf0f1',

          info: '#00d2d3',

          success: '#1dd1a1',

          warning: '#feca57',

          error: '#ff6b6b',
        },
      },
    ],
  },
};
