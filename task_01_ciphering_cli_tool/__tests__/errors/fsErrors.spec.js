const { OpenFileError, ReadFileError, WriteFileError } = require('../../errors');

describe('Class OpenFileError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new OpenFileError();
    });

    it('should create instance of class OpenFileError', () => {
        expect(instance).toBeInstanceOf(OpenFileError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'OpenFileError\'', () => {
        expect(instance.name).toBe('OpenFileError');
    });
});

describe('Class ReadFileError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new ReadFileError();
    });

    it('should create instance of class ReadFileError', () => {
        expect(instance).toBeInstanceOf(ReadFileError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'ReadFileError\'', () => {
        expect(instance.name).toBe('ReadFileError');
    });
});

describe('Class WriteFileError in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new WriteFileError();
    });

    it('should create instance of class WriteFileError', () => {
        expect(instance).toBeInstanceOf(WriteFileError);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it('should set this.name to \'WriteFileError\'', () => {
        expect(instance.name).toBe('WriteFileError');
    });
});
