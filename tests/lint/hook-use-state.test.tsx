import { ESLint } from 'eslint';
import { lint } from './utils/lint';
import { getConfig } from './utils/getConfig';

describe('react/hook-use-state', () => {
    let linter: ESLint;

    beforeAll(() => {
        linter = new ESLint(getConfig());
    });

    describe('ошибки', () => {
        const cases = [`import React from 'react';
function useColor() {
  const useStateResult = React.useState();
  return useStateResult;
}`, `import React from 'react';
function useColor() {
  const [color, updateColor] = React.useState();
  return useStateResult;
}`, `import { useState } from 'react';
function useColor() {
  const useStateResult = useState();
  return useStateResult;
}`, `import { useState } from 'react';
function useColor() {
  const [color, updateColor] = useState();
  return useStateResult;
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });

    describe('не ошибки', () => {
        const cases = [`import React from 'react';
function useColor() {
  const [color, setColor] = React.useState();
  return useStateResult;
}`, `import React from 'react';
function useColor() {
  return React.useState();
}`, `import { useState } from 'react';
function useColor() {
  const [color, setColor] = useState();
  return useStateResult;
}`, `import { useState } from 'react';
function useColor() {
  return useState();
}`];

        cases.forEach((text, index) => {
            it(`индекс теста: ${index}`, async () => {
                const result = await lint(linter, text, 'tsx');

                expect(result.messages).toMatchSnapshot();
            });
        });
    });
});
