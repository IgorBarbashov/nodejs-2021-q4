const { Readable, Writable } = require('stream');
const stream = require('stream/promises');
const { createPipeline } = require('../../streams');

describe('Function createPipeline', () => {
    describe('in success case', () => {
        const cliParameters = [
            '-c', 'C1-C0-A-R0-A-R0-R0-C1-A',
            '-i', './input.txt',
            '-o', './output.txt'
        ];

        const pipelineProps = {};

        const spyPipeline = jest
            .spyOn(stream, 'pipeline')
            .mockImplementation((...props) => {
                pipelineProps.pipelineReadable = props[0];
                pipelineProps.pipelineWritable = props.slice(-1)[0];
                pipelineProps.pipelineLength = props.slice(1, -1).length;
            });

        createPipeline(cliParameters, stream.pipeline);

        it('should call pipeline method of Stream class once', () => {
            expect(spyPipeline).toHaveBeenCalledTimes(1);
        });

        it('should put as first element of pipeline instance of Readable', () => {
            expect(pipelineProps.pipelineReadable).toBeInstanceOf(Readable);
        });

        it('should put as last element of pipeline instance of Writable', () => {
            expect(pipelineProps.pipelineWritable).toBeInstanceOf(Writable);
        });

        it('should put to pipeline tha same count of Transform streams as in config', () => {
            expect(pipelineProps.pipelineLength).toBe(cliParameters[1].split('-').length);
        });
    });
});
