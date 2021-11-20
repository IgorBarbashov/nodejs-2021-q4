const { existsSync } = require('fs');
const { getCliOptionValue } = require('../utils');
const { isOptionExistsInCli } = require('./cliOptions');

const isFileExists = (filePath) => existsSync(filePath);

const validateFilePath = (cliOptions, cliParameters) => {
    const isOptionExistsInCliFlag = isOptionExistsInCli(cliOptions, cliParameters);
    if (!isOptionExistsInCliFlag) {
        return true;
    }
    const filePath = getCliOptionValue(cliOptions, cliParameters);
    return isFileExists(filePath);
};

module.exports = {
    validateFilePath
};
