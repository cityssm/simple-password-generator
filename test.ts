import { generate, GenerateOptions } from "./index";

//

console.log("Default Options");
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
console.log("\n");

//

const optionsA: GenerateOptions = {
  minLength: 15,
  maxLength: 20,
  pattern: "wWw"
};

console.log(optionsA);
console.log(generate(optionsA));
console.log(generate(optionsA));
console.log(generate(optionsA));
console.log(generate(optionsA));
