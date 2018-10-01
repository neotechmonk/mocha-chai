// Based on https://www.youtube.com/watch?v=MLTRHc5dk6s

const assert = require("chai").assert;
const app = require("../moduleApp");

let getCurrentYearResult = app.getCurrentYear();

describe("Module App ", function() {
  describe("Module App-getCurrentYear ", function() {
    //Expected value
    it("getCurrentYear should return 2018", function() {
      assert.deepEqual(getCurrentYearResult, 2018);
    });

    //Type of return value
    it("getCurrentYear should always be a number", function() {
      assert.typeOf(getCurrentYearResult, "number");
    });
  });
});
