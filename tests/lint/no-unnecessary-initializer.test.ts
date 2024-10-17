import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-unnecessary-initializer', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'prefer-const': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = ['let bar = undefined;'];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = ['let foo;', 'const bar = undefined;'];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
