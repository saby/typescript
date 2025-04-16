import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-floating-promises', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            '@typescript-eslint/no-unused-expressions': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [
            `const promise = new Promise((resolve, reject) => resolve('value'));
promise;`,
            `async function returnsPromise() {
  return 'value';
}
returnsPromise().then(() => {});`,
            `Promise.reject('value').catch();`,
            `Promise.reject('value').finally();`,
            `[0, 1].map(async x => x + 1);`
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
            `const promise = new Promise((resolve, reject) => resolve('value'));
await promise;`,
            `async function returnsPromise() {
  return 'value';
}`,
            `void returnsPromise();`,
            `returnsPromise().then(
  () => {},
  () => {},
);`,
            `Promise.reject('value').catch(() => {});`,
            `await Promise.reject('value').finally(() => {});`,
            `await Promise.all([0, 1].map(async x => x + 1));`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
