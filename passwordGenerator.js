"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePasswordFromPattern = void 0;
const randomWords = require("random-words");
const helpers_1 = require("./helpers");
const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "$", "%", "*", "-", "_", "+", "=", "?"];
const passwordPatternPieces = {
    w: () => { return randomWords(); },
    W: () => { return randomWords().toUpperCase(); },
    C: () => { return helpers_1.toProperCase(randomWords()); },
    x: () => { return helpers_1.randomItem(letters); },
    X: () => { return helpers_1.randomItem(letters).toUpperCase(); },
    n: () => { return helpers_1.randomInt(9).toString(); },
    s: () => { return helpers_1.randomItem(symbols); }
};
exports.generatePasswordFromPattern = (passwordPattern) => {
    let potentialPassword = "";
    for (const patternCharacter of passwordPattern) {
        if (passwordPatternPieces[patternCharacter]) {
            potentialPassword += passwordPatternPieces[patternCharacter]();
        }
    }
    return potentialPassword;
};
