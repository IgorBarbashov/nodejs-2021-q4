const CLI_CONFIG_OPTION = {
    options: [ '-c', '--config' ],
    required: true,
    valueSettings: { 'C0': -1, 'C1': 1, 'A': 13, 'R0': -8, 'R1': 8 }
};

const CLI_INPUT_OPTION = {
    options: [ '-i', '--input' ],
    required: false
};

const CLI_OUTPUT_OPTION = {
    options: [ '-o', '--output' ],
    required: false
};

const CLI_OPTIONS = {
    CLI_CONFIG_OPTION,
    CLI_INPUT_OPTION,
    CLI_OUTPUT_OPTION
};

module.exports = {
    CLI_OPTIONS
};
