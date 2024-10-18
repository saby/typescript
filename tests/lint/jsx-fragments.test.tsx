import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/jsx-fragments', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`function Component() {
  return <React.Fragment>
  <Foo />
  <Bar />
</React.Fragment>;
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
  return <>
  <Foo />
  <Bar />
</>;
}`, `function Component() {
  return <React.Fragment key="key">
  <Foo />
  <Bar />
</React.Fragment>;
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
