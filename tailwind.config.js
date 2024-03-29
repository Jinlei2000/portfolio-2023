import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggle dark mode with class 'dark'
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // use own poppins font & add default font stack
      fontFamily: {
        // sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },

      // use own colors
      colors: {
        own: {
          'primary-400': '#D0BDF8',
          'primary-450': '#A17CF0',
          'primary-500': '#7B47EB',
          'primary-600': '#5F20E6',

          secondary: '#4780EB',
          'secondary-700': '#4373CC',
          'secondary-800': '#244076',

          'neutral-0': '#FFFFFF',
          'neutral-50': '#FAFCFF',
          'neutral-100': '#E6EAF2',
          'neutral-200': '#DBDFE6',
          'neutral-300': '#BDC1C7',
          'neutral-400': '#A4A7AD',
          'neutral-500': '#8D8F94',
          'neutral-600': '#494A4D',
          'neutral-700': '#303133',
          'neutral-800': '#212326',
          'neutral-900': '#1C1F24',
        },
      },
      // use own border-radius
      borderRadius: {
        'own-sm': '0.3125rem', // 5px
        own: '0.625rem', // 10px
        'own-md': '1.25rem', // 20px
        'own-lg': '1.875rem', // 30px
      },
    },
  },
  plugins: [],
}
