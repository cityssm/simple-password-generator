"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.defaultGenerateOptions = void 0;
const helpers_1 = require("./helpers");
const passwordGenerator_1 = require("./passwordGenerator");
const unleet_1 = require("@cityssm/unleet");
const cussWordsObject = require("cuss/index.json");
;
exports.defaultGenerateOptions = {
    minLength: 8,
    maxLength: 50,
    pattern: "wCnn",
    doShufflePattern: false,
    retries: 20
};
const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
    return cussWordsObject[cussword] > 0;
});
const hasCussWord = (potentialPassword) => {
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
    const potentialPassword = passwordGenerator_1.generatePasswordFromPattern(generateOptions.pattern);
    if (potentialPassword.length < generateOptions.minLength || potentialPassword.length > generateOptions.maxLength) {
        return generatePasswordRecurse(generateOptions, retries - 1);
    }
    if (hasCussWord(potentialPassword)) {
        return generatePasswordRecurse(generateOptions, retries - 1);
    }
    return potentialPassword;
};
exports.generatePassword = (userGenerateOptions) => {
    const generateOptions = Object.assign({}, exports.defaultGenerateOptions, userGenerateOptions);
    if (generateOptions.doShufflePattern) {
        generateOptions.pattern = helpers_1.shuffleString(generateOptions.pattern);
    }
    return generatePasswordRecurse(generateOptions, generateOptions.retries);
};
