const { cliValidation } = require('../../validation');
const {
    CliOptionsValidateError, CliConfigValueValidateError, CliFilePathValidateError
} = require('../../errors');

describe('Function cliValidation', () => {
    it('should throw CliOptionsValidateError if options didn\'t pass validation', () => {
        const cliParameters = [
            ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '--input', 'input.txt', '-i', 'duplicate.txt', '-o', 'output.txt'],
            ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '--input', 'input.txt', '-o', 'output.txt', '--output', 'duplicate.txt'],
            ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '--config', 'DUPLICATE', '--input', 'input.txt', '-o', 'output.txt'],
            ['--input', 'input.txt', '-o', 'output.txt']
        ];
        expect(() => { cliValidation(cliParameters[0]); }).toThrowError(CliOptionsValidateError);
        expect(() => { cliValidation(cliParameters[1]); }).toThrowError(CliOptionsValidateError);
        expect(() => { cliValidation(cliParameters[2]); }).toThrowError(CliOptionsValidateError);
        expect(() => { cliValidation(cliParameters[3]); }).toThrowError(CliOptionsValidateError);
    });

    it('should throw CliConfigValueValidateError if configuration didn\'t pass validation', () => {
        const cliParameters = [
            ['-c', 'C1-C0-A-R01-A', '-i', 'input.txt', '-o', 'output.txt'],
            ['-c', 'B0-B1', '-i', 'input.txt', '-o', 'output.txt'],
            ['-c', '', '-i', 'input.txt', '-o', 'output.txt']
        ];
        expect(() => { cliValidation(cliParameters[0]); }).toThrowError(CliConfigValueValidateError);
        expect(() => { cliValidation(cliParameters[1]); }).toThrowError(CliConfigValueValidateError);
        expect(() => { cliValidation(cliParameters[2]); }).toThrowError(CliConfigValueValidateError);
    });

    it('should throw CliFilePathValidateError if input/output files not exists', () => {
        const cliParameters = [
            ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', '_input.txt', '-o', 'output.txt'],
            ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', 'input.txt', '-o', '_output.txt']
        ];
        expect(() => { cliValidation(cliParameters[0]); }).toThrowError(CliFilePathValidateError);
        expect(() => { cliValidation(cliParameters[1]); }).toThrowError(CliFilePathValidateError);
    });
});
