import { ESLint } from 'eslint';

/**
 * Хелпер для запуска линтера
 * @author Зайцев А.С.
 * @param linter
 * @param text
 * @param extension
 */
export async function lint(
    linter: ESLint,
    text: string,
    extension: string = 'ts'
): Promise<ESLint.LintResult> {
    return linter
        .lintText(text, {
            filePath: `test.${extension}`
        })
        .then((results) => {
            return results[0];
        });
}
