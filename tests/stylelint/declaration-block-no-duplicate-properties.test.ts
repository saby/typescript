import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('declaration-block-no-duplicate-properties', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   font-size: 16px;
   font-size: 16px;
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
   font-size: 16px;
   font-size: 1rem;
}

.class2 {
   font-size: 16px;
   font-size: 18px;
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
