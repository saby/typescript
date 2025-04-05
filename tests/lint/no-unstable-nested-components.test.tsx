import {ESLint} from 'eslint';
import {lint} from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/no-unstable-nested-components', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`function Component() {
  function UnstableNestedComponent() {
    return <div />;
  }

  return (
    <div>
      <UnstableNestedComponent />
    </div>
  );
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [`function OutsideDefinedComponent() {
  return <div />;
}

function Component() {
  return (
    <div>
      <OutsideDefinedComponent />
    </div>
  );
}`,
            `function SomeComponent(props) {
  return <div>{props.footer()}</div>;
}

function Component() {
  return (
    <div>
      <SomeComponent footer={() => {
         return <div />;
      }} />
    </div>
  );
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
