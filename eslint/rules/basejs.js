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
   'no-multi-spaces': [
      'error',
      {
         ignoreEOLComments: false
      }
   ],
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
   'no-extra-parens': 'off',
   'no-extra-semi': 'error',
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
   'dot-location': ['error', 'property'],
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
   'no-floating-decimal': 'error',
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
   'wrap-iife': ['error', 'any'],
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
   'space-in-parens': ['warn', 'never'],
   'eol-last': ['warn', 'always'],
   'lines-around-comment': [
      'warn',
      {
         beforeBlockComment: true,
         beforeLineComment: true,
         allowBlockStart: true,
         allowObjectStart: true,
         allowObjectEnd: true,
         allowArrayStart: true,
         allowArrayEnd: true,
         allowClassStart: true,
         allowClassEnd: true
      }
   ],
   'line-comment-position': [
      'warn',
      {
         position: 'above'
      }
   ],
   'spaced-comment': [
      'warn',
      'always',
      {
         line: {
            exceptions: ['-', '+']
         },
         block: {
            exceptions: ['-', '+'],
            balanced: true
         }
      }
   ],
   'keyword-spacing': 'warn',
   'max-len': [
      'error',
      120,
      2,
      {
         ignoreUrls: true,
         ignoreComments: true,
         ignoreRegExpLiterals: true,
         ignoreStrings: true,
         ignoreTemplateLiterals: true
      }
   ],
   'consistent-this': ['warn', 'self'],
   'no-trailing-spaces': [
      'warn',
      {
         skipBlankLines: false,
         ignoreComments: false
      }
   ],
   'quote-props': 'off',
   'id-match': [
      'warn',
      '^(_?\\$?[A-Za-z][a-zA-Z0-9]{0,31}|[A-Z][A-Z0-9_]{2,31}|\\$)$',
      {
         properties: true
      }
   ],
   'prefer-object-spread': 'off',
   quotes: ['warn', 'single', 'avoid-escape'],
   'array-bracket-spacing': ['warn', 'never'],
   semi: 'warn',
   'require-await': 'warn',
   'array-bracket-newline': 'off',
   'array-element-newline': ['warn', 'consistent'],
   'block-spacing': 'off',
   'brace-style': ['warn', '1tbs'],
   camelcase: 'off',
   'capitalized-comments': 'off',
   'comma-dangle': [
      'warn',
      {
         arrays: 'only-multiline',
         objects: 'only-multiline',
         imports: 'only-multiline',
         exports: 'only-multiline',
         functions: 'never'
      }
   ],
   'comma-spacing': [
      'warn',

      {
         before: false,
         after: true
      }
   ],
   'computed-property-spacing': ['warn', 'never'],
   'func-call-spacing': ['warn', 'never'],
   'func-name-matching': 'off',
   'func-names': 'off',
   'func-style': 'off',
   'function-paren-newline': ['warn', 'consistent'],
   'id-blacklist': 'off',
   'id-length': 'off',
   'implicit-arrow-linebreak': ['error', 'beside'],
   'jsx-quotes': 'off',
   'key-spacing': [
      'warn',
      {
         beforeColon: false,
         afterColon: true
      }
   ],
   'linebreak-style': 'off',
   'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
   'max-depth': 'off',
   'max-lines': 'off',
   'max-lines-per-function': 'off',
   'max-nested-callbacks': ['warn', 4],
   'max-params': 'off',
   'max-statements': 'off',
   'max-statements-per-line': 'off',
   'multiline-comment-style': 'off',
   'multiline-ternary': 'off',
   'new-cap': 'warn',
   'new-parens': 'warn',
   'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
   'no-array-constructor': 'warn',
   'no-bitwise': 'warn',
   'no-continue': 'off',
   'no-inline-comments': 'off',
   'no-lonely-if': 'warn',
   'no-mixed-operators': [
      'warn',
      {
         groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['**', '+'],
            ['**', '-'],
            ['**', '*'],
            ['**', '/'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof']
         ],
         allowSamePrecedence: false
      }
   ],
   'no-mixed-spaces-and-tabs': 'warn',
   'no-multi-assign': 'warn',
   'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
   'no-negated-condition': 'off',
   'no-nested-ternary': 'off',
   'no-new-object': 'warn',
   'no-plusplus': 'off',
   'no-restricted-syntax': 'off',
   'no-ternary': 'off',
   'no-underscore-dangle': 'off',
   'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
   'no-whitespace-before-property': 'warn',
   'nonblock-statement-body-position': 'off',
   'object-curly-newline': [
      'error',
      {
         ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
         ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
         ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
         ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
      }
   ],
   'object-curly-spacing': ['warn', 'always'],
   'object-property-newline': [
      'warn',
      {
         allowAllPropertiesOnSameLine: true
      }
   ],
   'one-var': 'off',
   'one-var-declaration-per-line': 'off',
   'operator-assignment': 'off',
   'operator-linebreak': 'warn',
   'padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],
   'padding-line-between-statements': 'off',
   'require-jsdoc': 'off',
   'semi-spacing': ['warn', { before: false, after: true }],
   'semi-style': ['warn', 'last'],
   'sort-vars': 'off',
   'space-before-blocks': 'warn',
   'space-infix-ops': 'warn',
   'space-unary-ops': [
      'warn',
      {
         words: true,
         nonwords: false
      }
   ],
   'switch-colon-spacing': ['warn', { after: true, before: false }],
   'template-tag-spacing': ['warn', 'never'],
   'unicode-bom': ['error', 'never'],
   'wrap-regex': 'off',

   // ECMAScript 6
   //---------------------
   // Settings that encourage us to write code incompatible with ES5 are in ./es6.js
   'no-useless-constructor': 'warn',
   'no-var': 'off',
   'object-shorthand': 'off',
   'arrow-parens': [
      'warn',
      'as-needed',
      {
         requireForBlockBody: true
      }
   ],
   'arrow-spacing': ['warn', { before: true, after: true }],
   'generator-star-spacing': ['warn', { before: false, after: true }],
   'no-class-assign': 'error',
   'no-confusing-arrow': [
      'warn',
      {
         allowParens: true
      }
   ],
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
   'rest-spread-spacing': ['warn', 'never'],
   'sort-imports': 'off',
   'symbol-description': 'warn',
   'template-curly-spacing': 'warn',
   'yield-star-spacing': ['warn', 'after']
};
