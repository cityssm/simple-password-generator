export const randomInt = (maximum) => {
    const minimum = 0;
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
};
export const randomItem = (array) => {
    return array[randomInt(array.length - 1)];
};
export const shuffleString = (sourceString) => {
    const stringArray = sourceString.split("");
    for (let indexA = stringArray.length - 1; indexA > 0; indexA--) {
        const indexB = Math.floor(Math.random() * (indexA + 1));
        const stringCharacter = stringArray[indexA];
        stringArray[indexA] = stringArray[indexB];
        stringArray[indexB] = stringCharacter;
    }
    return stringArray.join("");
};
export const toProperCase = (lowercaseString) => {
    return lowercaseString.charAt(0).toUpperCase() +
        (lowercaseString.length > 1 ? lowercaseString.substring(1) : "");
};
