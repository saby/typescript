/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '\\.tsx?$': ['ts-jest', {
      // немножко ускоряем сборку тестов, потому что тайпчек не нужен
      diagnostics: false
    }]
  },
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true
  },
  moduleNameMapper: {
    'eslint/use-at-your-own-risk': '<rootDir>/node_modules/eslint/lib/unsupported-api.js'
  }
};
