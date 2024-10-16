import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  jsdoc.configs["flat/recommended"],
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "jsdoc/no-undefined-types": "off",
    },
  },
];
