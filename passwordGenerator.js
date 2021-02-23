"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePasswordFromPattern = void 0;
const random_words_1 = require("@cityssm/random-words");
const helpers_1 = require("./helpers");
const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "$", "%", "*", "-", "_", "+", "=", "?"];
const passwordPatternPieces = {
    w: () => { return random_words_1.getRandomWord(); },
    W: () => { return random_words_1.getRandomWord().toUpperCase(); },
    C: () => { return helpers_1.toProperCase(random_words_1.getRandomWord()); },
    x: () => { return helpers_1.randomItem(letters); },
    X: () => { return helpers_1.randomItem(letters).toUpperCase(); },
    n: () => { return helpers_1.randomInt(9).toString(); },
    s: () => { return helpers_1.randomItem(symbols); }
};
const generatePasswordFromPattern = (passwordPattern) => {
    let potentialPassword = "";
    for (const patternCharacter of passwordPattern) {
        if (passwordPatternPieces[patternCharacter]) {
            potentialPassword += passwordPatternPieces[patternCharacter]();
        }
    }
    return potentialPassword;
};
exports.generatePasswordFromPattern = generatePasswordFromPattern;
