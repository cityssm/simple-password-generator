"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.defaultGenerateOptions = void 0;
const randomItem = require("random-item");
const randomInt = require("random-int");
const randomWords = require("random-words");
const cussWordsObject = require("cuss");
const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
    return cussWordsObject[cussword] > 0;
});
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "%"];
;
exports.defaultGenerateOptions = {
    minLength: 8,
    maxLength: 50,
    pattern: "wCnn"
};
exports.generate = (userGenerateOptions) => {
    const generateOptions = Object.assign({}, exports.defaultGenerateOptions, userGenerateOptions);
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
                console.warn("Unrecoginzed pattern character: " + patternCharacter);
                break;
        }
        potentialPassword += passwordPiece;
    }
    if (potentialPassword.length < generateOptions.minLength || potentialPassword.length > generateOptions.maxLength) {
        return exports.generate(userGenerateOptions);
    }
    const potentialPasswordLowerCase = potentialPassword.toLowerCase();
    for (const cussWord of cussWords) {
        if (potentialPasswordLowerCase.includes(cussWord)) {
            return exports.generate(userGenerateOptions);
        }
    }
    return potentialPassword;
};
