import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        melon: {
          50: '#DCF2E4',
          100: '#BDE0C9',
          200: '#9DCEAE',
          300: '#7EC898',
          400: '#57BF7B',
          500: '#5DD386',
          600: '#359055',
          700: '#297A45',
          800: '#1A6534',
          900: '#124B26',
        },
        logos: {
          kakao: '#FAE100',
          kakaoHover: '#FFE81C',
        },
      }
    }
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
}
export default config
