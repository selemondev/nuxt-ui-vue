/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const darkMode = 'class'
export const theme = {
  extend: {
    backgroundColor: ['disabled'],
    textColor: ['disabled'],
    fontFamily: {
      Roboto: 'Roboto',
    },
  },
}
export const plugins = [require('@tailwindcss/forms')]
