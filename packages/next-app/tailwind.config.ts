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

        'yellow-50': '#FFF4E6',
        'yellow-100': '#FEEACD',
        'yellow-200': '#FEDBA9',
        'yellow-300': '#FDC577',
        'yellow-400': '#FDB045',
        'yellow-500': '#FC9E1A', //semantic-yellow
        'yellow-600': '#E38603',
        'yellow-700': '#BF7103',
        'yellow-800': '#5B3501',
        'yellow-900': '#281801',

        'magenta-50': '#FEE7F0',
        'magenta-100': '#FDCEE2',
        'magenta-200': '#FBA7CA',
        'magenta-300': '#F976AD',
        'magenta-400': '#F7468F',
        'magenta-500': '#F52179', //semantic-magenta
        'magenta-600': '#D70A5F',
        'magenta-700': '#A60749',
        'magenta-800': '#6B052F',
        'magenta-900': '#310216',

        'green-50': '#EAFAF4',
        'green-100': '#D5F6E8',
        'green-200': '#97E8C6',
        'green-300': '#58DAA4',
        'green-400': '#37D292',
        'green-500': '#2ABB7F', //semantic-green
        'green-600': '#249E6B',
        'green-700': '#1C7D55',
        'green-800': '#135339',
        'green-900': '#0B3222',

        'teal-50': '#E7F6F8',
        'teal-100': '#CFEEF2',
        'teal-200': '#AFE2E9',
        'teal-300': '#88D4DD',
        'teal-400': '#60C6D2',
        'teal-500': '#38B8C7',
        'teal-600': '#2D939F',
        'teal-700': '#226E77',
        'teal-800': '#164950',
        'teal-900': '#0B2528',

        'blue-50': '#E7F0FE',
        'blue-100': '#CEE2FD',
        'blue-200': '#9DC4FB',
        'blue-300': '#6DA7F8',
        'blue-400': '#4F95F7',
        'blue-500': '#2179F5', //semantic-blue
        'blue-600': '#0A61DC',
        'blue-700': '#084BAB',
        'blue-800': '#05367A',
        'blue-900': '#032049',
      },
    },
  },
  plugins: [],
}
export default config
