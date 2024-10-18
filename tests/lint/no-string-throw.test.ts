import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-string-throw', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            "throw 'error';",
            'throw 0;',
            'throw undefined;',
            'throw null;',
            `const err = new Error();
throw 'an ' + err;`,
            `const err = new Error();
throw \`\${err}\`;`,
            `const foo = {
    bar: ''
};
throw foo.bar;`
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
            'throw new Error();',
            "throw new Error('error');",
            `const err = new Error('error');
throw err;`,
            `try {
    throw new Error('error');
} catch (e) {
    throw e;
}`,
            `const err = new Error();
throw err;`,
            `function err(): Error {
    return new Error();
}
throw err();`,
            `const foo = {
    bar: new Error()
};
throw foo.bar;`,
            `
class CustomError extends Error {
    // ...
}
throw new CustomError();`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
