const { cliValidation } = require('./validation');
const { createPipeline } = require('./streams');
const { errorHandler } = require('./errors');

const cliParameters = process.argv.slice(2);

try {
    cliValidation(cliParameters);
    createPipeline(cliParameters);
} catch (err) {
    errorHandler(err);
}
