import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-use-before-declare', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    // правило отключено, тесты нужны, чтобы его никто и никогда не включил.
    // Оно медленное и бесполезное, т.к. var у нас запрещён в тс, а с let и const оно не нужно
    describe('не ошибки', () => {
        const cases = [
            `const x = Foo.FOO;

enum Foo {
    FOO
}`,
            `function bar(): number {
    return Bar.FOO;
}

enum Bar {
    FOO
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
