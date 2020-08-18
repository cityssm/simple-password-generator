"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
describe("simplePasswordGenerator", function () {
    const optionsWords = {
        pattern: "wCW"
    };
    const testPasswordWords = simplePasswordGenerator.generatePassword(optionsWords);
    describe("#generatePassword(" + JSON.stringify(optionsWords) + ") = \"" + testPasswordWords + "\"", () => {
        it("Contains three word styles", () => {
            assert.match(testPasswordWords, /^[a-z]+[A-Z][a-z]+[A-Z]+/);
        });
    });
});
