const { Readable } = require('stream');
const { createInputStream, CustomInputStream } = require('../../streams/inputStream');

const validInputFilePath = 'input.txt';

describe('Class CustomInputStream', () => {
    describe('in constructor', () => {
        const instance = new CustomInputStream(validInputFilePath);

        it('should create instance of class Readable', () => {
            expect(instance).toBeInstanceOf(Readable);
        });
        
        it('should set this.filePath to given value', () => {
            expect(instance.filePath).toBe(validInputFilePath);
        });

        it('should set this.fd to null', () => {
            expect(instance.fd).toBeFalsy();
        });
    });
});

describe('Function createInputStream', () => {
    const cliParameters = [
        '-c', 'C1-C0-A-R0-A-R0-R0-C1-A',
        '-o', './output.txt',
        '-i', './input.txt'
    ];

    it('should create instance of CustomInputStream if input option exists in cli', () => {
        const customInputStream = createInputStream(cliParameters);
        expect(customInputStream).toBeInstanceOf(CustomInputStream);
    });

    it('should return process.stdin if input option not exists in cli', () => {
        const actualCliParameters = [...cliParameters.slice(0, -2)];
        const customInputStream = createInputStream(actualCliParameters);
        expect(customInputStream).toEqual(process.stdin);
    });
});
