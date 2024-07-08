'use strict';

// Rules for TypeScript code
module.exports = {
   '@typescript-eslint/adjacent-overload-signatures': 'error',
   '@typescript-eslint/array-type': [
      'error',
      {
         'default': 'array',
      }
   ],
   '@typescript-eslint/ban-types': [
      'error',
      {
         'types': {
            'Deferred': {
               'message': 'Use Promise instead.'
            }
         },
         extendDefaults: false
      }
   ],
   '@typescript-eslint/prefer-function-type': 'error',
   '@typescript-eslint/naming-convention': ['error', {
      'selector': ['class', 'interface'],
      'format': ['PascalCase']
   }, {
      'selector': 'variable',
      'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
      'leadingUnderscore': 'allow',
      'trailingUnderscore': 'allow'
   }],
   'spaced-comment': [
      'warn',
      'always',
      {
         block: {
            balanced: false
         },
         markers: ['#', '/']
      }
   ],
   'no-labels': ['error', {
      allowLoop: true,
      allowSwitch: true
   }],
   'max-classes-per-file': ['error', 7],
   'new-parens': 'error',
   '@typescript-eslint/consistent-type-assertions': ['warn', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
   }],
   '@typescript-eslint/no-explicit-any': 'warn',
   'no-bitwise': 'error',
   'no-cond-assign': ['warn', 'always'],
   'no-console': 'error',
   '@typescript-eslint/no-empty-interface': [
      'error',
      {
         allowSingleExtends: true
      }
   ],
   '@typescript-eslint/no-misused-new': 'error',
   '@typescript-eslint/no-namespace': 'error',
   '@typescript-eslint/triple-slash-reference': [
      'error',
      {
         'path': 'never',
         'types': 'never',
         'lib': 'never'
      }
   ],
   '@typescript-eslint/no-shadow': [
      'warn',
      {
         'hoist': 'all'
      }
   ],
   '@typescript-eslint/no-throw-literal': ['error'],
   'no-trailing-spaces': [
      'error',
      {
         skipBlankLines: false,
         ignoreComments: false
      }
   ],
   '@typescript-eslint/no-unused-expressions': 'error',
   'no-var': 'error',
   '@typescript-eslint/no-var-requires': 'error',
   'object-shorthand': 'error',
   'prefer-const': 'error',
   '@typescript-eslint/unified-signatures': 'error',
   'max-len': [
      'error',
      {
         code: 120,
         ignoreUrls: true,
         ignoreComments: true,
         ignoreRegExpLiterals: true,
         ignoreStrings: true,
         ignoreTemplateLiterals: true,

         /*
         Эта штука должна разрешать многострочные комменты неограниченной длины.
         Вообще, флаг ignoreComments должен давать тот же эффект, но это оставлено для обратной совместимости.
          */
         ignorePattern: '^ +\\* '
      }
   ],
   '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
         'accessibility': 'no-public'
      }
   ],
   '@typescript-eslint/member-ordering': [
      'warn',
      {
         'default': [
            'instance-field',
            'constructor',
            'instance-method',
            'static-field',
            'static-method'
         ]
      }
   ],
   '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
         ignore: [-1, 0, 1, 2],
         ignoreEnums: true,
         ignoreNumericLiteralTypes: true,
         ignoreReadonlyClassProperties: true
      }
   ],
   '@typescript-eslint/no-non-null-assertion': 'error',
   'no-param-reassign': 'warn',
   '@typescript-eslint/no-this-alias': 'warn',
   'quote-props': ['error', 'as-needed'],
   'prefer-object-spread': 'error',
   quotes: ['error', 'single', {
      avoidEscape: true
   }],
   '@typescript-eslint/semi': [
      'error',
      'always'
   ],
   '@typescript-eslint/type-annotation-spacing': 'error',
   '@typescript-eslint/ban-ts-comment': 'warn',
   'one-var': ['error', 'never'],
   '@typescript-eslint/typedef': ['warn', {
      parameter: true,
      propertyDeclaration: true,
      memberVariableDeclaration: true,

      // eslint-disable-next-line id-match
      variableDeclarationIgnoreFunction: true
   }],
   '@typescript-eslint/ban-tslint-comment': 'error'
};
