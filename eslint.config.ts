export default [
  {
      files: ["**/*.ts"],
      plugin: [
        "react-hooks",
      ],
      rules: {
          "prefer-const": "error",
          "no-const-assign": "error",
          "no-constant-binary-expression": "error",
          "no-unreachable": "error",
          "no-irregular-whitespace": "error",
          "no-debugger": "error",
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "error",
          "jsx-a11y/aria-role": [ 2, {
              "allowedInvalidRoles": ["text"],
              "ignoreNonDOM": true
          }],
      }
  }
];