'use strict';

const es6Rules = require('./rules/es6');

// Configuration that forces us to use ES6+
module.exports = {
   extends: './base.js',
   parserOptions: {
      ecmaVersion: 9,
      sourceType: 'module'
   },
   rules: es6Rules
};
