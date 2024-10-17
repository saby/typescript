import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('ban-types', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'prefer-const': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
            'no-empty': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = ['let a = 1, b = 2;', 'const a = 1, b = 2;'];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [
            `let a = 1;
let b = 2;`,
            `const a = 1;
const b = 2;`,
            'for (let i = 0, j = 0; i < 10; i++, j++) {}'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
