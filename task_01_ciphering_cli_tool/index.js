const { cliOptions } = require('./constants/cliParameters');
const { validateCliOptions } = require('./validation/cliParameters');

const cliParameters = process.argv.slice(2);
const isCliOptionsValid = validateCliOptions(cliOptions, cliParameters);
