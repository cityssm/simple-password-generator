"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.defaultGenerateOptions = void 0;
const unleet_1 = require("@cityssm/unleet");
const randomWords = require("random-words");
const cussWordsObject = require("cuss/index.json");
const randomInt = (minimum, maximum) => {
    if (maximum === undefined) {
        maximum = minimum;
        minimum = 0;
    }
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
};
const randomItem = (array) => {
    return array[randomInt(array.length - 1)];
};
const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
    return cussWordsObject[cussword] > 0;
});
const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "$", "%", "*", "-", "?"];
;
exports.defaultGenerateOptions = {
    minLength: 8,
    maxLength: 50,
    pattern: "wCnn",
    doShufflePattern: false,
    retries: 20
};
const hasBadWord = (potentialPassword) => {
    const potentialPasswordLowerCase = potentialPassword.toLowerCase();
    const potentialPasswordLowerCaseList = unleet_1.unleet(potentialPassword);
    if (!potentialPasswordLowerCaseList.includes(potentialPasswordLowerCase)) {
        potentialPasswordLowerCaseList.push(potentialPasswordLowerCase);
    }
    for (const potentialPasswordToCheck of potentialPasswordLowerCaseList) {
        for (const cussWord of cussWords) {
            if (potentialPasswordToCheck.includes(cussWord)) {
                return true;
            }
        }
    }
    return false;
};
const generatePasswordRecurse = (generateOptions, retries) => {
    if (retries < 0) {
        return null;
    }
    let potentialPassword = "";
    for (const patternCharacter of generateOptions.pattern) {
        let passwordPiece = "";
        switch (patternCharacter) {
            case "w":
                passwordPiece = randomWords();
                break;
            case "W":
                passwordPiece = randomWords().toUpperCase();
                break;
            case "C":
                passwordPiece = randomWords();
                passwordPiece = passwordPiece.charAt(0).toUpperCase() +
                    (passwordPiece.length > 1 ? passwordPiece.substring(1) : "");
                break;
            case "x":
                passwordPiece = randomItem(letters);
                break;
            case "X":
                passwordPiece = randomItem(letters).toUpperCase();
                break;
            case "n":
                passwordPiece = randomInt(9).toString();
                break;
            case "s":
                passwordPiece = randomItem(symbols);
                break;
            default:
                console.warn("Unrecognized pattern character: " + patternCharacter);
                break;
        }
        potentialPassword += passwordPiece;
    }
    if (potentialPassword.length < generateOptions.minLength || potentialPassword.length > generateOptions.maxLength) {
        return generatePasswordRecurse(generateOptions, retries - 1);
    }
    if (hasBadWord(potentialPassword)) {
        return generatePasswordRecurse(generateOptions, retries - 1);
    }
    return potentialPassword;
};
exports.generatePassword = (userGenerateOptions) => {
    const generateOptions = Object.assign({}, exports.defaultGenerateOptions, userGenerateOptions);
    if (generateOptions.doShufflePattern) {
        const patternArray = generateOptions.pattern.split("");
        for (let indexA = patternArray.length - 1; indexA > 0; indexA--) {
            const indexB = Math.floor(Math.random() * (indexA + 1));
            const patternCharacter = patternArray[indexA];
            patternArray[indexA] = patternArray[indexB];
            patternArray[indexB] = patternCharacter;
        }
        generateOptions.pattern = patternArray.join("");
    }
    return generatePasswordRecurse(generateOptions, generateOptions.retries);
};
