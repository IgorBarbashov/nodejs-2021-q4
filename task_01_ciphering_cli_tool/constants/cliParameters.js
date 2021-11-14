const configOption = {
    options: [ '-c', '--config' ],
    required: true
};

const inputOption = {
    options: [ '-i', '--input' ],
    required: false
};

const outputOption = {
    options: [ '-o', '--output' ],
    required: false
};

const cliOptions = [
    configOption,
    inputOption,
    outputOption
];

module.exports = {
    cliOptions
};
