const { createPipeline } = require('./createPipeline');
const { CustomOutputStream } = require('./outputStream');
const { CustomInputStream } = require('./inputStream');

module.exports = {
    createPipeline,
    CustomOutputStream,
    CustomInputStream
};
