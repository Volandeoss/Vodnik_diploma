import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5077',
        secondary: '#4DA1A9',
        accent: '#79D7BE',
        background: '#F6F4F0',
      },
    },
  },
  plugins: [],
} satisfies Config;
