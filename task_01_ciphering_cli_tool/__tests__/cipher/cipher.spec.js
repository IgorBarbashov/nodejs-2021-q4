const {
    lowerCaseBaseAlphabet, upperCaseBaseAlphabet, lowerCaseExtendedAlphabet,
    upperCaseExtendedAlphabet, lowerCaseAlphabetIndexes, upperCaseAlphabetIndexes
} =  require('./alphabet.json');
const { getBaseAlphabet, getExtendedAlphabet, getAlphabetIndexes, cipher } = require('../../cipher');
const { CIPHER_MASK, ALPHABET_CONFIG } = require('../../constants');

const checkCaseOfString = (str, alphabet) => [...str].every(el => alphabet.includes(el));

describe('Helper checkCaseOfString', () => {
    it('should return true if all symbols in string in lower case', () => {
        expect(checkCaseOfString('lakdjkljsfdopivdnm', lowerCaseBaseAlphabet)).toBeTruthy();
    });

    it('should return false if any symbols in string in upper case', () => {
        expect(checkCaseOfString('lakdjkJljsfdopivdnm', lowerCaseBaseAlphabet)).toBeFalsy();
    });

    it('should return true if all symbols in string in upper case', () => {
        expect(checkCaseOfString('XPWEJNMFNJGVKJ', upperCaseBaseAlphabet)).toBeTruthy();
    });

    it('should return false if any symbols in string in upper case', () => {
        expect(checkCaseOfString('XPWEJNMFNJGfVKJ', upperCaseBaseAlphabet)).toBeFalsy();
    });
});

describe('Function getBaseAlphabet', () => {
    it('should return English alphabet in lower case', () => {
        const alphabet = getBaseAlphabet(ALPHABET_CONFIG.LOWER_CASE_ALPHABET_START_CHAR_CODE);
        expect(alphabet).toEqual(lowerCaseBaseAlphabet);
    });

    it('should return English alphabet in upper case', () => {
        const alphabet = getBaseAlphabet(ALPHABET_CONFIG.UPPER_CASE_ALPHABET_START_CHAR_CODE);
        expect(alphabet).toEqual(upperCaseBaseAlphabet);
    });
});

describe('Function getExtendedAlphabet', () => {
    it('should return sequence of three English alphabets in lower case', () => {
        const alphabet = getExtendedAlphabet(lowerCaseBaseAlphabet);
        expect(alphabet).toEqual(lowerCaseExtendedAlphabet);
    });

    it('should return sequence of three English alphabets in upper case', () => {
        const alphabet = getExtendedAlphabet(upperCaseBaseAlphabet);
        expect(alphabet).toEqual(upperCaseExtendedAlphabet);
    });
});

describe('Function getAlphabetIndexes', () => {
    it(`should return English alphabet in lower case with corresponded indexes starting from ${ALPHABET_CONFIG.SYMBOL_COUNT}`, () => {
        const alphabetIndexes = getAlphabetIndexes(lowerCaseBaseAlphabet);
        expect(alphabetIndexes).toEqual(lowerCaseAlphabetIndexes);
    });

    it(`should return English alphabet in lower case with corresponded indexes starting from ${ALPHABET_CONFIG.SYMBOL_COUNT}`, () => {
        const alphabetIndexes = getAlphabetIndexes(upperCaseBaseAlphabet);
        expect(alphabetIndexes).toEqual(upperCaseAlphabetIndexes);
    });
});

