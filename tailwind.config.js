/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'retro-orange': '#e8850d',
        'retro-blue': '#085cd4',
        'retro-tan': '#ead777',
        'retro-black': '#231e0b'
      }
    }
  },
  plugins: []
}
