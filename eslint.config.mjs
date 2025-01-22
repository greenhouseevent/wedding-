import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "off",
      // Allow empty object types
      "@typescript-eslint/no-empty-object-type": "off",
      // Allow explicit any types
      "@typescript-eslint/no-explicit-any": "off",
      // Make let/const errors warnings instead of errors
      "prefer-const": "warn",
    },
  },
];

export default eslintConfig;
