"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log("Default Options");
console.log(index_1.generatePassword());
console.log(index_1.generatePassword());
console.log(index_1.generatePassword());
console.log(index_1.generatePassword());
console.log("\n");
const optionsA = {
    minLength: 15,
    pattern: "wnWnx"
};
console.log(optionsA);
console.log(index_1.generatePassword(optionsA));
console.log(index_1.generatePassword(optionsA));
console.log(index_1.generatePassword(optionsA));
console.log(index_1.generatePassword(optionsA));
console.log("\n");
const optionsB = {
    pattern: "xxxXXXnnns",
    doShufflePattern: true
};
console.log(optionsB);
console.log(index_1.generatePassword(optionsB));
console.log(index_1.generatePassword(optionsB));
console.log(index_1.generatePassword(optionsB));
console.log(index_1.generatePassword(optionsB));
