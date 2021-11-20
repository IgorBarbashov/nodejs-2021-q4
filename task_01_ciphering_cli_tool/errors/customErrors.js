class CustomErrors extends Error {
    constructor(message) {
        super(message);
        this.isCustom = true;
        this.message = `Ciphering CLI tool error: ${message ? message : 'unknown'}`;
    }
}

const errorHandler = (err) => {
    const { isCustom } = err;
    if (isCustom) {
        process.stderr.write(err.message);
        process.exit(1);
    } else {
        throw err;
    }
};

module.exports = {
    errorHandler,
    CustomErrors
};
