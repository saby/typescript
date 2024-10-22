import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('variable-name', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            '@typescript-eslint/typedef': 'off',
            'prefer-const': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [
            'const ___tripleLeadingUnderscore = 1;',
            'const __doubleLeadingUnderscore = 1;',
            'const doubleTrailingUnderscore__ = 1;',
            'let ___tripleLeadingUnderscore1 = 1;',
            'let __doubleLeadingUnderscore1 = 1;',
            'let doubleTrailingUnderscore1__ = 1;'
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
            'const camelCase = 1;',
            'const PascalCase = 1;',
            'const UPPER_CASE = 1;',
            'const _singleLeadingUnderscore = 1;',
            'const singleTrailingUnderscore_ = 1;',
            'let camelCase1 = 1;',
            'let PascalCase1 = 1;',
            'let UPPER_CASE1 = 1;',
            'let _singleLeadingUnderscore1 = 1;',
            'let singleTrailingUnderscore_ = 1;'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
