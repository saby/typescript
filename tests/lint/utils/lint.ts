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
            results[0].messages.forEach((msg) => {
                // В тестах это неинтересно, не будем раздувать снапшоты
                if (msg.suggestions) {
                    delete msg.suggestions;
                }
                if (msg.fix) {
                    delete msg.fix;
                }
            });
            return results[0];
        });
}
