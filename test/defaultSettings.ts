import * as assert from "assert";
import * as zxcvbn from "zxcvbn";
import * as simplePasswordGenerator from "../index";


// Default test
// Run 20 times to ensure some passwords not meeting default criteria are discarded


describe("simplePasswordGenerator", () => {

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

      it("Generates a password with a zxcvbn rating of " + simplePasswordGenerator.defaultGenerateOptions.minScore.toString() + " or better", () => {
        assert.ok(zxcvbn(testPassword).score >= simplePasswordGenerator.defaultGenerateOptions.minScore);
      });
    });
  }
});
