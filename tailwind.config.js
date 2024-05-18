/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'HomeImg': "url('/assets/img/spacex-launch.webp')"
      }
    },
  },
  plugins: [],
}
