import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bricolage)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "ai-gradient":
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.4), transparent 40%), radial-gradient(circle at 80% 30%, rgba(236,72,153,0.3), transparent 40%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.3), transparent 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
