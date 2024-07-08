import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-invalid-this', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `function baz(callback: Function): void {
    // not empty
}
`;

    // правило отключено, тут только проверяем, что оно из конфига js не затянулось
    describe('не ошибки', () => {
        const cases = [
            `${header}this.a = 0;
baz(() => {
    return this;
});`,
            `${header}(function(): void {
    this.a = 0;
    baz(() => {
    return this;
});
})();`,
            `${header}function foo(param: Function): void {
    this.a = 0;
    baz(() => {
    return this;
});
}`,
            `${header}const foo1 = function(): void {
    this.a = 0;
    baz(() => {
    return this;
});
};
`,
            `${header}foo(function(): void {
    this.a = 0;
    baz(() => {
    return this;
});
});`,
            `${header}obj.foo = () => {
    // \`this\` of arrow functions is the outer scope's.
    this.a = 0;
};`,
            `${header}const obj = {
    aaa(): Function {
        return function foo2(): void {
            // There is in a method \`aaa\`, but \`foo\` is not a method.
            this.a = 0;
            baz(() => {
                return this;
            });
        };
    }
};`,
            `${header}[1, 2].forEach(function(): void {
    this.a = 0;
    baz(() => {
        return this;
    });
});`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
