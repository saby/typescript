import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('color-names', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   color: red;
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
