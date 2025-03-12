/**
 * Валидирует строку на основе заданных параметров.
 * @param {string} str - Строка для проверки
 * @param {Object} options - Настройки проверки
 * @param {number} options.minLength - Минимальная длина строки (по умолчанию 1)
 * @param {number} options.maxLength - Максимальная длина строки (по умолчанию Infinity)
 * @param {Set} options.allowedChars - Множество допустимых символов (по умолчанию пустое)
 * @returns {boolean} - true, если строка допустима, иначе false
 */
export const validateString = (
    str,
    { minLength = 1, maxLength = Infinity, allowedChars = new Set() } = {},
) => {
    if (!str || str.trim().length < minLength || str.length > maxLength) {
        return false;
    }

    let prevCharIsSpace = false;

    for (let char of str) {
        if (allowedChars.size > 0 && !allowedChars.has(char)) {
            return false;
        }

        if (char === ' ') {
            if (prevCharIsSpace) {
                return false;
            }
            prevCharIsSpace = true;
        } else {
            prevCharIsSpace = false;
        }
    }

    return true;
};
