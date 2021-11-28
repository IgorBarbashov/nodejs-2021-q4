const { Transform } = require('stream');
const { createTransformStreamCollection } = require('../../streams/transformStream');
const { getCliOptionValue } = require('../../utils');
const { CLI_OPTIONS: { CLI_CONFIG_OPTION} } = require('../../constants');

const cliParameters = [
    '-c', 'C1-C0-A-R0-A-R0-R0-C1-A',
    '-i', './output.txt',
    '-o', './input.txt'
];
const configValue = getCliOptionValue(CLI_CONFIG_OPTION, cliParameters);
const configLength = configValue.split('-').length;

describe('Function createTransformStreamCollection', () => {
    it('should create collection of Transform instances', () => {
        const transformCollection = createTransformStreamCollection(cliParameters);
        transformCollection.forEach(el => {
            expect(el).toBeInstanceOf(Transform);
        });
    });

    it('should create collection with length according config in cli', () => {
        const transformCollection = createTransformStreamCollection(cliParameters);
        expect(transformCollection).toHaveLength(configLength);
    });
});
