import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-duplicate-super', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `class A {
    constructor() {
        super(); // This is a SyntaxError.
    }
}`,
            `class B {}

class C extends B {
    constructor() {
        // not empty
    } // Would throw a ReferenceError.
}`,
            `// Classes which inherits from a non constructor are always problems.
class D extends null {
    constructor() {
        super(); // Would throw a TypeError.
    }
}`,
            `class F extends null {
    constructor() {
        // not empty
    } // Would throw a ReferenceError.
}`,
            `class G extends B {
    constructor() {
        super();
        super();
    } // Would throw a ReferenceError.
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
