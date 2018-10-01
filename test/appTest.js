// Based on https://www.youtube.com/watch?v=MLTRHc5dk6s

const assert = require("chai").assert;
const app = require("../app");
const mocha = require("mocha");

let getNameResult = app.getName();
let addNumberResult = app.addNumber(5, 5);


mocha.describe("App ", function() {
  mocha.describe("App-GetName ", function() {
    //Expected value
    it("getName should return Theepan", function() {
      assert.equal(getNameResult, "Theepan");
    });
    //No expected value
    it("getName should not  return other Theepan", function() {
      assert.notEqual(getNameResult, "Arunan");
    });

    //Type of return value
    it("getName should always return a string", function() {
      assert.typeOf(getNameResult, "string");
    });
  });
});
