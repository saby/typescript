import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-magic-numbers', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `function a(): number {
    return 1000;
}`,
            `class InvalidClass {
    field: number = 100;
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
            'const a = -1;',
            'const a = 0;',
            'const a = 1;',
            'const a = -1;',
            `enum ValidEnum {
    FIRST = 10000
}
`,
            'type ValidType = 42 | 5 | 10;',
            `class ValidClass {
    readonly field: number = 100;
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
