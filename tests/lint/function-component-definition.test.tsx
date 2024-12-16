import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/function-component-definition', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig({
            '@typescript-eslint/typedef': 'off'
        }));
    });

    describe('ошибки', () => {
        const cases = [`const Component = (props) => {
  return <div>{props.content}</div>;
};`, `function getComponent() {
  return (props) => {
    return <div>{props.content}</div>;
  };
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [`function Component(props) {
  return <div />;
}`, `const Component = function (props) {
  return <div />;
};`, `function getComponent() {
  return function (props) {
    return <div />;
  };
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
