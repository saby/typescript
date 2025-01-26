import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-return-await', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `function bar(): Promise<number> {
    return Promise.resolve(1);
}
`;

    describe('ошибки', () => {
        const cases = [
            `${header}async function foo(): Promise<number> {
    return await bar();
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
            `${header}async function foo1(): Promise<number> {
    return bar();
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
