/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-cream': '#FFF8E7',
        'retro-mustard': '#F2B035',
        'retro-orange': '#FF8C42',
        'retro-teal': '#2C9FA3',
        'retro-navy': '#2D3A4B',
        'retro-pink': '#E8B4B8',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0,0,0,0.1)',
        'retro-lg': '8px 8px 0px 0px rgba(0,0,0,0.15)',
        'retro-hover': '6px 6px 0px 0px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
