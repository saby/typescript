import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-misused-new', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `class C {
    new(): C;
}`,
            `interface I {
    new (): I;
    constructor(): void;
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
            `class C1 {
    constructor() {
        // not empty
    }
}`,
            `
class C {}
interface I1 {
    extraField: number;
    new (): C;
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
