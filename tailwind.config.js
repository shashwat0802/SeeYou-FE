/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white-20': '#ffffff33',
        'white-9': 'rgba(255, 255, 255, 0.09)',
        'white-light':"#F8F9FE",
        'white-darkest':"#C5C6CC",
        'required':"#FF616D"
      },
    },
  },
  plugins: [],
};
