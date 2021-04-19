# simple-password-generator

[![npm](https://img.shields.io/npm/v/@cityssm/simple-password-generator)](https://www.npmjs.com/package/@cityssm/simple-password-generator) [![Codacy Badge](https://img.shields.io/codacy/grade/af55a93d353f4881ad2fdee1c582e495)](https://app.codacy.com/gh/cityssm/simple-password-generator) [![Maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/simple-password-generator)](https://codeclimate.com/github/cityssm/simple-password-generator/maintainability) [![Test Coverage](https://img.shields.io/codeclimate/coverage/cityssm/simple-password-generator)](https://codeclimate.com/github/cityssm/simple-password-generator/test_coverage) [![AppVeyor](https://img.shields.io/appveyor/build/dangowans/simple-password-generator)](https://ci.appveyor.com/project/dangowans/simple-password-generator) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/simple-password-generator)](https://app.snyk.io/org/cityssm/project/6f305273-35f2-4834-93e3-14c13a413055)

Makes generating simple or complex, _appropriate_ passwords a breeze.

-   Passwords can have a minimum or maximum length.

-   Passwords can include words, letters, numbers, and symbols.

-   Passwords are scanned with [zxcvbn-typescript](https://github.com/trichards57/zxcvbn)
    to reduce their guessability.

-   Passwords are translated with [unleet](https://github.com/cityssm/unleet),
    and scanned using [badwords](https://github.com/MauriceButler/badwords) to
    make sure they are appropriate.

## Installation

```bash
npm install @cityssm/simple-password-generator
```

## Usage

```javascript
import { generatePassword } from "@cityssm/simple-password-generator";

generatePassword();
= "carPoetDRIVING%38"

generatePassword({ minLength: 15, pattern: "wnWnX" });
= "curious6COMPOSITION7B"

generatePassword({ pattern: 'xxxXXXnnns', doShufflePattern: true });
= "c0O4WG@od9"
```

### Options

| Option           | Description                                                                                             | Default  |
| ---------------- | ------------------------------------------------------------------------------------------------------- | -------- |
| minLength        | The minimum password length.                                                                            | `8`      |
| maxLength        | The maximum password length.                                                                            | `50`     |
| pattern          | The format the password should use.                                                                     | `"wCnn"` |
| doShufflePattern | Whether the pattern should be ordered randomly or not.                                                  | `false`  |
| minScore         | The minimum allowable zxcvbn guessability score, where 0 is "too guessable" and 4 is "very unguessable" | `2`      |
| retries          | The number of times the generator should try to generate a password before failing and returning null.  | `20`     |

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
