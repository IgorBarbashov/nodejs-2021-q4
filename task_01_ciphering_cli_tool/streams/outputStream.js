const { createWriteStream } = require('fs');
const { isOptionExistsInCli } = require('../validation/cliOptions');
const { cliOptions: { cliOutputOption } } = require('../constants/cliParameters');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { OPEN_FILE_MODE } = require('../constants/streams');

const createOutputStream = (cliParameters) => {
    const isOutputOptionExistsInCli = isOptionExistsInCli(cliOutputOption, cliParameters);
    if (!isOutputOptionExistsInCli) {
        return process.stdout;
    }
    const outputFilePath = getCliOptionValue(cliOutputOption, cliParameters);
    return createWriteStream(outputFilePath, { flags: OPEN_FILE_MODE.WRITABLE_STREAM });
};

module.exports = {
    createOutputStream
};
