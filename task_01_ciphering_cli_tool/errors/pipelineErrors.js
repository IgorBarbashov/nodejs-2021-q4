const { CustomErrors } = require('./customErrors');

class PipelineError extends CustomErrors {
    constructor(message) {
        super(message);
        this.name = 'PipelineError';
    }
}

module.exports = {
    PipelineError
};
