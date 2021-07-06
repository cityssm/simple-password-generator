// Inspired by
// https://github.com/sindresorhus/random-int
export const randomInt = (maximum: number): number => {

  const minimum = 0;

  return Math.floor(
    (Math.random() * (maximum - minimum + 1)) + minimum
  );
};


// Inspired by
// https://github.com/sindresorhus/random-item/
export const randomItem = (array: string[]): string => {
  return array[randomInt(array.length - 1)];
};


// Inspired by
// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
export const shuffleString = (sourceString: string): string => {

  const stringArray = sourceString.split("");

  for (let indexA = stringArray.length - 1; indexA > 0; indexA--) {

    const indexB = Math.floor(Math.random() * (indexA + 1));
    const stringCharacter = stringArray[indexA];
    stringArray[indexA] = stringArray[indexB];
    stringArray[indexB] = stringCharacter;
  }

  return stringArray.join("");
};


export const toProperCase = (lowercaseString: string): string => {

  return lowercaseString.charAt(0).toUpperCase() +
    (lowercaseString.length > 1 ? lowercaseString.slice(1) : "");
};
