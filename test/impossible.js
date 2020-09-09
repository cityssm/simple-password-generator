"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
describe("simplePasswordGenerator", function () {
    const optionsImpossible = {
        pattern: "xxx",
        minLength: 10,
        maxLength: 10
    };
    const testPasswordImpossible = simplePasswordGenerator.generatePassword(optionsImpossible);
    describe("#generatePassword(" + JSON.stringify(optionsImpossible) + ") = \"" + testPasswordImpossible + "\"", () => {
        it("New password should be null", () => {
            assert.strictEqual(testPasswordImpossible, null);
        });
    });
});
