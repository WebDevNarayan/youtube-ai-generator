import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#ffffff",
        card: "#1f1f1f",
        "card-foreground": "#ffffff",
        popover: "#1f1f1f",
        "popover-foreground": "#ffffff",
        primary: "#ff0000",
        "primary-foreground": "#ffffff",
        secondary: "#272727",
        "secondary-foreground": "#ffffff",
        muted: "#272727",
        "muted-foreground": "#aaaaaa",
        accent: "#272727",
        "accent-foreground": "#ffffff",
        destructive: "#ff4444",
        "destructive-foreground": "#ffffff",
        border: "#383838",
        input: "#272727",
        ring: "#ff0000",
      },
      borderRadius: {
        radius: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config; 