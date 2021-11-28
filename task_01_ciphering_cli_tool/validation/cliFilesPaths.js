const { existsSync } = require('fs');
const { resolve } = require('path');
const { getCliOptionValue } = require('../utils');
const { isOptionExistsInCli } = require('./cliOptions');
const { DIRNAME } = require('../constants');

const isFileExists = (filePath) => existsSync(filePath);

const validateFilePath = (cliOptions, cliParameters) => {
    const isOptionExistsInCliFlag = isOptionExistsInCli(cliOptions, cliParameters);
    if (!isOptionExistsInCliFlag) {
        return true;
    }

    const rawFilePath = getCliOptionValue(cliOptions, cliParameters);
    const filePath = resolve(DIRNAME, rawFilePath);
    return isFileExists(filePath);
};

module.exports = {
    validateFilePath
};
