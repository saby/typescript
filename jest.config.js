/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      // немножко ускоряем сборку тестов, потому что тайпчек не нужен
      diagnostics: false
    }
  },
  moduleNameMapper: {
    'eslint/use-at-your-own-risk': '<rootDir>/node_modules/eslint/lib/unsupported-api.js'
  }
};
