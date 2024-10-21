import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('prefer-for-of', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'no-console': 'off'
        }));
    });

    const header = `const arr = [1, 2];
`;

    // правило выключено
    describe('не ошибки', () => {
        const cases = [
            `${header}for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
}`,
            `${header}for (let x of arr) {
    x += 1;
}`,
            `${header}for (let i = 0; i < arr.length; i++) {
    // i is used to write to arr, so for-of could not be used.
    arr[i] = 0;
}`,
            `${header}for (let i = 0; i < arr.length; i++) {
    // i is used independent of arr, so for-of could not be used.
    console.log(i, arr[i]);
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
