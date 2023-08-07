import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        normalFont: ["Sigmar", "cursive", "Space Grotesk", "sans-serif"],
        cursiveFont: [ "Caveat", "cursive", "Sigmar", "cursive", "Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
