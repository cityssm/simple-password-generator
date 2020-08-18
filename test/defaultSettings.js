"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
describe("simplePasswordGenerator", function () {
    for (let testCount = 0; testCount < 20; testCount += 1) {
        const testPassword = simplePasswordGenerator.generatePassword();
        describe("#generatePassword() = \"" + testPassword + "\"", () => {
            it("Length greater than or equal to the minLength = " +
                simplePasswordGenerator.defaultGenerateOptions.minLength.toString(), () => {
                assert.ok(testPassword.length >= simplePasswordGenerator.defaultGenerateOptions.minLength);
            });
            it("Length less than or equal to the maxLength = " +
                simplePasswordGenerator.defaultGenerateOptions.maxLength.toString(), () => {
                assert.ok(testPassword.length <= simplePasswordGenerator.defaultGenerateOptions.maxLength);
            });
            it("Contains zero cuss words", () => {
                assert.ok(!simplePasswordGenerator.hasCussWord(testPassword));
            });
        });
    }
});