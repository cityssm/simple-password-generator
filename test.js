"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log("Default Options");
console.log(index_1.generate());
console.log(index_1.generate());
console.log(index_1.generate());
console.log(index_1.generate());
console.log("\n");
const optionsA = {
    minLength: 15,
    maxLength: 20,
    pattern: "wWw"
};
console.log(optionsA);
console.log(index_1.generate(optionsA));
console.log(index_1.generate(optionsA));
console.log(index_1.generate(optionsA));
console.log(index_1.generate(optionsA));
