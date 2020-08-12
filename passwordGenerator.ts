import * as randomWords from "random-words";
import { randomInt, randomItem, toProperCase } from "./helpers";


/*
 * Password Pieces
 */


const letters = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const symbols = ["!", "@", "$", "%", "*", "-", "_", "+", "=", "?"];


/*
 * Generate Function
 */


const getPasswordPiece = (patternCharacter: string) => {

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

      passwordPiece = toProperCase(randomWords());
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

  return passwordPiece;
};


export const generatePasswordFromPattern = (passwordPattern: string) => {

  let potentialPassword = "";

  for (const patternCharacter of passwordPattern) {
    potentialPassword += getPasswordPiece(patternCharacter);
  }

  return potentialPassword;
};
