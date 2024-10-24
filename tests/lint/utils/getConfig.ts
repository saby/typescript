import { ESLint } from 'eslint';
const config = require('../../../eslint/base');

/**
 * Генерирует конфиг для ESLint
 * @author Зайцев А.С.
 */
export function getConfig(rules?: ESLint.Options['overrideConfig']['rules']): ESLint.Options {
    return {
        useEslintrc: false,
        baseConfig: config,
        overrideConfig: {
            parserOptions: {
                ...config.parserOptions,
                /**
                 * Без этих двух опций линтер будет ругаться на две вещи:
                 * 1) Нет tsconfig
                 * 2) Если указать tsconfig, то файл не включен в проект.
                 *
                 * Возможно отказаться от второй опции, если разобраться как правильно указать путь.
                 */
                project: './tests/lint/tsconfig.json',
                DEPRECATED__createDefaultProgram: true
            },
            rules
        }
    };
}
