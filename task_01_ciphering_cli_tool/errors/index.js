const { errorHandler, CustomErrors } = require('./customErrors');
const { OpenFileError, ReadFileError, WriteFileError } = require('./fsErrors');
const { PipelineError } = require('./pipelineErrors');
const { CliOptionsValidateError, CliConfigValueValidateError, CliFilePathValidateError } = require('./validationErrors');

module.exports = {
    errorHandler,
    CustomErrors,
    OpenFileError,
    ReadFileError,
    WriteFileError,
    PipelineError,
    CliOptionsValidateError,
    CliConfigValueValidateError,
    CliFilePathValidateError
};
