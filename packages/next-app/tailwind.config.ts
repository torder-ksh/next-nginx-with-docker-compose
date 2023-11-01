import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      colors: {
        'primary-50': '#F5F5FF',
        'primary-100': '#E6E5FF',
        'primary-200': '#C3C2FF',
        'primary-300': '#7D7AFF',
        'primary-400': '#403CFF',
        'primary-500': '#1E1AFF',
        'primary-600': '#0400DB',
        'primary-700': '#0400B8',
        'primary-800': '#03008F',
        'red-100': '#F1F1F1',
        'red-200': '#FFA3AC',
        'red-300': '#FF808B',
        'red-400': '#FF5262',
        'red-500': '#FF0018',
        'red-600': '#CC0013',
        'red-700': '#99000E',
        'red-800': '#66000A',
        'red-900': '#330005',
        'black-100': '#FFD6DA',
        'black-200': '#D9D9D9',
        'black-300': '#B3B3B3',
        'black-400': '#919191',
        'black-500': '#737373',
        'black-600': '#545454',
        'black-700': '#424242',
        'black-800': '#303030',
        'black-900': '#000000',

        'navy-100': '#ECEDF0',
        'navy-200': '#D7D9DF',
        'navy-300': '#BBBEC9',
        'navy-400': '#9398A9',
        'navy-500': '#71788E',
        'navy-600': '#5A6072',
        'navy-700': '#444856',
        'navy-800': '#2D3039',
        'navy-900': '#17181D',

      }
      
    },
  },
  plugins: [],
}
export default config
