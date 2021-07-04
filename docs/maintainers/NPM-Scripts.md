# NPM Scripts

## Introduction

Here's a list of all of the supported `npm` targets.

- [Introduction](#introduction)
- [npm run build](#npm-run-build)
- [npm run lint](#npm-run-lint)
- [npm run test](#npm-run-test)
- [npm run cover](#npm-run-cover)
- [npm run clean](#npm-run-clean)

## npm run build

Use `npm run build` to compile the Typescript into plain Javascript.

1. calls [`npm run clean`](#npm-run-clean) to remove any previously-compiled code
1. calls [`npm run lint`](#npm-run-lint) to check for stylistic errors
1. runs `tsc` to compile the contents of the `src/` folder.

The compiled code is placed into the `lib/` folder.

`npm run build` does not compile the unit test code.

## npm run lint

Use `npm run lint` to check for stylistic errors. All warnings are treated as errors.

## npm run test

Use `npm run test` to run the unit tests.

1. calls [`npm run build`](#npm-run-build) to make sure that your code is ready to be tested.
2. runs `mocha` (using `ts-node` as the code loader) to run all the `*.spec.ts` files in the `src/` folder.

The compiled unit test `*.spec.ts` files are never written into `lib/`.

## npm run cover

Use `npm run cover` to run the unit tests and see code coverage metrics.

Metrics are written to the terminal, and are also published as HTML into the `coverage/` folder.

## npm run clean

Use `npm run clean` to delete all of the compiled code.

