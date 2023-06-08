import {ESLint} from 'eslint';
import {lint} from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/no-danger-with-children', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`function Component() {
  return <div dangerouslySetInnerHTML={{ __html: 'HTML' }}>
  Children
</div>;
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [`function Component() {
  return <div dangerouslySetInnerHTML={{ __html: 'HTML' }} />;
}`, `function Component() {
  return <Hello lastName="Smith" firstName="John" />;
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
