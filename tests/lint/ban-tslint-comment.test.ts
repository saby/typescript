import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('ban-tslint-comment', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            '/* tslint:disable */',
            '/* tslint:enable */',
            '/* tslint:disable:rule1 rule2 rule3... */',
            '/* tslint:enable:rule1 rule2 rule3... */',
            '// tslint:disable-next-line',
            'someCode(); // tslint:disable-line',
            '// tslint:disable-next-line:rule1 rule2 rule3...'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
