module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "var(--zmp-primary-color)",
        gray: "#8E8E93", // Apple system gray
        divider: "#E5E5EA", // Apple separator color
        green: "#34C759", // Apple system green
        background: "#ffffff", // Cards and modals remain white
        skeleton: "rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: "16px", // standard iOS card border radius
        md: "12px", // standard iOS container internal radius
        sm: "8px",
        full: "9999px",
      },
      boxShadow: {
        "ios-card": "0 4px 20px rgba(0, 0, 0, 0.05)",
        "ios-float": "0 10px 40px rgba(0, 0, 0, 0.08)",
      },
    },
  },
};
