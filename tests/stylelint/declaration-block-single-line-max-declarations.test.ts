import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('declaration-block-single-line-max-declarations', () => {
    describe('ошибки', () => {
        const cases = [
            `.class { color: #ccc; top: 0; }
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
