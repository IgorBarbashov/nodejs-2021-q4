# Ciphering CLI tool

* [About](#about)
* [How to install](#how-to-install)
* [How to use and run tests](#how-to-use-and-run-tests)
* [Description of options](#description-of-options)
* [Usage example](#usage-example)
* [Developer environment and instruments](#developer-environment-and-instruments)

## About
CLI tool that will encode and decode a text by 3 substitution ciphers

- [Task 1 page - Ciphering CLI Tool](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/ciphering-cli-tool.md)

- [Task 2 page - Testing](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/testing.md)

## How to install
- Install Node.js 16.13.0 or higher
- Clone this repository
- Go to **task_01_ciphering_cli_tool** folder
- Install dependencies by command `npm i`

## How to use and run tests
- Command string for run tool: `node index options`
- Command string for tests:
  - run tests: `npm run test`
  - run tests in watch mode: `npm run test:watch`
  - get information about tests coverage: `npm run test:coverage`

## Description of options
CLI tool can accept 3 `options` (short alias and full name):

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

## Usage example
```bash
$ node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node index -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node index -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node index -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`

## Developer environment and instruments

- Node 16.13.0
- Npm 8.1.0
- Jest 27.3.1
- ESLint