const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    describe(".timeAtDawn", () => {
      it("returns its argument as a string", () => {
        // Setup
        const timeOfMorning = 5;
        const expected = "5";

        // Exercise
        const actual = Rooster.timeAtDawn(timeOfMorning);

        // Verify
        assert.equal(actual, expected);
      });
      it("throws an error if passed a number less than 0", () => {
        // Setup
        const inputNumber = -6;
        const expected = RangeError;

        // Exercise & Verify combined
        assert.throws(() => {
          Rooster.timeAtDawn(inputNumber);
        }, expected);
      });
      it("throws an error if passed a number greater than 23 ", () => {
        // Setup
        const inputNumber = 28;
        const expected = RangeError;

        // Exercise & Verify combined
        assert.throws(() => {
          Rooster.timeAtDawn(inputNumber);
        }, expected);
      });
    });
    it("returns a rooster call", () => {
      // Setup
      const expected = "cock-a-doodle-doo!";

      // Exercise
      const actual = Rooster.announceDawn();

      // Verify
      assert.equal(actual, expected);
    });
  });
});
