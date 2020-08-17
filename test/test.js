"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
let testPassword = simplePasswordGenerator.generatePassword();
describe("simplePasswordGenerator", function () {
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
    const options = {
        pattern: "xxxXXXnnns",
        doShufflePattern: true
    };
    testPassword = simplePasswordGenerator.generatePassword(options);
    describe("#generatePassword({ pattern: \"xxxXXXnnns\", doShufflePattern: true }) = \"" + testPassword + "\"", () => {
        it("Length should equal 10", () => {
            assert.ok(testPassword.length === 10);
        });
        it("Contains three capital letters", () => {
            assert.match(testPassword, /.*[A-Z].*[A-Z].*[A-Z].*/);
        });
        it("Contains three lowercase letters", () => {
            assert.match(testPassword, /.*[a-z].*[a-z].*[a-z].*/);
        });
        it("New password contains with three numbers", () => {
            assert.match(testPassword, /.*[0-9].*[0-9].*[0-9].*/);
        });
    });
});
