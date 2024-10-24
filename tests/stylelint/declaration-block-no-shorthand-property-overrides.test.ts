import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('declaration-block-no-shorthand-property-overrides', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   background-repeat: repeat;
   background: #ccc;
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
   background: #ccc;
   background-repeat: repeat;
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
