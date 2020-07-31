import { unleet } from "@cityssm/unleet";
import * as randomWords from "random-words";
import * as cussWordsObject from "cuss/index.json";


// inspired by
// https://github.com/sindresorhus/random-int
const randomInt = (minimum: number, maximum?: number) => {
  if (maximum === undefined) {
    maximum = minimum;
    minimum = 0;
  }

  return Math.floor(
    (Math.random() * (maximum - minimum + 1)) + minimum
  );
};


// inspired by
// https://github.com/sindresorhus/random-item/
const randomItem = (array: string[]) => {
  return array[randomInt(array.length - 1)];
};


const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
  return cussWordsObject[cussword] > 0;
});

const letters = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const symbols = ["!", "@", "$", "%", "*", "-", "?"];

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

const hasBadWord = (potentialPassword: string) => {

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

const generatePasswordRecurse = (generateOptions: GenerateOptions, retries: number): string | null => {

  if (retries < 0) {
    return null;
  }

  let potentialPassword = "";

  for (const patternCharacter of generateOptions.pattern) {

    let passwordPiece = "";

    switch (patternCharacter) {

      // Words

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

      // Letters

      case "x":

        passwordPiece = randomItem(letters);
        break;

      case "X":

        passwordPiece = randomItem(letters).toUpperCase();
        break;

      // Numbers

      case "n":

        passwordPiece = randomInt(9).toString();
        break;

      // Symbols

      case "s":

        passwordPiece = randomItem(symbols);
        break;

      default:

        console.warn("Unrecognized pattern character: " + patternCharacter);
        break;

    }

    potentialPassword += passwordPiece;
  }

  if (potentialPassword.length < generateOptions.minLength || potentialPassword.length > generateOptions.maxLength) {
    return generatePasswordRecurse(generateOptions, retries - 1);
  }

  if (hasBadWord(potentialPassword)) {
    return generatePasswordRecurse(generateOptions, retries - 1);
  }

  return potentialPassword;
};

export const generatePassword = (userGenerateOptions?: GenerateOptions): string | null => {

  const generateOptions = Object.assign({}, defaultGenerateOptions, userGenerateOptions);

  if (generateOptions.doShufflePattern) {

    const patternArray = generateOptions.pattern.split("");

    for (let indexA = patternArray.length - 1; indexA > 0; indexA--) {

      const indexB = Math.floor(Math.random() * (indexA + 1));
      const patternCharacter = patternArray[indexA];
      patternArray[indexA] = patternArray[indexB];
      patternArray[indexB] = patternCharacter;
    }

    generateOptions.pattern = patternArray.join("");
  }

  return generatePasswordRecurse(generateOptions, generateOptions.retries);

};
