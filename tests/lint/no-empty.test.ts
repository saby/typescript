import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-empty', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `const foo = 1;
function doSomething(): void {
    // not empty
}
`;

    describe('ошибки', () => {
        const cases = [
            `${header}if (foo) {
}`,
            `${header}while (foo) {
}`,
            `${header}switch(foo) {
}`,
            `${header}try {
    doSomething();
} catch(ex) {

} finally {

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
            `${header}if (foo) {
    // empty
}`,
            `${header}while (foo) {
    /* empty */
}`,
            `${header}try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}`,
            `${header}try {
    doSomething();
} finally {
    /* continue regardless of error */
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
