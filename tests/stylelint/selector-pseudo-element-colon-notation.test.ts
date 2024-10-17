import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('selector-pseudo-element-colon-notation', () => {
    describe('ошибки', () => {
        const cases = [
            `.class:before {
   content: '1';
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
            `.class::before {
   content: '1';
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
