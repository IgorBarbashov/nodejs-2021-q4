const { validateCliOptions } = require('./validation/cliOptions');
const { validateCliConfigValue } = require('./validation/cliConfigValue');
const { validateFilePath } = require('./validation/cliFilesPaths');
const { cliOptions: { cliInputOption, cliOutputOption } } = require('./constants/cliParameters');
const { createInputStream } = require('./streams/inputStream');
const { createOutputStream } = require('./streams/outputStream');

const cliParameters = process.argv.slice(2);

const isCliOptionsValid = validateCliOptions(cliParameters);
const isCliConfigValueValid = validateCliConfigValue(cliParameters);
const isCliInputFilePathValid = validateFilePath(cliInputOption, cliParameters);
const isCliOutputFilePathValid = validateFilePath(cliOutputOption, cliParameters);

const inputStream = createInputStream(cliParameters);
const outputStream = createOutputStream(cliParameters);
