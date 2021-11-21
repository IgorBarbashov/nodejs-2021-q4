const { spawn } = require('child_process');

describe('Success scenarios', () => {
    const successCases = {
        caseOne: {
            cli: ['index', '-c', 'C1-C1-R0-A', '--o', 'output.txt', '-i', 'input.txt'],
            res: 'Myxn xn nbdobm. Tbnnfzb ferlm \'_\' nhteru!'
        },
        caseTwo: {
            cli: ['index', '-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '--o', 'output.txt', '-i', 'input.txt'],
            res: 'Vhgw gw wkmxkv. Ckwwoik onauv \'_\' wqcnad!'
        },
        caseThree: {
            cli: ['index', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A', '--o', 'output.txt', '-i', 'input.txt'],
            res: 'Hvwg wg gsqfsh. Asggous opcih \'_\' gmapcz!'
        },
        caseFour: {
            cli: ['index', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1', '--o', 'output.txt', '-i', 'input.txt'],
            res: 'This is secret. Message about \'_\' symbol!'
        }
    };

    it('case one', () => {
        let result = '';
        const childProcess = spawn('node', successCases.caseOne.cli);
        childProcess.stdout.on('data', (chunk) => {
            result = `${result}${chunk.toString()}`;
        });
        childProcess.stdout.on('end', () => { 
            expect(result).toBe(successCases.caseOne.res);
        });
    });

    it('case two', () => {
        let result = '';
        const childProcess = spawn('node', successCases.caseTwo.cli);
        childProcess.stdout.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
        childProcess.stdout.on('end', () => { expect(result).toBe(successCases.caseTwo.res); });
    });

    it('case three', () => {
        let result = '';
        const childProcess = spawn('node', successCases.caseThree.cli);
        childProcess.stdout.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
        childProcess.stdout.on('end', () => { expect(result).toBe(successCases.caseThree.res); });
    });

    it('case four', () => {
        let result = '';
        const childProcess = spawn('node', successCases.caseFour.cli);
        childProcess.stdout.on('data', (chunk) => { result = `${result}${chunk.toString()}`; });
        childProcess.stdout.on('end', () => { expect(result).toBe(successCases.caseFour.res); });
    });
});
