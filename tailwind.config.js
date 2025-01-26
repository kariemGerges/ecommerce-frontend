/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'fly-to-cart': {
                    '0%': {
                        transform: 'translate(0, 0) scale(1)',
                        opacity: '1',
                    },
                    '50%': {
                        transform: 'translate(100px, -50px) scale(1.2)',
                        opacity: '0.7',
                    },
                    '100%': {
                        transform: 'translate(200px, -100px) scale(0.5)',
                        opacity: '0',
                    },
                },
                'cart-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                'fly-to-cart': 'fly-to-cart 1s ease-in-out',
                'cart-bounce': 'cart-bounce 0.5s infinite',
            },
        },
    },

    plugins: [],
};
