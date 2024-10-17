import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('only-arrow-functions', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'object-shorthand': 'off'
        }));
    });

    // правило выключено, потому что слишком сильно отличается от тслинта.
    // тслинт игнорировал все методы объектов (в сокращённом формате)
    // prefer-arrow/prefer-arrow-functions игнорирует только если метод использует this.
    describe('не ошибки', () => {
        const cases = [
            `const myFunc1 = function(): void {
    // do something ...
};`,
            `const myFunc4 = function(): string {
    return 'bar';
};`,
            `const obj = {
    method: function(): void {
        // not empty
    }
};`,
            `function foo(): Function {
    return function(): void {
        // not empty
    };
}`,
            `function myFunc(): void {
    // not empty
}`,
            `const obj1 = {
    method: function test(): void {
        // not empty
    }
};`,
            `const myFunc2 = (): void => {
    // do something ...
};`,
            `const myFunc3 = function(): void {
    this.doSomething();
};`,
            `function foo1(): Function {
    return function(): object {
        return this;
    };
}`,
            `class A {
    method: () => {
        // not empty
    };
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
