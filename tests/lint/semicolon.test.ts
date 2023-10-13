import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('semicolon', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    // под это правило почти нет тестов, потому что всё учесть безумно тяжело
    describe('не ошибки', () => {
        // в eslint нет опции ignore-bound-class-methods, но это проверяет тест
        const cases = [
            `class SemicolonTest {
    boundMethod = (): void => {
        // not empty
    }
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
