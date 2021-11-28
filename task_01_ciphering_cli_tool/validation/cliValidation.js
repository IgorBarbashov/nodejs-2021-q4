const { validateCliOptions } = require('./cliOptions');
const { validateCliConfigValue } = require('./cliConfigValue');
const { validateFilePath } = require('./cliFilesPaths');
const { CLI_OPTIONS: { CLI_INPUT_OPTION, CLI_OUTPUT_OPTION } } = require('../constants');
const { CliOptionsValidateError, CliConfigValueValidateError, CliFilePathValidateError } = require('../errors');

const cliValidation = (cliParameters) => {
    const isCliOptionsValid = validateCliOptions(cliParameters);
    if (!isCliOptionsValid) {
        throw new CliOptionsValidateError ('CLI options are invalid (requires \'-c\' or \'--config\' option, no option can be duplicated)');
    }

    const isCliConfigValueValid = validateCliConfigValue(cliParameters);
    if (!isCliConfigValueValid) {
        throw new CliConfigValueValidateError ('Config value is invalid');
    }

    const isCliInputFilePathValid = validateFilePath(CLI_INPUT_OPTION, cliParameters);
    if (!isCliInputFilePathValid) {
        throw new CliFilePathValidateError ('Input file doesn\'t exists');
    }

    const isCliOutputFilePathValid = validateFilePath(CLI_OUTPUT_OPTION, cliParameters);
    if (!isCliOutputFilePathValid) {
        throw new CliFilePathValidateError ('Output file doesn\'t exists');
    }
};

module.exports = {
    cliValidation
};
