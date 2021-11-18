const getCliOptionValue = (option, parameters) => {
    const { options } = option;
    const actualParameters = parameters.slice(0, -1);
    let optionIndex = -1;
    for (const el of options) {
        const elIndex = actualParameters.indexOf(el);
        if (elIndex !== -1) {
            optionIndex = elIndex;
            break;
        }
    }
    return optionIndex === -1 ? '' : parameters[optionIndex + 1];
};

module.exports = {
    getCliOptionValue
};
