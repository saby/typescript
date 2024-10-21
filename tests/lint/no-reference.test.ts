import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-reference', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'spaced-comment': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [
            '/// <reference path="foo" />',
            '/// <reference types="bar" />',
            '/// <reference lib="baz" />'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