describe('Function cipher', () => {
    describe('using Caesar cipher', () => {
        it('should encode English symbols', () => {
            const inputString = 'lkjfsdjjJHBHndskdosl';
            const expectedString = 'mlkgtekkKICIoetleptm';
            const cipheredString = cipher(inputString, 1, CIPHER_MASK.CAESAR);
            expect(cipheredString).toBe(expectedString);
        });

        it('should decode English symbols', () => {
            const inputString = 'JJFKLKDLKkcvjdjsuj';
            const expectedString = 'IIEJKJCKJjbuicirti';
            const cipheredString = cipher(inputString, -1, CIPHER_MASK.CAESAR);
            expect(cipheredString).toBe(expectedString);
        });

        it('should keep untouched any symbols except in English alphabet', () => {
            const inputString = 'ы в аыва_) (*#)+/ *-ОЛОД ЫОЫОЛ';
            const cipheredString = cipher(inputString, 1, CIPHER_MASK.CAESAR);
            expect(cipheredString).toBe(inputString);
        });

        it('should keep case of English symbols', () => {
            const lowerCaseInputString = 'sakjdhsakjdhsakjdh';
            const upperCaseInputString = 'LSFDALXVDDWAMNFCF';
            const lowerCaseCipheredString = cipher(lowerCaseInputString, 1, CIPHER_MASK.CAESAR);
            const upperCaseCipheredString = cipher(upperCaseInputString, -1, CIPHER_MASK.CAESAR);
            const isLowerCaseCSValid = checkCaseOfString(lowerCaseCipheredString, lowerCaseBaseAlphabet);
            const isUpperCaseCSValid = checkCaseOfString(upperCaseCipheredString, upperCaseBaseAlphabet);
            expect(isLowerCaseCSValid).toBeTruthy();
            expect(isUpperCaseCSValid).toBeTruthy();
        });
    });

    describe('using Atbash cipher', () => {
        it('should encode English symbols', () => {
            const inputString = 'lkjfsdjjJHBHndskdosl';
            const expectedString = 'opquhwqqQSYSmwhpwlho';
            const cipheredString = cipher(inputString, undefined, CIPHER_MASK.ATBASH);
            expect(cipheredString).toBe(expectedString);
        });

        it('should keep untouched any symbols except in English alphabet', () => {
            const inputString = 'ы в аыва_) (*#)+/ *-ОЛОД ЫОЫОЛ';
            const cipheredString = cipher(inputString, undefined, CIPHER_MASK.ATBASH);
            expect(cipheredString).toBe(inputString);
        });

        it('should keep case of English symbols', () => {
            const lowerCaseInputString = 'sakjdhsakjdhsakjdh';
            const upperCaseInputString = 'LSFDALXVDDWAMNFCF';
            const lowerCaseCipheredString = cipher(lowerCaseInputString, undefined, CIPHER_MASK.ATBASH);
            const upperCaseCipheredString = cipher(upperCaseInputString, undefined, CIPHER_MASK.ATBASH);
            const isLowerCaseCSValid = checkCaseOfString(lowerCaseCipheredString, lowerCaseBaseAlphabet);
            const isUpperCaseCSValid = checkCaseOfString(upperCaseCipheredString, upperCaseBaseAlphabet);
            expect(isLowerCaseCSValid).toBeTruthy();
            expect(isUpperCaseCSValid).toBeTruthy();
        });
    });

    describe('using ROT-8 cipher', () => {
        it('should encode English symbols', () => {
            const inputString = 'lkjfsdjjJHBHndskdosl';
            const expectedString = 'tsrnalrrRPJPvlaslwat';
            const cipheredString = cipher(inputString, 8, CIPHER_MASK.ROT_8);
            expect(cipheredString).toBe(expectedString);
        });

        it('should decode English symbols', () => {
            const inputString = 'JJFKLKDLKkcvjdjsuj';
            const expectedString = 'BBXCDCVDCcunbvbkmb';
            const cipheredString = cipher(inputString, -8, CIPHER_MASK.ROT_8);
            expect(cipheredString).toBe(expectedString);
        });

        it('should keep untouched any symbols except in English alphabet', () => {
            const inputString = 'ы в аыва_) (*#)+/ *-ОЛОД ЫОЫОЛ';
            const cipheredString = cipher(inputString, 8, CIPHER_MASK.ROT_8);
            expect(cipheredString).toBe(inputString);
        });

        it('should keep case of English symbols', () => {
            const lowerCaseInputString = 'sakjdhsakjdhsakjdh';
            const upperCaseInputString = 'LSFDALXVDDWAMNFCF';
            const lowerCaseCipheredString = cipher(lowerCaseInputString, 8, CIPHER_MASK.ROT_8);
            const upperCaseCipheredString = cipher(upperCaseInputString, -8, CIPHER_MASK.ROT_8);
            const isLowerCaseCSValid = checkCaseOfString(lowerCaseCipheredString, lowerCaseBaseAlphabet);
            const isUpperCaseCSValid = checkCaseOfString(upperCaseCipheredString, upperCaseBaseAlphabet);
            expect(isLowerCaseCSValid).toBeTruthy();
            expect(isUpperCaseCSValid).toBeTruthy();
        });
    });
});
