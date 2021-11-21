const { errorHandler, CustomErrors } = require('../../errors');
const { ERROR_CODE } = require('../../constants');

const errorMessageStartsWith = 'Ciphering CLI tool error:';

describe('Class CustomErrors in constructor()', () => {
    let instance = null;

    beforeEach(() => {
        instance = new CustomErrors();
    });

    it('should create instance of class Error', () => {
        expect(instance).toBeInstanceOf(Error);
    });

    it('should set this.isCustom to true value', () => {
        expect(instance.isCustom).toBeTruthy();
    });

    it(`should starts error message with '${errorMessageStartsWith}'`, () => {
        expect(instance.message).toEqual(expect.stringContaining(errorMessageStartsWith));
    });
});

describe('Function errorHandler', () => {
    let spyExit = null;

    beforeEach(() => {
        spyExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    });

    it('should write error message to process.stderr if isCustom = true', () => {
        const errMessage = 'SpyOnError';
        const err = new CustomErrors(errMessage);
        const spy = jest.spyOn(process.stderr, 'write');
        errorHandler(err);
        expect(spy).toHaveBeenCalledWith(`${errorMessageStartsWith} ${errMessage}`);
    });

    it('should exit with code != 0 if isCustom = true', () => {
        const err = new CustomErrors();
        errorHandler(err);
        expect(spyExit).toHaveBeenCalledWith(ERROR_CODE);
    });

    it('should throw error to parent handler if isCustom = false', () => {
        const err = new Error();
        expect(() => { errorHandler(err); }).toThrowError(Error);
    });
});
