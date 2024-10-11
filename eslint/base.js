'use strict';

const es6Rules = require('./rules/es6');
const tsRules = require('./rules/ts');
const tsxRules = require('./rules/tsx');
const testTsxRules = require('./rules/test-tsx');
const baseJSRules = require('./rules/basejs');
const sbisRules = require('./rules/sbisRules');

// Configuration for any JS code: es5, es6+, node.js
module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 13,
      sourceType: 'script'
   },
   plugins: [
      '@typescript-eslint',
   ],
   env: {
      browser: true,
      node: true,
      es6: true,
      amd: true,
      mocha: true,
      jest: true,
      jquery: true
   },
   globals: {
      rk: true
   },
   rules: {

      // ВСЕ правила, что находятся здесь, совпадают и для js, и для ts.
      // Если что-то не совпадает - в отдельный конфиг

      ...sbisRules,

      // Possible Errors
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-unsafe-finally': 'error',
      'use-isnan': 'error',

      // Best Practices
      'dot-notation': ['error', { allowKeywords: true }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      radix: 'error',

      // Variables
      'no-undef-init': 'error',

      // ECMAScript 6
      //---------------------
      // Settings that encourage us to write code incompatible with ES5 are in ./es6.js
      'constructor-super': 'error'
   },
   overrides: [
      {
         files: ['**/*.js', '**/*.es'],
         rules: baseJSRules
      },
      {

         // этот override должен быть ниже обычного js, чтобы перекрыть его
         files: ['**/*.test.js', '**/*.case.js'],
         rules: {
            'max-nested-callbacks': 'off'
         }
      },
      {
         files: ['**/*.es'],
         parserOptions: {
            ecmaVersion: 9,
            sourceType: 'module'
         },
         rules: es6Rules
      },
      {
         files: ['**/*.ts', '**/*.tsx'],
         rules: tsRules
      },
      {
         files: ['**/*.tsx'],
         rules: tsxRules,
         ecmaFeatures: {
            jsx: true
         },
         plugins: [
            'react',
            'react-hooks'
         ],
         settings: {
            react: {
               pragma: 'React',
               version: '17.0',
            }
         }
      },
      {
         files: ['**/*.test.tsx'],
         rules: testTsxRules,
         ecmaFeatures: {
            jsx: true
         },
         plugins: [
            'testing-library'
         ],
         settings: {
            react: {
               pragma: 'React',
               version: '17.0',
            }
         }
      },
   ]
};
