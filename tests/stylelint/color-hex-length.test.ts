import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('color-hex-length', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   color: #cccccc;
}
`,
            `.class {
   color: #ccccccaa;
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
   color: #ccc;
}
`,
            `.class {
   color: #ccca;
}
`,
            `.class {
   color: #a4a4a4;
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
