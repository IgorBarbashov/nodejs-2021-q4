const { createReadStream } = require('fs');
const { isOptionExistsInCli } = require('../validation/cliOptions');
const { cliOptions: { cliInputOption } } = require('../constants/cliParameters');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { OPEN_FILE_MODE } = require('../constants/streams');

const createInputStream = (cliParameters) => {
    const isInputOptionExistsInCli = isOptionExistsInCli(cliInputOption, cliParameters);
    if (!isInputOptionExistsInCli) {
        return process.stdin;
    }
    const inputFilePath = getCliOptionValue(cliInputOption, cliParameters);
    return createReadStream(inputFilePath, { flags: OPEN_FILE_MODE.READABLE_STREAM });
};

module.exports = {
    createInputStream
};
