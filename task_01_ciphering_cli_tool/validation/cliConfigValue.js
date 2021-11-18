const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { cliOptions: { cliConfigOption } } = require('../constants/cliParameters');

const validateCliConfigValue = (cliParameters) => {
    const { valueSettings } = cliConfigOption;
    const valueSettingsKeys = Object.keys(valueSettings);
    const cliConfigValue = getCliOptionValue(cliConfigOption, cliParameters)
    const splittedCliConfigValue = cliConfigValue.split('-');
    return splittedCliConfigValue.every(el => valueSettingsKeys.includes(el));
};

module.exports = {
    validateCliConfigValue
};
