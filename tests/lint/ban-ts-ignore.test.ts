import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('ban-ts-ignore', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `// @ts-ignore
const a: number = '1';`,
            `// @ts-expect-error
const b: number = '1';`,
            '// @ts-nocheck'
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
            `// @ts-expect-error: ради теста
const c: number = '1';`,
            '// @ts-check'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
