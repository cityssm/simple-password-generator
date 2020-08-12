"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePasswordFromPattern = void 0;
const randomWords = require("random-words");
const helpers_1 = require("./helpers");
const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "$", "%", "*", "-", "_", "+", "=", "?"];
const getPasswordPiece = (patternCharacter) => {
    let passwordPiece = "";
    switch (patternCharacter) {
        case "w":
            passwordPiece = randomWords();
            break;
        case "W":
            passwordPiece = randomWords().toUpperCase();
            break;
        case "C":
            passwordPiece = helpers_1.toProperCase(randomWords());
            break;
        case "x":
            passwordPiece = helpers_1.randomItem(letters);
            break;
        case "X":
            passwordPiece = helpers_1.randomItem(letters).toUpperCase();
            break;
        case "n":
            passwordPiece = helpers_1.randomInt(9).toString();
            break;
        case "s":
            passwordPiece = helpers_1.randomItem(symbols);
            break;
        default:
            console.warn("Unrecognized pattern character: " + patternCharacter);
            break;
    }
    return passwordPiece;
};
exports.generatePasswordFromPattern = (passwordPattern) => {
    let potentialPassword = "";
    for (const patternCharacter of passwordPattern) {
        potentialPassword += getPasswordPiece(patternCharacter);
    }
    return potentialPassword;
};
