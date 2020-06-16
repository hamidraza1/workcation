module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
      },
    },
    customForms: (theme) => ({
      backgroundColor: theme("colors.gray.700"),
    }),
  },
  variants: {},
  // ...
  plugins: [require("@tailwindcss/custom-forms")],
};
