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
