const { open, write, close } = require('fs');
const { Writable } = require('stream');
const { isOptionExistsInCli } = require('../validation/cliOptions');
const { cliOptions: { cliOutputOption } } = require('../constants/cliParameters');
const { getCliOptionValue } = require('../utils/getCliOptionValue');
const { OPEN_FILE_MODE } = require('../constants/streams');
const { errorHandler, OpenFileError } = require('../errors/index');

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
    const isOutputOptionExistsInCli = isOptionExistsInCli(cliOutputOption, cliParameters);
    if (!isOutputOptionExistsInCli) {
        return process.stdout;
    }
    const outputFilePath = getCliOptionValue(cliOutputOption, cliParameters);
    return new CustomOutputStream(outputFilePath);
};

module.exports = {
    createOutputStream
};
