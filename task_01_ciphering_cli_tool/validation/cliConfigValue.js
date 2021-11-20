const { getCliOptionValue } = require('../utils');
    const { CLI_OPTIONS: { CLI_CONFIG_OPTION } } = require('../constants');

const validateCliConfigValue = (cliParameters) => {
    const { valueSettings } = CLI_CONFIG_OPTION;
    const valueSettingsKeys = Object.keys(valueSettings);
    const cliConfigValue = getCliOptionValue(CLI_CONFIG_OPTION, cliParameters);
    const splittedCliConfigValue = cliConfigValue.split('-');
    return splittedCliConfigValue.every(el => valueSettingsKeys.includes(el));
};

module.exports = {
    validateCliConfigValue
};
