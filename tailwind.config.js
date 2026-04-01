tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#eef8ff",
                    100: "#d8efff",
                    200: "#b8e1ff",
                    300: "#84cbff",
                    400: "#47adff",
                    500: "#178cff",
                    600: "#006de0",
                    700: "#0058b6",
                    800: "#0b4c90",
                    900: "#103f73"
                }
            },
            boxShadow: {
                glow: "0 20px 80px rgba(23, 140, 255, 0.25)"
            },
            backgroundImage: {
                mesh: "radial-gradient(circle at top left, rgba(132, 203, 255, 0.25), transparent 35%), radial-gradient(circle at 80% 20%, rgba(23, 140, 255, 0.18), transparent 25%), linear-gradient(135deg, #f7fbff 0%, #dcefff 50%, #eef8ff 100%)"
            }
        }
    }
};