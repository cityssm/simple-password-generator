"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProperCase = exports.shuffleString = exports.randomItem = exports.randomInt = void 0;
exports.randomInt = (maximum) => {
    const minimum = 0;
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
};
exports.randomItem = (array) => {
    return array[exports.randomInt(array.length - 1)];
};
exports.shuffleString = (sourceString) => {
    const stringArray = sourceString.split("");
    for (let indexA = stringArray.length - 1; indexA > 0; indexA--) {
        const indexB = Math.floor(Math.random() * (indexA + 1));
        const stringCharacter = stringArray[indexA];
        stringArray[indexA] = stringArray[indexB];
        stringArray[indexB] = stringCharacter;
    }
    return stringArray.join("");
};
exports.toProperCase = (lowercaseString) => {
    return lowercaseString.charAt(0).toUpperCase() +
        (lowercaseString.length > 1 ? lowercaseString.substring(1) : "");
};
