import * as randomWords from "random-words";
import { randomInt, randomItem } from "./helpers";


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


export const generatePasswordFromPattern = (passwordPattern: string) => {

  let potentialPassword = "";

  for (const patternCharacter of passwordPattern) {

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

  return potentialPassword;
};
