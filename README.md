# simple-password-generator

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
= "locatePrepare13"

generatePassword();
= "chickenPark84"

generatePassword({ minLength: 15, pattern: "wnWnX" });
= "curious6COMPOSITION7X"
```

### Options

| Option    | Description                                                                                            | Default  |
| --------- | ------------------------------------------------------------------------------------------------------ | -------- |
| minLength | The minimum password length.                                                                           | `8`      |
| maxLength | The maximum password length.                                                                           | `50`     |
| pattern   | The format the password should use.                                                                    | `"wCnn"` |
| retries   | The number of times the generator should try to generate a password before failing and returning null. | `20`     |

Note that if your `minLength` and `maxLength` are too close together,
the `generatePassword()` function may return a null value.

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
