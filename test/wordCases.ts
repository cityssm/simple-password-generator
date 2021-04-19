import * as assert from "assert";
import * as simplePasswordGenerator from "../index.js";

import type * as types from "../types";


// Word cases test


describe("simplePasswordGenerator", function() {

  const optionsWords: types.OptionalGenerateOptions = {
    pattern: "wCW"
  };

  const testPasswordWords = simplePasswordGenerator.generatePassword(optionsWords);

  describe("#generatePassword(" + JSON.stringify(optionsWords) + ") = \"" + testPasswordWords + "\"", () => {

    it("Contains three word styles", () => {
      assert.match(testPasswordWords, /^[a-z]+[A-Z][a-z]+[A-Z]+/);
    });
  });
});
