import { shuffleString } from "./helpers";
import { generatePasswordFromPattern } from "./passwordGenerator";
import { unleet } from "@cityssm/unleet";
import * as cussWordsObject from "cuss/index.json";


/*
 * Generator Options
 */


export interface GenerateOptions {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  doShufflePattern?: boolean;
  retries?: number;
};


export const defaultGenerateOptions: GenerateOptions = {
  minLength: 8,
  maxLength: 50,
  pattern: "wCnn",
  doShufflePattern: false,
  retries: 20
};


/*
 * Cuss Word Checker
 */


const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
  return cussWordsObject[cussword] > 0;
});


const hasCussWord = (potentialPassword: string) => {

  const potentialPasswordLowerCase = potentialPassword.toLowerCase();

  const potentialPasswordLowerCaseList = unleet(potentialPassword);

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


/*
 * Password Generator
 */


export const generatePassword = (userGenerateOptions?: GenerateOptions): string | null => {

  const generateOptions = Object.assign({}, defaultGenerateOptions, userGenerateOptions);

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
      !hasCussWord(potentialPassword)) {

      return potentialPassword;
    }

    retries -= 1;
  }

  return null;
};
