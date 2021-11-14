const { validateCliOptions } = require('./validation/cliOptions');
const { validateCliConfigValue } = require('./validation/cliConfigValue');

const cliParameters = process.argv.slice(2);
const isCliOptionsValid = validateCliOptions(cliParameters);
const isConfigValueValid = validateCliConfigValue(cliParameters);
