const { CustomErrors } = require('./customErrors');

class CliOptionsValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliOptionsValidateError';
    }
}

class CliConfigValueValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliConfigValueValidateError';
    }
}

class CliFilePathValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliFilePathValidateError';
    }
}

module.exports = {
    CliOptionsValidateError,
    CliConfigValueValidateError,
    CliFilePathValidateError
};
