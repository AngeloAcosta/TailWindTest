module.exports = {
  theme: {
    colors: {
      white: '#f9f6f7',
      orange: '#F89937',
      highlight: '#567077',
      background: '#f6f7f7',
      veryLightTangelo: '#ffb971',
      orangeYellow: '#ffcb69',
      gray: '#9A9A9A'

    },
    backgroundColor: theme => ({
   ...theme('colors'),
    'dark': '#3C3C3C'   
    })
  },
  variants: {},
  plugins: []
}
