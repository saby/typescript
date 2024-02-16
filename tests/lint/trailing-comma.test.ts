import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('trailing-comma', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('не ошибки', () => {
        const cases = [
            `import {
    lib,
} from 'lib';`,
            `const obj = {
    bar: 'baz',
    qux: 'quux',
};`,
            'const arr = [1, 2, ];',
            `function foo(
    a: number,
    b: number,
): void {
    // not empty
}`,
            `export {
    foo,
};`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
