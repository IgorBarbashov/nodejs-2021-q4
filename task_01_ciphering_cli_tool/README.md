# Ciphering CLI tool
CLI tool that will encode and decode a text by 3 substitution ciphers

[Task page](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/ciphering-cli-tool.md)

[Branch and folder name: task_01_ciphering_cli_tool](https://github.com/IgorBarbashov/nodejs-2021-q4/tree/task_01_ciphering_cli_tool/task_01_ciphering_cli_tool)

## How to install
- Install Node.js
- Clone this repository
- Go to project's folder

## How to use
Command string: `node index options`

CLI tool can accept 3 options (short alias and full name):

- `-c, --config`: config for ciphers Config is a string with pattern **{XY(-)}n**, where:

  **X** is a cipher mark:
  - **C** is for Caesar cipher (with shift 1)
  - **A** is for Atbash cipher
  - **R** is for ROT-8 cipher

  **Y** is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - **1** is for encoding
  - **0** is for decoding

- `-i, --input`: a path to input file
- `-o, --output`: a path to output file

## How to run Tests

## Developer environment

- Node v16.13.0