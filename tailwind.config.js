module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Josefin Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '4rem',
      '3xl': '6rem',
      '4xl': '8rem',
      '5xl': '10rem',
    },
    lineHeight: {
      normal: '1.2',
      relaxed: '1.4',
    },
    maxWidth: {
      xs: '10ch',
      sm: '32ch',
      md: '48ch',
      lg: '67ch',
      tight: '600px',
      normal: '880px',
      loose: '960px',
      'extra-loose': '1180px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
