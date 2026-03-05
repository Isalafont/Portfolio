/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAFA',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
        'accent-primary': '#667EEA',
        'accent-secondary': '#F59E0B',
        'accent-success': '#10B981',
        'accent-coral': '#EC4899',
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
