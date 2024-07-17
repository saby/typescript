import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('typeof-compare', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    // правило отключено
    describe('не ошибки', () => {
        const cases = [
            `if (typeof foo === 'strnig') {
    // not empty
}`,
            `if (typeof foo === 'undefimed') {
    // not empty
}`,
            `if (typeof bar !== 'nunber') {
    // not empty
}`,
            `if (typeof bar !== 'fucntion') {
    // not empty
}`,
            `if (typeof foo === 'string') {
    // not empty
}`,
            `if (typeof bar === 'undefined') {
    // not empty
}`,
            `if (typeof foo === baz) {
    // not empty
}`,
            `if (typeof bar === typeof qux) {
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
