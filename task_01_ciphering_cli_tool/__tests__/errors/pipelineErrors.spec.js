const { CustomErrors, PipelineError } = require('../../errors');

describe('Class PipelineError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new PipelineError();
    });

    it('should create instance of class CustomErrors', () => {
        expect(instance).toBeInstanceOf(CustomErrors);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'PipelineError\'', () => {
        expect(instance.name).toBe('PipelineError');
    });
});
