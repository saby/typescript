import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react-hooks/exhaustive-deps', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            'no-console': 'off',
            '@typescript-eslint/typedef': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [`function MyComponent(props) {
  useCallback(() => {
    console.log(props.foo);
  }, []);
}`, `function MyComponent() {
  const local = someFunc();
  useEffect(() => {
    console.log(local);
  }, []);
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [`function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  });
}`, `function MyComponent() {
  useEffect(() => {
    const local = {};
    console.log(local);
  }, []);
}`, `function MyComponent() {
  const local = someFunc();
  useEffect(() => {
    console.log(local);
  }, [local]);
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
