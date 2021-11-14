const cliConfigOption = {
    options: [ '-c', '--config' ],
    required: true,
    valueSettings: { 'C0': 1, 'C1': -1, 'A': 26, 'R0': 8, 'R1': -8 }
};

const cliInputOption = {
    options: [ '-i', '--input' ],
    required: false
};

const cliOutputOption = {
    options: [ '-o', '--output' ],
    required: false
};

const cliOptions = {
    cliConfigOption,
    cliInputOption,
    cliOutputOption
};

module.exports = {
    cliOptions
};
