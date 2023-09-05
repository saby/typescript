import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('typedef-whitespace', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            "const foo:string = 'bar';",
            "const foo :string = 'bar';",
            "const foo : string = 'bar';",
            `function foo():void {
    // not empty
}`,
            `function foo() :void {
    // not empty
}`,
            `function foo() : void {
    // not empty
}`,
            `class Foo {
    name:string;
}`,
            `class Foo {
    name :string;
}`,
            `class Foo {
    name : string;
}`,
            'type Foo = ()=>{};',
            'type Foo = () =>{};',
            'type Foo = ()=> {};'
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
            "const foo: string = 'bar';",
            `function foo(): void {
    // not empty
}`,
            `class Foo {
    name: string;
}`,
            'type Foo = () => {};'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
