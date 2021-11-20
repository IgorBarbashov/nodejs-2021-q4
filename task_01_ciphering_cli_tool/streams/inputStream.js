const { open, read, close } = require('fs');
const { Readable } = require('stream');
const { isOptionExistsInCli } = require('../validation/cliOptions');
const { cliOptions: { cliInputOption } } = require('../constants/cliParameters');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { OPEN_FILE_MODE } = require('../constants/streams');
const { errorHandler, OpenFileError } = require('../errors/index');

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
    const isInputOptionExistsInCli = isOptionExistsInCli(cliInputOption, cliParameters);
    if (!isInputOptionExistsInCli) {
        return process.stdin;
    }
    const inputFilePath = getCliOptionValue(cliInputOption, cliParameters);
    return new CustomInputStream(inputFilePath);
};

module.exports = {
    createInputStream
};
