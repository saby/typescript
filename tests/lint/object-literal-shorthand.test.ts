import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('object-literal-shorthand', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `const y = 1;
const z = 1;
`;

    describe('ошибки', () => {
        const cases = [
            `${header}const foo = {
    a: function(): void {
        // not empty
    },
    [y]: function(): void {
        // not empty
    },
    z: z
};`
        ];

        cases.forEach((text, index) => {
            it(`${header}индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [
            `${header}const foo1 = {
    a(): void {
        // not empty
    },
    b: () => {
        // not empty
    },
    [y](): void {
        // not empty
    },
    z
};`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
