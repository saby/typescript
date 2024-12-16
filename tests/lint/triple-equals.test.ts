import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('triple-equals', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `const x = 0;
const text = 'qwe';
`;

    describe('ошибки', () => {
        const cases = [
            `${header}if (x == 1) {
    // not empty
}`,
            `${header}if ('' == text) {
    // not empty
}`,
            `${header}if (text == undefined) {
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
            `${header}if (x === 1) {
    // not empty
}`,
            `${header}if ('' === text) {
    // not empty
}`,
            `${header}if (text == null) {
    // not empty
}`,
            `${header}if (text === undefined) {
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
