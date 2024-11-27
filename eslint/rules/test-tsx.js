'use strict';

// Rules for React test code
module.exports = {
   'testing-library/await-async-queries': 'warn',
   'testing-library/await-async-utils': 'warn',
   'testing-library/no-await-sync-queries': 'warn',
   'testing-library/no-debugging-utils': 'warn',
   'testing-library/no-dom-import': ['warn', 'react'],
   'testing-library/no-global-regexp-flag-in-query': 'warn',
   'testing-library/no-manual-cleanup': 'warn',
   'testing-library/no-promise-in-fire-event': 'warn',
   'testing-library/no-unnecessary-act': 'warn',
   'testing-library/no-wait-for-multiple-assertions': 'warn',
   'testing-library/no-wait-for-side-effects': 'warn',
   'testing-library/no-wait-for-snapshot': 'warn',
   'testing-library/prefer-find-by': 'warn',
   'testing-library/prefer-presence-queries': 'warn',
   'testing-library/prefer-query-by-disappearance': 'warn',
   'testing-library/prefer-screen-queries': 'warn',
};
