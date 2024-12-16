import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-switch-case-fall-through', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    const header = `const foo: number = 1;
function doSomething(): void {
    // not empty
}
`;

    // правило отключено, просто проверяем, что не втянулось из js
    describe('не ошибки', () => {
        const cases = [
            `${header}switch(foo) {
    case 0:
        doSomething();

    case 1:
        doSomething();
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
