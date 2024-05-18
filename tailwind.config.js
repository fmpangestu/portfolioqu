/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                secondary: '#64748b',
                dark: '#0f172a'
            },
            gridTemplateColumns: {
                'auto-1fr': 'auto 1fr',
              },
            screens: {
                '2xl': '1320px'
            }
        },
    },
    plugins: [],
}

