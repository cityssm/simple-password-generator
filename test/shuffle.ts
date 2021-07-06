import * as assert from "assert";
import * as simplePasswordGenerator from "../index.js";

import type * as types from "../types";


// Shuffle test


describe("simplePasswordGenerator", function() {

  const optionsShuffle: types.OptionalGenerateOptions = {
    pattern: "xxxXXXnnns",
    doShufflePattern: true
  };

  const testPasswordShuffle = simplePasswordGenerator.generatePassword(optionsShuffle);

  describe("#generatePassword(" + JSON.stringify(optionsShuffle) + ") = \"" + testPasswordShuffle + "\"", () => {

    it("Length should equal 10", () => {
      assert.ok(testPasswordShuffle.length === 10);
    });

    it("Contains three capital letters", () => {
      assert.match(testPasswordShuffle, /(?:.*[A-Z]){3}.*/);
    });

    it("Contains three lowercase letters", () => {
      assert.match(testPasswordShuffle, /(?:.*[a-z]){3}.*/);
    });

    it("Contains three numbers", () => {
      assert.match(testPasswordShuffle, /(?:.*\d){3}.*/);
    });
  });
});
