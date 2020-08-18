"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const simplePasswordGenerator = require("../index");
describe("simplePasswordGenerator", function () {
    const optionsShuffle = {
        pattern: "xxxXXXnnns",
        doShufflePattern: true
    };
    const testPasswordShuffle = simplePasswordGenerator.generatePassword(optionsShuffle);
    describe("#generatePassword(" + JSON.stringify(optionsShuffle) + ") = \"" + testPasswordShuffle + "\"", () => {
        it("Length should equal 10", () => {
            assert.ok(testPasswordShuffle.length === 10);
        });
        it("Contains three capital letters", () => {
            assert.match(testPasswordShuffle, /.*[A-Z].*[A-Z].*[A-Z].*/);
        });
        it("Contains three lowercase letters", () => {
            assert.match(testPasswordShuffle, /.*[a-z].*[a-z].*[a-z].*/);
        });
        it("Contains three numbers", () => {
            assert.match(testPasswordShuffle, /.*[0-9].*[0-9].*[0-9].*/);
        });
    });
});
