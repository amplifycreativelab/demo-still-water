/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                stone: {
                    50: '#FBF9F6',
                    100: '#F4F1EA', // Base
                    200: '#EAE6DD',
                    800: '#444340',
                    900: '#1B1B1D', // Ink
                },
                ink: '#1B1B1D',
                muted: '#6E6C66',
                sage: {
                    DEFAULT: '#7FAF9B',
                    light: '#96C0AE',
                    dark: '#689380',
                },
                pearl: '#D8E6F1',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Fraunces', 'serif'],
            },
            transitionDuration: {
                DEFAULT: '400ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            },
            keyframes: {
                'slow-spin': {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '50%': { transform: 'rotate(180deg) scale(1.1)' },
                    '100%': { transform: 'rotate(360deg) scale(1)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'slow-spin': 'slow-spin 20s linear infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            },
        },
    },
    plugins: [],
};
