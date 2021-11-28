const { spawn } = require('child_process');

describe('Error scenarios', () => {
    const invalidCases = {
        duplicateOption: {
            cli: ['index', '-c', 'C1-C1-A-R0', '--config', 'C0'],
            msg: 'Ciphering CLI tool error: CLI options are invalid (requires \'-c\' or \'--config\' option, no option can be duplicated)'
        },
        lostConfigOptions: {
            cli: ['index', '-o', 'output.txt', '-i', 'input.txt'],
            msg: 'Ciphering CLI tool error: CLI options are invalid (requires \'-c\' or \'--config\' option, no option can be duplicated)'
        },
        invalidInputPath: {
            cli: ['index', '-c', 'A-A', '-o', 'output.txt', '-i', '_input.txt'],
            msg: 'Ciphering CLI tool error: Input file doesn\'t exists'
        },
        invalidOutputPath: {
            cli: ['index', '-c', 'A-A', '-o', '_output.txt', '-i', 'input.txt'],
            msg: 'Ciphering CLI tool error: Output file doesn\'t exists'
        },
        invalidConfig: {
            cli: ['index', '-c', 'A-A-B', '-o', 'output.txt', '-i', 'input.txt'],
            msg: 'Ciphering CLI tool error: Config value is invalid'
        }
    };

    describe('if user passes the same cli argument twice', () => {
        it('should throw an Error', () => {
            let result = '';
            const childProcess = spawn('node', invalidCases.duplicateOption.cli);
            childProcess.stderr.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
            childProcess.stderr.on('end', () => { expect(result).toBe(invalidCases.duplicateOption.msg); });
        });
    });

    describe('if user lost config options', () => {
        it('should throw an Error', () => {
            let result = '';
            const childProcess = spawn('node', invalidCases.lostConfigOptions.cli);
            childProcess.stderr.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
            childProcess.stderr.on('end', () => { expect(result).toBe(invalidCases.lostConfigOptions.msg); });
        });
    });

    describe('if user pass invalid input path', () => {
        it('should throw an Error', () => {
            let result = '';
            const childProcess = spawn('node', invalidCases.invalidInputPath.cli);
            childProcess.stderr.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
            childProcess.stderr.on('end', () => { expect(result).toBe(invalidCases.invalidInputPath.msg); });
        });
    });

    describe('if user pass invalid output path', () => {
        it('should throw an Error', () => {
            let result = '';
            const childProcess = spawn('node', invalidCases.invalidOutputPath.cli);
            childProcess.stderr.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
            childProcess.stderr.on('end', () => { expect(result).toBe(invalidCases.invalidOutputPath.msg); });
        });
    });

    describe('if user pass invalid config settings', () => {
        it('should throw an Error', () => {
            let result = '';
            const childProcess = spawn('node', invalidCases.invalidConfig.cli);
            childProcess.stderr.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
            childProcess.stderr.on('end', () => { expect(result).toBe(invalidCases.invalidConfig.msg); });
        });
    });
});
