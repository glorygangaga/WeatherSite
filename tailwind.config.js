/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Включает поддержку через класс .dark
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // если используешь React или Vite
  ],
  theme: {
    colors: {
      'header-bg-dark': 'rgba(14, 14, 14, 0.2)',
      'header-bg': 'rgba(247, 248, 250, 0.8)',
      'main-bg-white': 'rgb(247, 248, 250)',
      'main-bg-black': 'rgb(14, 14, 14)',
      'main-color-white': 'rgb(38, 38, 51)',
      'main-color-black': 'rgba(255, 255, 255, 0.9)',
      'default-button-dark': 'rgba(255, 255, 255, 0.06)',
      'default-button': 'rgba(180, 184, 204, 0.12)',
      'input-default-bg': 'rgb(22, 22, 23)',
      'input-default-bg-dark': 'rgb(255, 255, 255)',
      'default-button-hover-dark': 'rgba(255, 255, 255, 0.12)',
      'default-button-hover': 'rgba(180,184,204,0.26)',
      'settings-place-dark': 'rgb(47,47,50)',
      'settings-place': 'rgba(247,248,250,1)',
      'settings-hover-button': 'rgba(180,184,204,0.18)',
      'secondary-text': 'rgb(133,136,158)',
      'secondary-text-dark': 'rgba(255,255,255,0.56)',
      'forecast-bg': 'rgb(30,31,43)',
      'arrow-button': 'rgb(255, 255, 255)',
      'arrow-button-dark': 'rgb(47,47,50)',
      'blue': 'rgb(119, 172, 244)',
      'red': 'rgb(238, 96, 68)',
      'forecast-days-bg': '#F4FBFF',
      'forecast-days-bg-dark': '#1E1F2B',
      'forecast-days-main-dark': 'rgb(28,28,30)',
      'chart-min': '#48535E',
    },
    extend: {
      borderRadius: {
        'default': '32px'
      }
    },
  },
  plugins: [],
}

