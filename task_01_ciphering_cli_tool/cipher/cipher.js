const ALPHABET_CONFIG = {
    SYMBOL_COUNT: 26,
    LOWER_CASE_ALPHABET_START_CHAR_CODE: 65,
    UPPER_CASE_ALPHABET_START_CHAR_CODE: 97
};

const getBaseAlphabet = (startCharCode) => 
    Array(ALPHABET_CONFIG.SYMBOL_COUNT)
        .fill(startCharCode)
        .map((el, i) => String.fromCharCode(el + i))

const getExtendedAlphabet = (baseAlphabet, count = 3) => baseAlphabet.join('').repeat(count).split('');
const getAlphabetIndexes = (baseAlphabet) => baseAlphabet.map((el, i) => [el, ALPHABET_CONFIG.SYMBOL_COUNT + i]);

const lowerCaseBaseAlphabet = getBaseAlphabet(ALPHABET_CONFIG.LOWER_CASE_ALPHABET_START_CHAR_CODE);
const upperCaseBaseAlphabet = getBaseAlphabet(ALPHABET_CONFIG.UPPER_CASE_ALPHABET_START_CHAR_CODE);
const commonBaseAlphabet = lowerCaseBaseAlphabet.concat(upperCaseBaseAlphabet);

const lowerCaseExtendedAlphabet = getExtendedAlphabet(lowerCaseBaseAlphabet);
const upperCaseExtendedAlphabet = getExtendedAlphabet(upperCaseBaseAlphabet);

const lowerCaseAlphabetIndexes = new Map(
    getAlphabetIndexes(lowerCaseBaseAlphabet)
);
const upperCaseAlphabetIndexes = new Map(
    getAlphabetIndexes(upperCaseBaseAlphabet)
);

const cipher = (str, shift) => {
    return [...str]
        .map(el => {
            if (!commonBaseAlphabet.includes(el)) {
                return el;
            }
            let targetAlphabet;
            let targetAlphabetIndexes;

            if (lowerCaseBaseAlphabet.includes(el)) {
                targetAlphabet = lowerCaseExtendedAlphabet;
                targetAlphabetIndexes = lowerCaseAlphabetIndexes;
            } else {
                targetAlphabet = upperCaseExtendedAlphabet;
                targetAlphabetIndexes = upperCaseAlphabetIndexes;
            }

            const newIndex = targetAlphabetIndexes.get(el) + shift;
            return targetAlphabet[newIndex];
        })
        .join('');
};

module.exports = {
    cipher
};
