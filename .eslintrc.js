module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "next/core-web-vitals", "plugin:prettier/recommended"],
  globals: {
    React: true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  overrides: [
    {
      files: ["**/*.test.*"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      plugins: ["jest", "testing-library"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
