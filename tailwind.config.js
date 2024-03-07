/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#1A1A1A",
        "secondary": "#E59500", 
        "accent": "#6E7DAB", 
        "neutral": "#E5DADA", 
        "base-100": "#1e2842", 
        "info": "#1EA896",  
        "success": "#00d996",    
        "warning": "#c44c00",    
        "error": "#d72441",
        },
      },
    ],
  },
}

