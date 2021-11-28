const { pipeline } = require('stream/promises');
const { createInputStream } = require('./inputStream');
const { createOutputStream } = require('./outputStream');
const { createTransformStreamCollection } = require('./transformStream');
const { errorHandler, PipelineError } = require('../errors');

const createPipeline = async (cliParameters, spyPipeline = pipeline) => {
    try {
        const inputStream = createInputStream(cliParameters);
        const outputStream = createOutputStream(cliParameters);
        const transformStreamCollection = createTransformStreamCollection(cliParameters);

        await spyPipeline(
            inputStream,
            ...transformStreamCollection,
            outputStream
        );
    } catch (err) {
        errorHandler(new PipelineError(err.message));
    }
};

module.exports = {
    createPipeline
};
