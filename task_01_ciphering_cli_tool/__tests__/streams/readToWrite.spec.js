const { pipeline } = require('stream/promises');
const { CustomInputStream, CustomOutputStream } = require('../../streams');
const { errorHandler } = require('../../errors');

describe('Method pipeline', () => {
    it('should hand over data from Readable to Writable', async () => {
        try{
            const customInputStream = new CustomInputStream('input.txt');
            const spyCustomInputStream = jest.spyOn(customInputStream, 'read');

            const customOutputStream = new CustomOutputStream('output.txt');
            const spyCustomOutputStream = jest.spyOn(customOutputStream, 'write');

            await pipeline(customInputStream, customOutputStream);

            expect(spyCustomInputStream).toHaveBeenCalled();
            expect(spyCustomOutputStream).toHaveBeenCalled();
        } catch(error) {
            errorHandler(error);
        }
    }, 5000);
});
