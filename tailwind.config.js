/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                movies: "repeat(auto-fill, minmax(300px, 1fr))",
            },
            keyframes: {
                preloader: {
                    "0%": { transform: "translate(-100%)" },
                    "100%": { transform: "translate(200%)" },
                },
            },
            animation: {
                preloader:
                    "preloader 1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            },
        },
    },
    plugins: [],
};
