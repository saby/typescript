/**
 * Базовые правила eslint для js
 */
const restrictedGlobals = require('confusing-browser-globals');

module.exports = {

   // Possible errors
   'no-redeclare': 'error',
   'no-unmodified-loop-condition': 'warn',
   'no-unused-expressions': [
      'error',
      {
         allowShortCircuit: false,
         allowTernary: false,
         allowTaggedTemplates: false
      }
   ],
   'no-cond-assign': ['error', 'always'],
   'no-constant-condition': 'error',
   'no-unreachable': 'error',
   'no-void': 'error',
   'valid-typeof': ['error', { requireStringLiterals: true }],
   'for-direction': 'error',
   'getter-return': ['error', { allowImplicit: true }],
   'no-await-in-loop': 'error',
   'no-compare-neg-zero': 'error',
   'no-console': 'warn',
   'no-control-regex': 'error',
   'no-dupe-args': 'error',
   'no-dupe-keys': 'error',
   'no-duplicate-case': 'error',
   'no-empty-character-class': 'error',
   'no-ex-assign': 'error',
   'no-extra-boolean-cast': 'error',
   'no-func-assign': 'error',
   'no-inner-declarations': 'error',
   'no-invalid-regexp': 'error',
   'no-irregular-whitespace': 'error',
   'no-obj-calls': 'error',
   'no-prototype-builtins': 'off',
   'no-regex-spaces': 'error',
   'no-sparse-arrays': 'error',
   'no-template-curly-in-string': 'error',
   'no-unexpected-multiline': 'error',
   'no-unsafe-negation': 'error',

   // Best practices
   'no-undef': 'error',
   'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
   'no-extra-label': 'error',
   'no-unused-labels': 'error',
   'no-invalid-this': 'warn',
   'no-throw-literal': 'error',
   'no-fallthrough': 'error',
   curly: 'warn',
   'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
   'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),
   'accessor-pairs': 'off',
   'array-callback-return': ['error', { allowImplicit: true }],
   'block-scoped-var': 'error',
   'class-methods-use-this': [
      'error',
      {
         exceptMethods: []
      }
   ],
   'default-case': 'error',
   'max-classes-per-file': 'warn',
   'no-alert': 'warn',
   'no-case-declarations': 'error',
   'no-div-regex': 'off',
   'no-else-return': ['error', { allowElseIf: false }],
   'no-empty-function': 'error',
   'no-empty-pattern': 'error',
   'no-eq-null': 'off',
   'no-extend-native': 'error',
   'no-extra-bind': 'error',
   'no-global-assign': ['error', { exceptions: [] }],
   'no-implicit-coercion': 'off',
   'no-implicit-globals': 'off',
   'no-implied-eval': 'error',
   'no-iterator': 'error',
   'no-lone-blocks': 'error',
   'no-loop-func': 'error',
   'no-magic-numbers': 'off',
   'no-multi-str': 'error',
   'no-new': 'error',
   'no-new-func': 'error',
   'no-octal': 'error',
   'no-octal-escape': 'error',
   'no-param-reassign': 'error',
   'no-proto': 'error',
   'no-restricted-properties': [
      'error',
      {
         property: '__defineGetter__',
         message: 'Please use Object.defineProperty instead.'
      },
      {
         property: '__defineSetter__',
         message: 'Please use Object.defineProperty instead.'
      }
   ],
   'no-return-assign': ['error', 'always'],
   'no-script-url': 'error',
   'no-self-assign': 'error',
   'no-self-compare': 'error',
   'no-useless-call': 'error',
   'no-useless-concat': 'error',
   'no-useless-escape': 'error',
   'no-useless-return': 'error',
   'no-warning-comments': 'off',
   'no-with': 'error',
   'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
   'vars-on-top': 'off',
   yoda: 'off',
   'init-declarations': 'off',
   'no-delete-var': 'error',
   'no-label-var': 'error',
   'no-shadow': 'error',
   strict: 'off',
   'no-shadow-restricted-names': 'error',
   'no-undefined': 'off',
   'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

   // Node.js and CommonJS
   // Settings are in ./node.js
   'callback-return': 'off',
   'global-require': 'off',
   'handle-callback-err': 'off',
   'no-buffer-constructor': 'off',
   'no-mixed-requires': 'off',
   'no-new-require': 'off',
   'no-path-concat': 'off',
   'no-process-env': 'off',
   'no-process-exit': 'off',
   'no-restricted-modules': 'off',
   'no-sync': 'off',

   // Stylistic issues
   'line-comment-position': [
      'warn',
      {
         position: 'above'
      }
   ],
   'consistent-this': ['warn', 'self'],
   'id-match': [
      'warn',
      '^(_?\\$?[A-Za-z][a-zA-Z0-9]{0,31}|[A-Z][A-Z0-9_]{2,31}|\\$)$',
      {
         properties: true
      }
   ],
   'prefer-object-spread': 'off',
   'require-await': 'warn',
   camelcase: 'off',
   'capitalized-comments': 'off',
   'func-name-matching': 'off',
   'func-names': 'off',
   'func-style': 'off',
   'id-blacklist': 'off',
   'id-length': 'off',
   'max-depth': 'off',
   'max-lines': 'off',
   'max-lines-per-function': 'off',
   'max-nested-callbacks': ['warn', 4],
   'max-params': 'off',
   'max-statements': 'off',
   'multiline-comment-style': 'off',
   'new-cap': 'warn',
   'no-array-constructor': 'warn',
   'no-bitwise': 'warn',
   'no-continue': 'off',
   'no-inline-comments': 'off',
   'no-lonely-if': 'warn',
   'no-multi-assign': 'warn',
   'no-negated-condition': 'off',
   'no-nested-ternary': 'off',
   'no-new-object': 'warn',
   'no-plusplus': 'off',
   'no-restricted-syntax': 'off',
   'no-ternary': 'off',
   'no-underscore-dangle': 'off',
   'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
   'one-var': 'off',
   'operator-assignment': 'off',
   'require-jsdoc': 'off',
   'sort-vars': 'off',
   'unicode-bom': ['error', 'never'],

   // ECMAScript 6
   //---------------------
   // Settings that encourage us to write code incompatible with ES5 are in ./es6.js
   'no-useless-constructor': 'warn',
   'no-var': 'off',
   'object-shorthand': 'off',
   'no-class-assign': 'error',
   'no-const-assign': 'error',
   'no-dupe-class-members': 'error',
   'no-duplicate-imports': 'off',
   'no-new-symbol': 'error',
   'no-restricted-imports': 'off',
   'no-this-before-super': 'error',
   'no-useless-computed-key': 'warn',
   'no-useless-rename': [
      'warn',
      {
         ignoreDestructuring: false,
         ignoreImport: false,
         ignoreExport: false
      }
   ],
   'prefer-arrow-callback': 'off',
   'prefer-const': 'off',
   'prefer-destructuring': 'off',
   'prefer-numeric-literals': 'off',
   'prefer-rest-params': 'off',
   'prefer-spread': 'off',
   'prefer-template': 'off',
   'require-yield': 'error',
   'sort-imports': 'off',
   'symbol-description': 'warn'
};
