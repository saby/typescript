import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('font-family-no-missing-generic-family-keyword', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   font-family: Arial;
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
   font-family: Arial, sans-serif;
}
`,
            `.class {
   font-family: cbuc-icons;
}
`,
            `.class {
   font-family: cbuc-icons24;
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
