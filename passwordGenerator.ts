import { getRandomWord } from "@cityssm/random-words";
import { randomInt, randomItem, toProperCase } from "./helpers.js";


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


const passwordPatternPieces: { [patternCharacter: string]: () => string } = {

  // Words
  w: () => { return getRandomWord(); },
  W: () => { return getRandomWord().toUpperCase(); },
  C: () => { return toProperCase(getRandomWord()); },

  // Letters
  x: () => { return randomItem(letters); },
  X: () => { return randomItem(letters).toUpperCase(); },

  // Numbers
  n: () => { return randomInt(9).toString(); },

  // Symbols
  s: () => { return randomItem(symbols); }
};


export const generatePasswordFromPattern = (passwordPattern: string): string => {

  let potentialPassword = "";

  for (const patternCharacter of passwordPattern) {

    if (passwordPatternPieces[patternCharacter]) {
      potentialPassword += passwordPatternPieces[patternCharacter]();
    }
  }

  return potentialPassword;
};
