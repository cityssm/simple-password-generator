import * as randomItem from "random-item";
import * as randomInt from "random-int";

import * as randomWords from "random-words";

import * as cussWordsObject from "cuss";

const cussWords = Object.keys(cussWordsObject).filter((cussword) => {
  return cussWordsObject[cussword] > 0;
});

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const symbols = ["!", "@", "%"];

export interface GenerateOptions {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export const defaultGenerateOptions: GenerateOptions = {
  minLength: 8,
  maxLength: 50,
  pattern: "wCnn"
};

export const generate = (userGenerateOptions?: GenerateOptions) => {

  const generateOptions = Object.assign({}, defaultGenerateOptions, userGenerateOptions);

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

        console.warn("Unrecoginzed pattern character: " + patternCharacter);
        break;

    }

    potentialPassword += passwordPiece;
  }

  if (potentialPassword.length < generateOptions.minLength || potentialPassword.length > generateOptions.maxLength) {
    return generate(userGenerateOptions);
  }

  const potentialPasswordLowerCase = potentialPassword.toLowerCase();

  for (const cussWord of cussWords) {
    if (potentialPasswordLowerCase.includes(cussWord)) {
      return generate(userGenerateOptions);
    }
  }

  return potentialPassword;
};
