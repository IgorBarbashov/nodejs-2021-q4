const { Transform } = require('stream');
const { cipher } = require('../cipher');
const { getCliOptionValue } = require('../utils');
const { CLI_OPTIONS: { CLI_CONFIG_OPTION } } = require('../constants');

const createTransformStream = (shift, cipherMark) => {
    return new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, cipher(String(chunk), shift, cipherMark));
        }
    });
};

const createTransformStreamCollection = (cliParameters) => {
    const configValue = getCliOptionValue(CLI_CONFIG_OPTION, cliParameters);
    const configArray = configValue.split('-');
    const { valueSettings } = CLI_CONFIG_OPTION;
    const transformStreamCollection = [];
    configArray.forEach(el => {
        const transformStream = createTransformStream(valueSettings[el], el[0]);
        transformStreamCollection.push(transformStream);
    });
    return transformStreamCollection;
};

module.exports = {
    createTransformStreamCollection
};
