/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,css,tsc}"],
    theme: {
        extend: { colors: { steam: "#0d171f" } },
        extend: {
            gridTemplateColumns: {
                // Simple 16 column gri
                '21': 'repeat(21, minmax(0, 1fr))',
            }

        },
        plugins: [],
    }
}