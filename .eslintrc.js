module.exports = {
  "parser": "typescript-eslint-parser",
  // "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
  },
  "extends": [
    "eslint:recommended",
  ],
  "plugins": ["react"],
  "rules": {
    "no-empty-character-class": 2
    // "semi": [2, "never"],
    // "react/jsx-tag-spacing": [2],
    // "react/jsx-curly-spacing": [2, "always"],
  }
}
