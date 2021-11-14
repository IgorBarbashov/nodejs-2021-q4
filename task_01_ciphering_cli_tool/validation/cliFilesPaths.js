const fs = require('fs');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { isOptionExistsInCli } = require('../validation/cliOptions');

const isFileExists = (filePath) => fs.existsSync(filePath);

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
