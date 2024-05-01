const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("Test cases, calculateNumber", function() {

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(3, 2), 5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(4.49, 3.7), 8);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(3.3, 2.49), 5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(-8.2, 2), -6);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(-3.7, -2), -6);
  });

});
