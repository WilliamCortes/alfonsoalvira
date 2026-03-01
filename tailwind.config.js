/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32', // Verde oscuro
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        secondary: {
          DEFAULT: '#81C784', // Verde suave
          light: '#A5D6A7',
          dark: '#519657',
        },
        accent: {
          blue: '#1976D2',
          orange: '#FF8A65',
          pink: '#F8BBD0',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#F9F9E9',
        },
        background: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.75rem', // 12px
        'md': '0.5rem',  // 8px
      },
    },
  },
  plugins: [],
};
