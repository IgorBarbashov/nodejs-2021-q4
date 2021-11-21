const {
    isOptionExistsInCli, validateCliOptions, validateCliOption,
    isOptionDuplicateInCli, isCliOptionRequiredConditionValid
} = require('../../validation/cliOptions');
const { CLI_OPTIONS: {
    CLI_CONFIG_OPTION,
    CLI_INPUT_OPTION,
    CLI_OUTPUT_OPTION
}} = require('../../constants');

const cliParametersShortNotation = [
    '-c', 'C1-C0-A-R0-A-R0-R0-C1-A',
    '-i', './output.txt',
    '-o', './input.txt'
];

const cliParametersLongNotation = [
    '--config', 'C1-R0-A-C1-R1-A-A',
    '--output', 'no_exists_file.txt',
    '--input', 'text.txt'
];

const cliParametersWithoutValidOptions = [
    '-co', 'C1-R0-A-C1-R1-A-A',
    '-ou', 'no_exists_file.txt',
    '-in', 'text.txt'
];

describe('Function isOptionExistsInCli', () => {
    it('should return true if given option is exists in cli in short notation', () => {
        expect(isOptionExistsInCli(CLI_CONFIG_OPTION, cliParametersShortNotation)).toBeTruthy();
        expect(isOptionExistsInCli(CLI_INPUT_OPTION, cliParametersShortNotation)).toBeTruthy();
        expect(isOptionExistsInCli(CLI_OUTPUT_OPTION, cliParametersShortNotation)).toBeTruthy();
    });
    
    it('should return true if given option is exists in cli in long notation', () => {
        expect(isOptionExistsInCli(CLI_CONFIG_OPTION, cliParametersLongNotation)).toBeTruthy();
        expect(isOptionExistsInCli(CLI_INPUT_OPTION, cliParametersLongNotation)).toBeTruthy();
        expect(isOptionExistsInCli(CLI_OUTPUT_OPTION, cliParametersLongNotation)).toBeTruthy();
    });

    it('should return false if given option not exists in cli', () => {
        expect(isOptionExistsInCli(CLI_CONFIG_OPTION, cliParametersWithoutValidOptions)).toBeFalsy();
        expect(isOptionExistsInCli(CLI_INPUT_OPTION, cliParametersWithoutValidOptions)).toBeFalsy();
        expect(isOptionExistsInCli(CLI_OUTPUT_OPTION, cliParametersWithoutValidOptions)).toBeFalsy();
    });
});

describe('Function isOptionDuplicateInCli', () => {
    it('should return true if option duplicate in cli in any notation', () => {
        const cliParameters = cliParametersShortNotation.concat(cliParametersLongNotation);
        expect(isOptionDuplicateInCli(CLI_CONFIG_OPTION, cliParameters)).toBeTruthy();
        expect(isOptionDuplicateInCli(CLI_INPUT_OPTION, cliParameters)).toBeTruthy();
        expect(isOptionDuplicateInCli(CLI_OUTPUT_OPTION, cliParameters)).toBeTruthy();
    });

    it('should return false if option not duplicate in cli in any notation', () => {
        expect(isOptionDuplicateInCli(CLI_CONFIG_OPTION, cliParametersShortNotation)).toBeFalsy();
        expect(isOptionDuplicateInCli(CLI_INPUT_OPTION, cliParametersShortNotation)).toBeFalsy();
        expect(isOptionDuplicateInCli(CLI_OUTPUT_OPTION, cliParametersShortNotation)).toBeFalsy();
        expect(isOptionDuplicateInCli(CLI_CONFIG_OPTION, cliParametersLongNotation)).toBeFalsy();
        expect(isOptionDuplicateInCli(CLI_INPUT_OPTION, cliParametersLongNotation)).toBeFalsy();
        expect(isOptionDuplicateInCli(CLI_OUTPUT_OPTION, cliParametersLongNotation)).toBeFalsy();
    });
});

describe('Function isCliOptionRequiredConditionValid', () => {
    it('should return true if option is required and exists in cli', () => {
        expect(isCliOptionRequiredConditionValid(CLI_CONFIG_OPTION, cliParametersShortNotation)).toBeTruthy();
        expect(isCliOptionRequiredConditionValid(CLI_CONFIG_OPTION, cliParametersLongNotation)).toBeTruthy();
    });

    it('should return true if option is not required regardless it exists in cli or not', () => {
        expect(isCliOptionRequiredConditionValid(CLI_INPUT_OPTION, cliParametersShortNotation)).toBeTruthy();
        expect(isCliOptionRequiredConditionValid(CLI_OUTPUT_OPTION, cliParametersLongNotation)).toBeTruthy();
        expect(isCliOptionRequiredConditionValid(CLI_INPUT_OPTION, cliParametersWithoutValidOptions)).toBeTruthy();
        expect(isCliOptionRequiredConditionValid(CLI_OUTPUT_OPTION, cliParametersWithoutValidOptions)).toBeTruthy();
    });

    it('should return false if option is required and not exists in cli', () => {
        expect(isCliOptionRequiredConditionValid(CLI_CONFIG_OPTION, cliParametersWithoutValidOptions)).toBeFalsy();
    });
});

describe('Function validateCliOption', () => {
    it('should return true if for given option required rule is true and option not duplicate in cli', () => {
        expect(validateCliOption(CLI_CONFIG_OPTION, cliParametersShortNotation)).toBeTruthy();
        expect(validateCliOption(CLI_INPUT_OPTION, cliParametersLongNotation)).toBeTruthy();
        expect(validateCliOption(CLI_OUTPUT_OPTION, cliParametersWithoutValidOptions)).toBeTruthy();
    });
});

describe('Function validateCliOptions', () => {
    it('should return true if for all options required rule is true and no one option duplicate in cli', () => {
        expect(validateCliOptions(cliParametersShortNotation)).toBeTruthy();
        expect(validateCliOptions(cliParametersLongNotation)).toBeTruthy();
        expect(validateCliOptions(cliParametersWithoutValidOptions)).toBeFalsy();
    });
});
