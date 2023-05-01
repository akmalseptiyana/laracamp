/**
 * Feel free to enable/disable the ESLint rules
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    // "plugin:import/typescript",
    // "plugin:sort-export-all/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "tailwindcss",
    "prettier",
    // "import",
    // "sort-export-all",
  ],

  rules: {
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "object-shorthand": [1, "always"],
    "tailwindcss/classnames-order": 1, // use prettier-plugin-tailwindcss
    "tailwindcss/no-arbitrary-value": 0,
    "tailwindcss/no-custom-classname": 0,
    // "react/self-closing-comp": 1,
    // "import/order": [
    //   "warn",
    //   {
    //     alphabetize: {
    //       caseInsensitive: true,
    //       order: "asc",
    //     },
    //     groups: [
    //       "builtin",
    //       "external",
    //       "internal",
    //       "parent",
    //       "sibling",
    //       "index",
    //       "object",
    //       "type",
    //     ],
    //     "newlines-between": "always",
    //     warnOnUnassignedImports: true,
    //   },
    // ],
  },

  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
