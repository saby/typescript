import {ESLint} from 'eslint';
import {lint} from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/no-array-index-key', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`function Component() {
  const things = [{
      id: 1
  }, {
      id: 2
  }, {
      id: 3
  }];
  return things.map((thing, index) => {
    return <Hello key={index} />;
  });
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
  const things = [{
      id: 1
  }, {
      id: 2
  }, {
      id: 3
  }];
  return things.map((thing, index) => {
    return <Hello key={thing.id} />;
  });
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
