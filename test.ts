import { generatePassword, GenerateOptions } from "./index";

//

console.log("Default Options");
console.log(generatePassword());
console.log(generatePassword());
console.log(generatePassword());
console.log(generatePassword());
console.log("\n");

//

const optionsA: GenerateOptions = {
  minLength: 15,
  pattern: "wnWnx"
};

console.log(optionsA);
console.log(generatePassword(optionsA));
console.log(generatePassword(optionsA));
console.log(generatePassword(optionsA));
console.log(generatePassword(optionsA));
