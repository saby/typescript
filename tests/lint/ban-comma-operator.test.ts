import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('ban-comma-operator', () => {
    let linter: ESLint;
    const header = `function doSomething(): number {
    return 1;
}

let val: number;
`;


    beforeAll(() => {
        linter = new ESLint(getConfig({
            // эти правила здесь срабатывают, но не интересуют
            '@typescript-eslint/no-unused-expressions': 'off',
            'no-eval': 'off',
            'no-empty': 'off',
            'no-cond-assign': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [
            `${header}
0, eval('doSomething();');`,
            `${header}do {
    // not empty
} while (doSomething(), !!test);`,
            `${header}for (; doSomething(), !!test; ) {
    // not empty
}`,
            `${header}if (doSomething(), !!test) {
    // not empty
}`,
            `${header}switch (val = doSomething(), val) {
    // not empty
}`,
            `${header}while (val = doSomething(), val < 1) {
    // not empty
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
            `${header}const foo = (doSomething(), val);`,
            `${header}
(0, eval)('doSomething();');`,
            `${header}do {
    // not empty
} while ((doSomething(), !!test));`,
            `${header}for (let i = 0, j = 10; i < j; i++, j--) {
    // not empty
}`,
            `${header}if ((doSomething(), !!test)) {
    // not empty
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
