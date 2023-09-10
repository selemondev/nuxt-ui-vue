/* eslint-disable no-unused-expressions */
import tailwindColors from './node_modules/tailwindcss/colors'

const colorSafeList = []

const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName))
    continue

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === 'object') {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`),
        colorSafeList.push(`accent-${colorName}-${shade}`),
        colorSafeList.push(`bg-${colorName}-${shade}`),
        colorSafeList.push(`hover:enabled:bg-${colorName}-${shade}`),
        colorSafeList.push(`focus:bg-${colorName}-${shade}`),
        colorSafeList.push(`ring-${colorName}-${shade}`),
        colorSafeList.push(`focus:ring-${colorName}-${shade}`),
        colorSafeList.push(`border-${colorName}-${shade}`)
      }
    })
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: colorSafeList,
  theme: {
    extend: {
      colors: tailwindColors,
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      fontFamily: {
        Roboto: 'Roboto',
      },
    },
  },
  plugins: [],
}
