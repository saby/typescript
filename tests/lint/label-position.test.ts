import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('label-position', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            `label: {
    break label;
}`,
            `label:
    if (a) {
        break label;
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
            `label:
    while(true) {
        // ...
    }`,
            `label:
    while(true) {
        break label;
    }`,
            `label:
    while(true) {
        break label;
    }`,
            `label:
    while(true) {
        continue label;
    }`,
            `label:
    switch (a) {
        case 0:
            break label;
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
