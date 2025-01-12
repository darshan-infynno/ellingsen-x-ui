/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        lg: "1080px",
      },
      fontSize: {
        10: "10px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#C4AAF2",
          300: "#B491F2",
          500: "#9C73E5",
          700: "#8958E1",
          900: "#7741D9",
          50: "#E6D9FF",
        },
        neutral: {
          100: "#0A0A0A",
          200: "#141414",
          300: "#1F1F1F",
          400: "#292929",
          500: "#3D3D3D",
          600: "#666666",
          900: "#DBDBDB",
        },
        error: {
          100: "#FFB2B2",
          300: "#FF8080",
          500: "#F26161",
          700: "#EF4444",
          900: "#CC3333",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "10px",
      },

      opacity: {
        1: "0.01",
        2: "0.02",
        4: "0.04",
        6: "0.06",
      },
      backgroundImage: {
        "gradient-properfans":
          "linear-gradient(120deg, #FD8DDD 5.59%, #8958E1 45.66%, #8958E1 53.91%, #00ECD2 89.96%)",
        "gradient-error":
          "linear-gradient(180deg, rgba(255, 69, 58, 0.20) 0%, rgba(255, 69, 58, 0.00) 100%)",
      },
      boxShadow: {
        main: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      gap: {
        "10px": "10px",
        15: "60px",
        17: "68px",
        22: "88px",
        "19px": "19px",
        "70px": "70px",
        "25px": "25px",
        30: "120px",
        25: "100px",
        "130px": "130px",
        "150px": "150px",
        42: "168px",
        "170px": "170px",
        "174px": "174px",
        "180px": "180px",
        "200px": "200px",
      },
      spacing: {
        0.75: "3px",
        1.25: "5px",
        "10px": "10px",
        2.75: "11px",
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        "31px": "31px",
        11.5: "46px",
        14.5: "60px",
        "42px": "42px",
        "46px": "46px",
        13: "52px",
        15: "60px",
        17: "68px",
        22: "88px",
        "19px": "19px",
        "70px": "70px",
        "25px": "25px",
        30: "120px",
        35: "140px",
        25: "100px",
        "130px": "130px",
        "150px": "150px",
        42: "168px",
        "75px": "75px",
        "170px": "170px",
        "174px": "174px",
        "180px": "180px",
        "200px": "200px",
        "250px": "250px",
        "286px": "286px",
        "390px": "390px",
        "448px": "448px",
        "298px": "298px",
        "650px": "650px",
        "681px": "681px",
        "700px": "700px",
        "865px": "865px",
      },
      minWidth: {
        "640px": "640px",
        "700px": "700px",
      },
      maxWidth: {
        screen: "100vw",
        "108px": "108px",
        "120px": "120px",
        "130px": "130px",
        "160px": "160px",
        "244px": "244px",
        "270px": "270px",
        "700px": "700px",
      },
      borderWidth: {
        0.25: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    scrollbar: ["rounded"],
  },
};
