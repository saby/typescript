import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('value-keyword-case', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   display: Flex;
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
   display: flex;
}
`,
            `.customClass {
   display: flex;

   .class2 {
      &:extend(.customClass) {
         color: #ccc;
      }
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
