const { open, read, close } = require('fs');
const { Readable } = require('stream');
const { resolve } = require('path');
const { isOptionExistsInCli } = require('../validation');
const { OPEN_FILE_MODE, CLI_OPTIONS: { CLI_INPUT_OPTION }, DIRNAME } = require('../constants');
const { getCliOptionValue } = require('../utils');
const { errorHandler, OpenFileError } = require('../errors');

class CustomInputStream extends Readable {
    constructor(filePath) {
        super();
        this.filePath = filePath;
        this.fd = null;
    }

    _construct(callback) {
        open(this.filePath, OPEN_FILE_MODE.READABLE_STREAM, (err, fd) => {
            if (err) {
                errorHandler(new OpenFileError(err.message));
            } else {
                this.fd = fd;
                callback();
            }
        });
    }

    _read(n) {
        const buf = Buffer.alloc(n);
        read(this.fd, buf, 0, n, null, (err, bytesRead) => {
            if (err) {
                this.destroy(err);
            } else {
                this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
            }
        });
    }

    _destroy(error, callback) {
        if (this.fd) {
            close(this.fd, (err) => callback(err || error));
        } else {
            callback(error);
        }
    }
}

const createInputStream = (cliParameters) => {
    const isInputOptionExistsInCli = isOptionExistsInCli(CLI_INPUT_OPTION, cliParameters);
    if (!isInputOptionExistsInCli) {
        return process.stdin;
    }

    const rawInputFilePath = getCliOptionValue(CLI_INPUT_OPTION, cliParameters);
    const inputFilePath = resolve(DIRNAME, rawInputFilePath);
    const customInputStream = new CustomInputStream(inputFilePath);
    customInputStream.setEncoding('utf-8');
    return customInputStream;
};

module.exports = {
    createInputStream,
    CustomInputStream
};
