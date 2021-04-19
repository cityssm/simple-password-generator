import * as assert from "assert";
import * as simplePasswordGenerator from "../index.js";


// Cuss words


describe("hasCussWord", function() {

  describe("#hasCussWord('happyThoughts')", () => {

    it("Cuss word is caught", () => {
      assert.strictEqual(simplePasswordGenerator.hasCussWord("happyThoughts"), false);
    });
  });

  describe("#hasCussWord('xxxWords')", () => {

    it("Cuss word is caught", () => {
      assert.strictEqual(simplePasswordGenerator.hasCussWord("xxxWords"), true);
    });
  });
});
