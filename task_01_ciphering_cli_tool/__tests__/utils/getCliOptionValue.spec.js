const { getCliOptionValue } = require('../../utils');
const { CLI_OPTIONS } = require('../../constants');

describe('Function getCliOptionValue', () => {
    it('should return the first founded value of the given parameter in the CLI', () => {
        const cliParameters = ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt', '-o', './output.txt'];
        const expectedValue = './input.txt';
        const value = getCliOptionValue(CLI_OPTIONS.CLI_INPUT_OPTION, cliParameters);
        expect(value).toBe(expectedValue);
    });

    it('should return empty string if value of the given parameter was not found', () => {
        const cliParameters = ['-c', 'C1-C0-A-R0-A-R0-R0-C1-A', '-i', './output.txt'];
        const expectedValue = '';
        const value = getCliOptionValue(CLI_OPTIONS.CLI_OUTPUT_OPTION, cliParameters);
        expect(value).toBe(expectedValue);
    });
});
