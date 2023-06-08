import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('no-bitwise', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [
            'const test = 1 | 0;',
            'const test = 1 & 0;',
            'const test = 1 ^ 0;',
            'const test = ~ 0;',
            'const test = 1 << 0;',
            'const test = 1 >> 0;',
            'const test = 1 >>> 0;',
            `let test = 0;

test |= 1;

test &= 1;

test ^= 1;

test <<= 1;

test >>= 1;

test >>>= 1;
`
        ];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text);

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
