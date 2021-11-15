class CustomErrors extends Error {
    constructor(message) {
        super(message);
        this.isCustom = true;
        this.message = `Ciphering CLI tool error: ${message ? message : 'unknown'}`
    };
};

const errorHandler = (err) => {
    const { isCustom } = err;
    if (isCustom) {
        process.stderr.write(err.message);
        process.exit(1);
    } else {
        throw err;
    }
};

class CliOptionsValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliOptionsValidateError';
    };
};

class CliConfigValueValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliConfigValueValidateError';
    };
};

class CliFilePathValidateError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'CliFilePathValidateError';
    };
};

class PipelineError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'PipelineError';
    };
};

module.exports = {
    errorHandler,
    CliOptionsValidateError,
    CliConfigValueValidateError,
    CliFilePathValidateError,
    PipelineError
};
