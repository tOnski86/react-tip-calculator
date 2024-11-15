/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0%' },
          '80%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },
      },
      animation: {
        slideLeft: 'slideLeft .5s ease-in-out',
      },
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      cyan: {
        100: 'hsl(189, 41%, 97%)',
        200: 'hsl(185, 41%, 84%)',
        300: 'hsl(184, 14%, 56%)',
        400: 'hsl(186, 14%, 43%)',
        500: 'hsl(172, 67%, 45%)',
        600: 'hsl(183, 100%, 15%)',
      },
      red: '#B58372',
      powder: '#9FE8DF',
    },
    fontFamily: {
      spaceMono: ['"Space Mono"', 'sans-serif'],
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
*/
