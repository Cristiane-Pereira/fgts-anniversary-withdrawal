const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['next/babel'], // Mantendo compatível com o Next.js
});

