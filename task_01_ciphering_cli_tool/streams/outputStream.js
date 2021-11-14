const { createWriteStream } = require('fs');
const { isOptionExistsInCli } = require('../validation/cliOptions');
const { cliOptions: { cliOutputOption } } = require('../constants/cliParameters');
const { getCliOptionValue } = require('../utils/getCliOptionValue');

const createOutputStream = (cliParameters) => {
    const isOutputOptionExistsInCli = isOptionExistsInCli(cliOutputOption, cliParameters);
    if (!isOutputOptionExistsInCli) {
        return process.stdout;
    }
    const outputFilePath = getCliOptionValue(cliOutputOption, cliParameters);
    return createWriteStream(outputFilePath);
};

module.exports = {
    createOutputStream
};
