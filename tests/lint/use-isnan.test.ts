import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('use-isnan', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `if (foo === NaN) {
    // not empty
}`,
            `if (foo !== NaN) {
    // not empty
}`,
            `if (foo === Number.NaN) {
    // not empty
}`,
            `if (foo !== Number.NaN) {
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
            `if (isNaN(foo)) {
    // not empty
}`,
            `if (!isNaN(foo)) {
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
