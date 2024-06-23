/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
