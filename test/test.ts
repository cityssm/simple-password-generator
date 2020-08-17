import * as assert from "assert";
import * as simplePasswordGenerator from "../index";

//

describe("simplePasswordGenerator", function() {

  // Default test
  // Run 10 times to ensure some passwords not meeting default criteria are discarded

  for (let testCount = 0; testCount < 10; testCount += 1) {

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

  // Word cases test

  const optionsWords: simplePasswordGenerator.GenerateOptions = {
    pattern: "wCW"
  };

  const testPasswordWords = simplePasswordGenerator.generatePassword(optionsWords);

  describe("#generatePassword(" + JSON.stringify(optionsWords) + ") = \"" + testPasswordWords + "\"", () => {

    it("Contains three word styles", () => {
      assert.match(testPasswordWords, /^[a-z]+[A-Z][a-z]+[A-Z]+/);
    });
  });

  // Shuffle test

  const optionsShuffle: simplePasswordGenerator.GenerateOptions = {
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

    it("New password contains with three numbers", () => {
      assert.match(testPasswordShuffle, /.*[0-9].*[0-9].*[0-9].*/);
    });
  });

  // Impossible test

  const optionsImpossible = {
    pattern: "xxx",
    minLength: 10,
    maxLength: 10
  };

  const testPasswordImpossible = simplePasswordGenerator.generatePassword(optionsImpossible);

  describe("#generatePassword(" + JSON.stringify(optionsImpossible) + ") = \"" + testPasswordImpossible + "\"", () => {

    it("New password should be null", () => {
      assert.equal(testPasswordImpossible, null);
    });
  });
});
