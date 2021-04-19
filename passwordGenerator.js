import { getRandomWord } from "@cityssm/random-words";
import { randomInt, randomItem, toProperCase } from "./helpers.js";
const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["!", "@", "$", "%", "*", "-", "_", "+", "=", "?"];
const passwordPatternPieces = {
    w: () => { return getRandomWord(); },
    W: () => { return getRandomWord().toUpperCase(); },
    C: () => { return toProperCase(getRandomWord()); },
    x: () => { return randomItem(letters); },
    X: () => { return randomItem(letters).toUpperCase(); },
    n: () => { return randomInt(9).toString(); },
    s: () => { return randomItem(symbols); }
};
export const generatePasswordFromPattern = (passwordPattern) => {
    let potentialPassword = "";
    for (const patternCharacter of passwordPattern) {
        if (passwordPatternPieces[patternCharacter]) {
            potentialPassword += passwordPatternPieces[patternCharacter]();
        }
    }
    return potentialPassword;
};
