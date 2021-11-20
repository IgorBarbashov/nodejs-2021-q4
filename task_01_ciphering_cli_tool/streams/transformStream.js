const { Transform } = require('stream');
const { cipher } = require('../cipher/cipher');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { cliOptions: { cliConfigOption } } = require('../constants/cliParameters');

const createTransformStream = (shift, cipherMark) => {
    return new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, cipher(String(chunk), shift, cipherMark));
        }
    });
};

const createTransformStreamCollection = (cliParameters) => {
    const configValue = getCliOptionValue(cliConfigOption, cliParameters);
    const configArray = configValue.split('-');
    const { valueSettings } = cliConfigOption;
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
