const { validateCliOptions } = require('./cliOptions');
const { validateCliConfigValue } = require('./cliConfigValue');
const { validateFilePath } = require('./cliFilesPaths');
const { cliOptions: { cliInputOption, cliOutputOption } } = require('../constants/cliParameters');
const { CliOptionsValidateError, CliConfigValueValidateError, CliFilePathValidateError } = require('../errors/customErrors');

const cliValidation = (cliParameters) => {
    const isCliOptionsValid = validateCliOptions(cliParameters);
    if (!isCliOptionsValid) {
        throw new CliOptionsValidateError ('CLI options are invalid (requires \'-c\' or \'--config\' option, no option can be duplicated)');
    }

    const isCliConfigValueValid = validateCliConfigValue(cliParameters);
    if (!isCliConfigValueValid) {
        throw new CliConfigValueValidateError ('Config value is invalid');
    }

    const isCliInputFilePathValid = validateFilePath(cliInputOption, cliParameters);
    if (!isCliInputFilePathValid) {
        throw new CliFilePathValidateError ('Input file doesn\'t exists');
    }

    const isCliOutputFilePathValid = validateFilePath(cliOutputOption, cliParameters);
    if (!isCliOutputFilePathValid) {
        throw new CliFilePathValidateError ('Output file doesn\'t exists');
    }
};

module.exports = {
    cliValidation
};
