module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "maxf-gray": "#3A3A3A",
                "maxf-cyan": "#34FFD9",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
