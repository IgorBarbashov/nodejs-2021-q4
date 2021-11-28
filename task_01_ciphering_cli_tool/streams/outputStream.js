const { open, write, close } = require('fs');
const { Writable } = require('stream');
const { resolve } = require('path');
const { isOptionExistsInCli } = require('../validation');
const { OPEN_FILE_MODE, CLI_OPTIONS: { CLI_OUTPUT_OPTION }, DIRNAME } = require('../constants');
const { getCliOptionValue } = require('../utils');
const { errorHandler, OpenFileError } = require('../errors');

class CustomOutputStream extends Writable {
    constructor(filePath) {
        super();
        this.filePath = filePath;
        this.fd = null;
    }

    _construct(callback) {
        open(this.filePath, OPEN_FILE_MODE.WRITABLE_STREAM, (err, fd) => {
            if (err) {
                errorHandler(new OpenFileError(err.message));
                callback(err);
            } else {
                this.fd = fd;
                callback();
            }
        });
    }

    _write(chunk, _, callback) {
        write(this.fd, chunk, callback);
    }

    _destroy(error, callback) {
        if (this.fd) {
            close(this.fd, (err) => {
                callback(err || error);
            });
        } else {
            callback(error);
        }
    }
}

const createOutputStream = (cliParameters) => {
    const isOutputOptionExistsInCli = isOptionExistsInCli(CLI_OUTPUT_OPTION, cliParameters);
    if (!isOutputOptionExistsInCli) {
        return process.stdout;
    }

    const rawOutputFilePath = getCliOptionValue(CLI_OUTPUT_OPTION, cliParameters);
    const outputFilePath = resolve(DIRNAME, rawOutputFilePath);
    return new CustomOutputStream(outputFilePath);
};

module.exports = {
    createOutputStream,
    CustomOutputStream
};
