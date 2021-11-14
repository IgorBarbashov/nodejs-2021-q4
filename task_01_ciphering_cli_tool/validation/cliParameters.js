const isOptionExistsInCli = (option, parameters) => {
    const { options } = option;
    return options.some(el => parameters.includes(el));
};

const isOptionDuplicateInCli = (option, parameters) => {
    const { options } = option;
    const optionsEntryCount = options.map(el => parameters.filter(parameter => parameter === el).length);
    return optionsEntryCount.reduce((acc, el) => (acc + el), 0) > 1;
};

const isRequiredConditionValid = (option, parameters) => {
    const { required } = option;
    return required ? isOptionExistsInCli(option, parameters) : true;
};

const validateOption = (option, parameters) => {
    return isRequiredConditionValid(option, parameters) && !isOptionDuplicateInCli(option, parameters);
};

const validateCliOptions = (options, parameters) => {
    return options.every(option => validateOption(option, parameters));
};

module.exports = {
    validateCliOptions
};
