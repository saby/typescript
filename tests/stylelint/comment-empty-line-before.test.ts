import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('comment-empty-line-before', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   color: #ccc;
}
/* comment */
`,
            `.class {
   color: #ccc;
   /* comment */
}
`
        ];

        cases.forEach((code, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint({
                    code,
                    config
                });

                checker(result);
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [
            `.class {
   /* comment */
   color: #ccc;
}
`,
            `/* comment */
.class {
   color: #ccc;
}
`,
            `
.class {
   color: #ccc;
}

/* comment */
`
        ];

        cases.forEach((code, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint({
                    code,
                    config
                });

                checker(result);
            });
        });
    });
});
