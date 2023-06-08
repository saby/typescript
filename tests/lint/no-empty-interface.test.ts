import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-empty-interface', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            'interface Foo {}',
            `interface Foo {
    a: number;
}

interface Bar extends Foo {}`
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
            `interface Foo1 {
    name: string;
}

interface Bar1 {
    age: number;
}

interface Baz1 extends Foo1, Bar1 {}`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
