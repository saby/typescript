import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('member-ordering', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        // просто "приёмочный" тест, который проверяет что правило включено
        const cases = [`class Test {
    field: string = '';
    constructor() {
        // not empty
    }
    static staticField: number = 1;
    method(): void {
        // not empty
    }
    static staticMethod(): void {
        // not empty
    }
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        // Если тест упадёт, значит поменяли порядок
        const cases = [`class Test {
    field: string = '';
    constructor() {
        // not empty
    }
    method(): void {
        // not empty
    }
    static staticField: number = 1;
    static staticMethod(): void {
        // not empty
    }
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
