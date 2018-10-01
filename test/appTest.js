// Based on https://www.youtube.com/watch?v=MLTRHc5dk6s

import { assert } from "chai";
import { getName, addNumber } from "../app";
import { describe } from "mocha";

let getNameResult = getName();
let addNumberResult = addNumber(5, 5);

describe("App ", function() {
  describe("App-GetName ", function() {
    //Expected value
    it("getName should return Theepan", function() {
      assert.equal(getNameResult, "Theepan");
    });
    //No expected value
    it("getName should not  return other Theepan", function() {
      assert.notEqual(getNameResult, "Arunan");
    });

    //Shouldnt return null
    it("getName should not  return null ", function() {
      assert.isNotNull(getNameResult);
    });
    //Type of return value
    it("getName should always return a string", function() {
      assert.typeOf(getNameResult, "string");
    });
  });
});
