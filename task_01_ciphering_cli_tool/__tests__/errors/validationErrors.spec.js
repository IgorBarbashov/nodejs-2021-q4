const {
    CliOptionsValidateError,
    CliConfigValueValidateError,
    CliFilePathValidateError
} = require('../../errors');

describe('Class CliOptionsValidateError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new CliOptionsValidateError();
    });

    it('should create instance of class CliOptionsValidateError', () => {
        expect(instance).toBeInstanceOf(CliOptionsValidateError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'CliOptionsValidateError\'', () => {
        expect(instance.name).toBe('CliOptionsValidateError');
    });
});

describe('Class CliConfigValueValidateError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new CliConfigValueValidateError();
    });

    it('should create instance of class CliConfigValueValidateError', () => {
        expect(instance).toBeInstanceOf(CliConfigValueValidateError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'CliConfigValueValidateError\'', () => {
        expect(instance.name).toBe('CliConfigValueValidateError');
    });
});

describe('Class CliFilePathValidateError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new CliFilePathValidateError();
    });

    it('should create instance of class CliFilePathValidateError', () => {
        expect(instance).toBeInstanceOf(CliFilePathValidateError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'CliFilePathValidateError\'', () => {
        expect(instance.name).toBe('CliFilePathValidateError');
    });
});
