import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-conditional-assignment', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'prefer-const': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [
            `let x2: number;
if (x2 = 0) {
    // not empty
}`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [
            `let x1: number;
x1 = 2;
if (x1 === 0) {
    // not empty
}`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
