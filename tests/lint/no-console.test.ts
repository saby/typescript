import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-console', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            'console.log(1);',
            'console.error(1);',
            'console.warn(1);',
            'console.dir({});',
            'console.dirxml({});',
            'console.table(1);',
            'console.assert(1);',
            "console.count('1');",
            "console.countReset('1');",
            'console.debug(1);',
            'console.group(1);',
            'console.groupCollapsed(1);',
            'console.groupEnd(1);',
            'console.info(1);',
            "console.time('1');",
            "console.timeEnd('1');",
            "console.timeLog('1', 1);",
            'console.trace(1);'
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
