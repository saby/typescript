import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('shorthand-property-no-redundant-values', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   padding: 1px 1px 1px 1px;
}
`,
            `.class {
   padding: 1px 2px 1px 2px;
}
`,
            `.class {
   padding: 1px 2px 1px;
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
   padding: 1px;
}
`,
            `.class {
   padding: 1px 1px 1px 2px;
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
});
