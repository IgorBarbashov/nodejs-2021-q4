const { cliValidation } = require('./validation/index');
const { createPipeline } = require('./streams/createPipeline');
const { errorHandler } = require('./errors/index');

const cliParameters = process.argv.slice(2);

try {
    cliValidation(cliParameters);
    createPipeline(cliParameters);
} catch (err) {
    errorHandler(err);
}
