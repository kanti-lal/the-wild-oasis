// eslint.config.js (ESLint v9+)
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    plugins: { react },
    rules: {
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
