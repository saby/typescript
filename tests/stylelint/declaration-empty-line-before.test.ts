import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('declaration-empty-line-before', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   height: 1px;

   color: #ccc;
}
`,
            `.class {

   height: 1px;
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
   height: 1px;
   color: #ccc;
}
`,
            `.class {
   /* comment */
   height: 1px;
   color: #ccc;
}
`, `.class {
   height: 1px;

   /* comment */
   color: #ccc;
}
`,
            `.class { height: 1px; }
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
