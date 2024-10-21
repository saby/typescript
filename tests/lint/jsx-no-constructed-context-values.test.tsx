import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/jsx-no-constructed-context-values', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`function Component() {
  return <SomeContext.Provider value={{foo: 'bar'}}>
  <Child />
</SomeContext.Provider>;
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
  const foo = useMemo(() => {
     return {
        foo: 'bar'
     };
  }, []);
  return <SomeContext.Provider value={foo}>
  <Child />
</SomeContext.Provider>;
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
