import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('at-rule-empty-line-before', () => {
    describe('ошибки', () => {
        const cases = [
            `@charset "UTF-8";
@import url(x.css);
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
