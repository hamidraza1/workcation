module.exports = {
  theme: {
    extend: {},
    customForms: (theme) => ({
      backgroundColor: theme("colors.gray.700"),
    }),
  },
  variants: {},
  // ...
  plugins: [require("@tailwindcss/custom-forms")],
};
