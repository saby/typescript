import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('member-access', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `class Test {
    public animalName: string;
    public constructor(name: string) {
        this.animalName = name;
    }
    public get name(): string {
        return this.animalName;
    }
    public set name(value: string) {
        this.animalName = value;
    }
    public walk(): void {
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

    describe('не ошибки', () => {
        const cases = [
            `class Animal {
    animalName: string;
    protected weight: string;
    protected height: string;
    constructor(name: string) {
        this.animalName = name;
    }
    get name(): string {
        return this.animalName;
    }
    set name(value: string) {
        this.animalName = value;
    }
    walk(): void {
        this._walk();
    }
    protected _walk(): void {
        // not empty
    }
    private __walk(): void {
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
