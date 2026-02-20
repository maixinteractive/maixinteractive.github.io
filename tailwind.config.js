/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Yeni temanın ana renkleri
        maixRed: '#dc2626', // Tailwind'in red-600 tonu, projedeki vurgu rengimiz
        darkBg: '#000000',  // Mutlak siyah
        panelBg: '#0a0a0a', // Kartlar ve bölümler için çok koyu gri
        cardBg: '#111111',  // Hover öncesi kart arka planı
      },
      boxShadow: {
        // Butonlar ve kartlar için özel kırmızı neon parlama efektleri
        'glow-red': '0 0 20px rgba(220, 38, 38, 0.4)',
        'glow-red-lg': '0 0 30px -5px rgba(220, 38, 38, 0.6)',
        'glow-red-hover': '0 0 40px rgba(220, 38, 38, 0.8)',
      },
      fontFamily: {
        // Projedeki "font-black" ve "tracking-widest" sınıflarının en iyi
        // duracağı, AAA oyun sitelerinde çok kullanılan keskin fontlar:
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}