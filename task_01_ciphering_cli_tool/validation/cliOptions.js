const { cliOptions } = require('../constants/cliParameters');

const isOptionExistsInCli = (option, parameters) => {
    const { options } = option;
    return options.some(el => parameters.includes(el));
};

const isOptionDuplicateInCli = (option, parameters) => {
    const { options } = option;
    const optionsEntryCount = options.map(el => parameters.filter(parameter => parameter === el).length);
    return optionsEntryCount.reduce((acc, el) => (acc + el), 0) > 1;
};

const isCliOptionRequiredConditionValid = (option, parameters) => {
    const { required } = option;
    return required ? isOptionExistsInCli(option, parameters) : true;
};

const validateCliOption = (option, parameters) => {
    return isCliOptionRequiredConditionValid(option, parameters) && !isOptionDuplicateInCli(option, parameters);
};

const validateCliOptions = (cliParameters) => {
    return Object.values(cliOptions).every(option => validateCliOption(option, cliParameters));
};

module.exports = {
    validateCliOptions
};
