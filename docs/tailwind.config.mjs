/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: '#F5F2ED',
        'bg-secondary': '#EDE9E2',
        surface: '#FFFFFF',
        primary: '#1A1714',
        secondary: '#6B6560',
        tertiary: '#9E9891',
        accent: '#C8392B',
        'accent-hover': '#A52D21',
        'accent-subtle': '#F5E8E6',
        'accent-text': '#7A1F17',
        border: 'rgba(26, 23, 20, 0.10)',
        'border-strong': 'rgba(26, 23, 20, 0.20)',
      },
    },
  },
  plugins: [],
};
