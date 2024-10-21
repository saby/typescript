'use strict';

// Rules for React code
module.exports = {
   'react-hooks/rules-of-hooks': 'error',
   'react-hooks/exhaustive-deps': 'warn',

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
   'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression'],
      unnamedComponents: 'function-expression',
   }],

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
   'react/no-danger-with-children': 'error',

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
   'react/no-array-index-key': 'error',

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   'react/jsx-fragments': ['error', 'syntax'],

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
   'react/jsx-no-useless-fragment': 'error',

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
   'react/jsx-no-constructed-context-values': 'error',

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
   'react/no-unstable-nested-components': ['error', {
      allowAsProps: true
   }],

   // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
   'react/hook-use-state': 'error',
};
