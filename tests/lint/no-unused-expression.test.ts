import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-unused-expression', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `function a(): boolean {
    return true;
}
function b(): void {
    // not empty
}
function f(): void {
    // not empty
}
function injectGlobal(templateString: string): void {
    // not empty
}
`;

    describe('ошибки', () => {
        const cases = [
            '0;',
            'if(0) 0;',
            `${header}a && b();`,
            `${header}a() && function namedFunctionInExpressionContext(): void {
    f();
};`,
            '(function anIncompleteIIFE(): void {});',
            `${header}injectGlobal\`body{ color: red; }\`;`
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
            `function namedFunctionDeclaration(): void {
    // not empty
}`,
            `(function aGenuineIIFE(): void {
    // not empty
}());`,
            'f();',
            'const c = 0;',
            `const obj: {
    b?: number
} = {
    b: 1
};
delete obj.b;`,
            `${header}void a();`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
