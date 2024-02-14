import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-angle-bracket-type-assertion', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            '@typescript-eslint/no-explicit-any': 'off'
        }));
    });

    const header = `interface ITest {
    value: number;
    anotherValue: string;
}

const a = {
    value: 1,
    anotherValue: '2'
};
`;

    describe('ошибки', () => {
        const cases = [
            `${header}const test2 = <ITest>{...a};`,
            `${header}function bar(): ITest {
    return <ITest>{
        value: 1,
        anotherValue: '2'
    };
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
            `${header}const test1: ITest = {...a};`,
            `${header}const test1 = {...a} as ITest;`,
            `${header}function foo(): ITest {
    return {
        value: 1,
        anotherValue: '2'
    } as ITest;
}`,
            'const y = { a: 1 } as any;',
            'const z = { a: 1 } as unknown;',
            `${header}window.foo({ a: 1 } as ITest);`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
