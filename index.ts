import { shuffleString } from "./helpers";
import { generatePasswordFromPattern } from "./passwordGenerator";
import { unleet } from "@cityssm/unleet";
import * as cussWordsObject from "cuss/index.json";

import type * as types from "./types";

import zxcvbn = require("zxcvbn");


/*
 * Generator Options
 */


export const defaultGenerateOptions: types.GenerateOptions = {
  minLength: 8,
  maxLength: 50,
  pattern: "wCWsnn",
  doShufflePattern: false,
  minScore: 2,
  retries: 20
};


/*
 * Cuss Word Checker
 */


const cussWords: string[] = (() => {

  const cussWordsUnfiltered: string[] = Object.keys(cussWordsObject);

  const cussWords = cussWordsUnfiltered.filter((cussword, cusswordIndex) => {
    return cussword.length > 2 &&
      cussWordsObject[cussword] > 0 &&
      (cusswordIndex === 0 || !cussword.includes(cussWordsUnfiltered[cusswordIndex - 1]));
  });

  return cussWords;
})();


const _hasCussWord = (unleetedString: string) => {

  for (const cussWord of cussWords) {
    if (unleetedString.includes(cussWord)) {
      return true;
    }
  }

  return false;
};


export const hasCussWord = (potentialPassword: string) => {

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


/*
 * Password Generator
 */


export const generatePassword = (userGenerateOptions?: types.OptionalGenerateOptions): string | null => {

  const generateOptions: types.GenerateOptions =
    Object.assign({}, defaultGenerateOptions, userGenerateOptions);

  generateOptions.minScore = Math.min(generateOptions.minScore, 4);

  let passwordPattern = generateOptions.pattern;

  // Shuffle the pattern if necessary
  if (generateOptions.doShufflePattern) {
    passwordPattern = shuffleString(passwordPattern);
  }

  let retries = generateOptions.retries;

  // Loop through retries
  while (retries > 0) {

    const potentialPassword = generatePasswordFromPattern(passwordPattern);

    // Check length, check for potential cuss words
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
