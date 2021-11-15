const { pipeline } = require('stream');
const { createInputStream } = require('./inputStream');
const { createOutputStream } = require('./outputStream');
const { createTransformStreamCollection } = require('./transformStream');
const { errorHandler, PipelineError } = require('../errors/customErrors');

const createPipeline = (cliParameters) => {
    const inputStream = createInputStream(cliParameters);
    const outputStream = createOutputStream(cliParameters);
    const transformStreamCollection = createTransformStreamCollection(cliParameters);

    pipeline(
        inputStream,
        ...transformStreamCollection,
        outputStream,
        (err) => {
            if (err) {
                errorHandler(new PipelineError(err.message));
            } else {
                process.stdout.write('Pipeline succeeded.');
            }
        }
    );
};

module.exports = {
    createPipeline
};
