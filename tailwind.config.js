/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)', 
        error: 'var(--error)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: 'var(--border)',
      },
      animation: {
        'fade-in': 'fadeIn var(--transition-normal) ease-in',
        'fade-in-up': 'fadeInUp var(--transition-normal) ease-in',
        'progress': 'progress 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
