import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'retro-orange': '#e8850d',
        'retro-blue': '#085cd4',
        'retro-tan': '#ead777',
        'retro-black': '#231e0b',
        'retro-off-white': '#fffff2'
      },
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
        barlow: ['Barlow', 'serif']
      }
    },
    fontFamily: {
      sans: ['Barlow', ...fontFamily.sans],
      display: ['Lora', ...fontFamily.sans]
    }
  },
  plugins: []
}
