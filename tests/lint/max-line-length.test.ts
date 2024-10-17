import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

/**
 * Тут нереальное количество кейсов, покрывать тяжело и относительно бесполезно.
 * Так что ограничимся "приёмочными" тестами.
 */
describe('max-line-length', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`const a = window.aVeryLongPropertyWhichIsForSureLongerMaxThanValueAllowedByESLintAndItTriggersTheErrorBecauseThisIsCode1;`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [
            `const a = window.aVeryLongPropertyWhichGivesUsAStrirngOfExactly120CharactersThereforeMakingItValidCodeForTheESLintRule1;`,
            `/**
 * A very long comment which is for sure longer than value allowed by ESLint. But it doesn't trigger an error because it ignores comments.
 */`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
