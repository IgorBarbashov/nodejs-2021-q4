const { validateCliConfigValue } = require('../../validation/cliConfigValue');

describe('Function validateCliConfigValue', () => {
    it('should return true if value of cipher config is valid', () => {
        const cliParameters = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', './output.txt'];
        const isCipherConfigValid = validateCliConfigValue(cliParameters);
        expect(isCipherConfigValid).toBeTruthy();
    });

    it('should return false if value of cipher config is invalid', () => {
        const cliParameters = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A-B', '-i', './output.txt'];
        const isCipherConfigValid = validateCliConfigValue(cliParameters);
        expect(isCipherConfigValid).toBeFalsy();
    });
});
