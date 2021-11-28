const { validateFilePath } = require('../../validation/cliFilesPaths');
const { CLI_OPTIONS: { CLI_INPUT_OPTION, CLI_OUTPUT_OPTION } } = require('../../constants');

describe('Function validateFilePath', () => {
    it('should return true if given file is exists', () => {
        const cliParametersWithExistsFile = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '--input', 'input.txt', '-o', 'output.txt'];
        expect(validateFilePath(CLI_INPUT_OPTION, cliParametersWithExistsFile)).toBeTruthy();
        expect(validateFilePath(CLI_OUTPUT_OPTION, cliParametersWithExistsFile)).toBeTruthy();
    });

    it('should return false if given file is not exists', () => {
        const cliParametersWithNotExistsFile = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', '_input.txt', '-o', '_output.txt'];
        expect(validateFilePath(CLI_INPUT_OPTION, cliParametersWithNotExistsFile)).toBeFalsy();
        expect(validateFilePath(CLI_OUTPUT_OPTION, cliParametersWithNotExistsFile)).toBeFalsy();
    });

    it('should return true if given option not exists in cli', () => {
        const cliParametersWithNotInputOption = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-o', '_output.txt'];
        const cliParametersWithNotOutputOption = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', '_input.txt'];
        expect(validateFilePath(CLI_INPUT_OPTION, cliParametersWithNotInputOption)).toBeTruthy();
        expect(validateFilePath(CLI_OUTPUT_OPTION, cliParametersWithNotOutputOption)).toBeTruthy();
    });
});
