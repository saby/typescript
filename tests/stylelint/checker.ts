import { LinterResult } from 'stylelint';

export function checker(result: LinterResult): void {
    result.results.forEach((res) => {
        expect(res.warnings).toMatchSnapshot();
    });
}
