import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('keyframe-declaration-no-important', () => {
    describe('ошибки', () => {
        const cases = [
            `@keyframes foo {
   from {
      opacity: 0;
   }

   to {
      opacity: 1 !important;
   }
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
