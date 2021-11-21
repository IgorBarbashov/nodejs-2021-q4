const { Writable } = require('stream');
const { createOutputStream, CustomOutputStream } = require('../../streams/outputStream');

const validOutputFilePath = 'output.txt';

describe('Class CustomOutputStream', () => {
    
    describe('in constructor', () => {
        const instance = new CustomOutputStream(validOutputFilePath);

        it('should create instance of class Writable', () => {
            expect(instance).toBeInstanceOf(Writable);
        });
        
        it('should set this.filePath to given value', () => {
            expect(instance.filePath).toBe(validOutputFilePath);
        });

        it('should set this.fd to fd of opened file', () => {
            expect(instance.fd).toBeFalsy();
        });
    });
});

describe('Function createOutputStream', () => {
    const cliParameters = [
        '-c', 'C1-C0-A-R0-A-R0-R0-C1-A',
        '-i', './input.txt',
        '-o', './output.txt'
    ];

    it('should create instance of CustomOutputStream if output option exists in cli', () => {
        const customOutputStream = createOutputStream(cliParameters);
        expect(customOutputStream).toBeInstanceOf(CustomOutputStream);
    });

    it('should return process.stdout if input option not exists in cli', () => {
        const actualCliParameters = [...cliParameters.slice(0, -2)];
        const customOutputStream = createOutputStream(actualCliParameters);
        expect(customOutputStream).toEqual(process.stdout);
    });
});
