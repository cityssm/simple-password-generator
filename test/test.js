"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
let testPassword = simplePasswordGenerator.generatePassword();
describe("simplePasswordGenerator", function () {
    describe("#generatePassword() = \"" + testPassword + "\"", () => {
        it("Should return a new password greater than or equal to the minLength = " +
            simplePasswordGenerator.defaultGenerateOptions.minLength.toString(), () => {
            assert.ok(testPassword.length >= simplePasswordGenerator.defaultGenerateOptions.minLength);
        });
        it("Should return a new password less than or equal to the maxLength = " +
            simplePasswordGenerator.defaultGenerateOptions.maxLength.toString(), () => {
            assert.ok(testPassword.length <= simplePasswordGenerator.defaultGenerateOptions.maxLength);
        });
        it("Should return a new password with no cuss words", () => {
            assert.ok(!simplePasswordGenerator.hasCussWord(testPassword));
        });
    });
    const options = {
        pattern: "xxxXXXnnns",
        doShufflePattern: true
    };
    testPassword = simplePasswordGenerator.generatePassword(options);
    describe("#generatePassword({ pattern: \"xxxXXXnnns\", doShufflePattern: true }) = \"" + testPassword + "\"", () => {
        it("Should return a password with three capital letters", () => {
            assert.match(testPassword, /.*[A-Z].*[A-Z].*[A-Z].*/);
        });
        it("Should return a password with three lowercase letters", () => {
            assert.match(testPassword, /.*[a-z].*[a-z].*[a-z].*/);
        });
        it("Should return a password with three numbers", () => {
            assert.match(testPassword, /.*[0-9].*[0-9].*[0-9].*/);
        });
    });
});
