const { CustomErrors } = require('./customErrors');

class OpenFileError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'OpenFileError';
    }
}

class ReadFileError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'ReadFileError';
    }
}

class WriteFileError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'WriteFileError';
    }
}

module.exports = {
    OpenFileError,
    ReadFileError,
    WriteFileError
};
