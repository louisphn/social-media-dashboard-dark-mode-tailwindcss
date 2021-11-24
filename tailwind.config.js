module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // Colors
      'lime-green': '#1db489',
      'bright-red': '#dc414c',
      facebook: '#198ff5',
      twitter: '#1ca0f2',
      'instagram-start': '#fdc468',
      'instagram-end': '#df4996',
      youtube: '#c4032a',

      // Dark Theme

      'background-dark': '#1e202a',
      'background-header-dark': '#1f212e',
      'background-card-dark': '#252a41',
      'text-dark': '#8b97c6',
      'heading-text-dark': '#fff',
      'toggle-bg-dark-from': '#378fe6',
      'toggle-bg-dark-to': '#3eda82',

      // Light Theme

      'background-light': '#fff',
      'background-header-light': '#f5f7ff',
      'background-card-light': '#f0f2fa',
      'text-light': '#63687e',
      'heading-text-light': '#1e202a',
      'toggle-bg-light': '#aeb3cb',
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
