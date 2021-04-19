import { zxcvbn } from "zxcvbn-typescript";
import { shuffleString } from "./helpers.js";
import { generatePasswordFromPattern } from "./passwordGenerator.js";
import { unleet } from "@cityssm/unleet";
import * as cussWords from "badwords/array.js";
export const defaultGenerateOptions = {
    minLength: 8,
    maxLength: 50,
    pattern: "wCWsnn",
    doShufflePattern: false,
    minScore: 2,
    retries: 20
};
const _hasCussWord = (unleetedString) => {
    for (const cussWord of cussWords.default) {
        if (unleetedString.includes(cussWord)) {
            return true;
        }
    }
    return false;
};
export const hasCussWord = (potentialPassword) => {
    const potentialPasswordLowerCase = potentialPassword.toLowerCase();
    const potentialPasswordLowerCaseList = unleet(potentialPassword);
    if (!potentialPasswordLowerCaseList.includes(potentialPasswordLowerCase)) {
        potentialPasswordLowerCaseList.push(potentialPasswordLowerCase);
    }
    for (const potentialPasswordToCheck of potentialPasswordLowerCaseList) {
        if (_hasCussWord(potentialPasswordToCheck)) {
            return true;
        }
    }
    return false;
};
export const generatePassword = (userGenerateOptions) => {
    const generateOptions = Object.assign({}, defaultGenerateOptions, userGenerateOptions);
    generateOptions.minScore = Math.min(generateOptions.minScore, 4);
    let passwordPattern = generateOptions.pattern;
    if (generateOptions.doShufflePattern) {
        passwordPattern = shuffleString(passwordPattern);
    }
    let retries = generateOptions.retries;
    while (retries > 0) {
        const potentialPassword = generatePasswordFromPattern(passwordPattern);
        if (potentialPassword.length >= generateOptions.minLength &&
            potentialPassword.length <= generateOptions.maxLength &&
            zxcvbn(potentialPassword).score >= generateOptions.minScore &&
            !hasCussWord(potentialPassword)) {
            return potentialPassword;
        }
        retries -= 1;
    }
    return null;
};
