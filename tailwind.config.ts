import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      inset: {
        150: "150px",
        200: "200px",
        300: "300px",
        470: "470px",
      },

      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        jobCard: "0 2.8125rem 3.75rem 0 rgb(34 34 34/10%)",
      },
      zIndex: {
        75: "75",
        100: "100",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradientP-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        25: "100px",
      },
      borderRadius: {
        "50": "50%",
        sm: "4px",
      },
      margin: {
        1000: "1000px",
        1200: "1200px",
      },
      height: {
        0.5: "2px",
        150: "600px",
        50: "200px",
        114: "456px",
        225: "900px",
      },
      minHeight: {
        75: "300px",
        45: "180px",
        20: "80px",
      },
      fontSize: {
        heading: "44px",
        10.5: "42px",
        2.5: "27px",
      },
      spacing: {
        "250": "250px",
      },
      colors: {
        black: {
          primary: "#151515",
          lighter: "#222222",
          medium: "#0F172A",
        },
        blue: {
          primary: "#e5edf1",
        },
        orange: {
          primary: "#F59624",
        },
        gray: {
          lighter: "#808080",
          primary: "#f1f1f1",
          darker: "#dfdfdf",
          bgLight: "#f9f9f9",
          border: "#eee",
          100: "#696969",
        },
        green: {
          primary: "#008000",
          darkGreen: "#013220",
        },
        yellow: {
          star: "#e79120",
          warning: "#fff3cd",
          warningText: "#856404",
        },
        purple: {
          primary: "#6509e2",
          secondary: "#5a02b4",
          ghostPurple: "#eef2ff",
        },
        red: {
          error: "#f5c6cb",
          errorText: "#FF3333",
        },
        footer: {
          primary: "#201D3C",
        },
      },
      width: {
        container: "1280px",
        130: "520px",
        87: "348px",
        98: "392px",
        68: "272px",
      },
      maxWidth: {
        container: "1250px",
        container_sm: "720px",
      },
    },
  },
  plugins: [],
};
export default config;
