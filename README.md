# simple-password-generator

[![npm](https://badgen.net/npm/v/@cityssm/simple-password-generator)](https://www.npmjs.com/package/@cityssm/simple-password-generator)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/af55a93d353f4881ad2fdee1c582e495)](https://app.codacy.com/gh/cityssm/simple-password-generator?utm_source=github.com&utm_medium=referral&utm_content=cityssm/simple-password-generator&utm_campaign=Badge_Grade_Dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/f274b62fe5e1f778ddd9/maintainability)](https://codeclimate.com/github/cityssm/simple-password-generator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f274b62fe5e1f778ddd9/test_coverage)](https://codeclimate.com/github/cityssm/simple-password-generator/test_coverage)
[![Build Status](https://travis-ci.com/cityssm/simple-password-generator.svg?branch=master)](https://travis-ci.com/cityssm/simple-password-generator)

Makes generating simple or complex, _appropriate_ passwords a breeze.

-   Passwords can have a minimum or maximum length.

-   Passwords can include words, letters, numbers, and symbols.

-   Passwords are translated with [unleet](https://github.com/cityssm/unleet),
    and scanned using [cuss](https://github.com/words/cuss) to
    make sure they are appropriate.

## Installation

```bash
npm install @cityssm/simple-password-generator
```

## Usage

```javascript
import { generatePassword } from "@cityssm/simple-password-generator";

generatePassword();
= "chickenPark84"

generatePassword({ minLength: 15, pattern: "wnWnX" });
= "curious6COMPOSITION7B"

generatePassword({ pattern: 'xxxXXXnnns', doShufflePattern: true });
= "c0O4WG@od9"
```

### Options

| Option           | Description                                                                                            | Default  |
| ---------------- | ------------------------------------------------------------------------------------------------------ | -------- |
| minLength        | The minimum password length.                                                                           | `8`      |
| maxLength        | The maximum password length.                                                                           | `50`     |
| pattern          | The format the password should use.                                                                    | `"wCnn"` |
| doShufflePattern | Whether the pattern should be ordered randomly or not.                                                 | `false`  |
| retries          | The number of times the generator should try to generate a password before failing and returning null. | `20`     |

Note that if your `pattern` cannot generate a password
within your set `minLength` and `maxLength`,
the `generatePassword()` function may return a `null` value.

### Pattern Options

| Pattern Character | Description       | Example |
| ----------------- | ----------------- | ------- |
| w                 | Lower case word   | word    |
| W                 | Upper case word   | WORD    |
| C                 | Capitalized word  | Word    |
| x                 | Lower case letter | a       |
| X                 | Upper case letter | A       |
| n                 | Number            | 9       |
| s                 | Symbol            | @       |
