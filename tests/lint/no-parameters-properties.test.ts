import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-parameter-properties', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    // правило отключено
    describe('не ошибки', () => {
        const cases = [
            `class Foo {
    constructor(readonly name: string) {}
}
`,
            `class Foo {
    constructor(private name: string) {}
}`,
            `class Foo {
    constructor(protected name: string) {}
}`,
            `class Foo {
    constructor(public name: string) {}
}`,
            `class Foo {
    constructor(private readonly name: string) {}
}`,
            `class Foo {
    constructor(protected readonly name: string) {}
}`,
            `class Foo {
    constructor(name: string) {
        // not empty
    }
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
