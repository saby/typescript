import { lint } from 'stylelint';
import {checker} from './checker';
const config = require('../../stylelint/stylelint-config.json');

describe('rule-empty-line-before', () => {
    describe('ошибки', () => {
        const cases = [
            `.class {
   color: #ccc;
}
.class1 {
   color: #ccc;
}
`,
            `.class {
   color: #fff;
   .class {
      color: #ccc;
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

    describe('не ошибки', () => {
        const cases = [
            `.class {
   color: #ccc;
}

.class1 {
   color: #ccc;
}
`,
            `.class {
   color: #ccc;
}

/* comment */
.class1 {
   color: #ccc;
}
`,
            `.class {
   .class {
      color: #ccc;
   }
   color: #fff;
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
