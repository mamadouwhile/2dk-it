import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        "surface-muted": "var(--surface-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        "primary-soft": "var(--primary-soft)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0, 0, 0, 0.24)",
        card: "0 20px 60px rgba(0, 0, 0, 0.34)",
        focus: "0 0 0 4px rgba(var(--primary-rgb), 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      maxWidth: {
        container: "80rem",
        prose: "42rem",
      },
    },
  },
} satisfies Config;