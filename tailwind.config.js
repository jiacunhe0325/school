/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': '#3b82f6', // blue-500
          'indigo': '#6366f1', // indigo-500
          'purple': '#a855f7', // purple-500
          'fuchsia': '#d946ef', // fuchsia-500
          'orange': '#f97316', // orange-500
          'amber': '#f59e0b', // amber-500
        }
      }
    },
  },
  plugins: [],
}