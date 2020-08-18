import * as assert from "assert";
import * as simplePasswordGenerator from "../index";


// Impossible test


describe("simplePasswordGenerator", function() {

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
