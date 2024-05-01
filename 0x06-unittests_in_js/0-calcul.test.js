const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("Test cases, calculateNumber", function () {
  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(3, 2), 5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(3.3, 2.5), 6);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(-8.2, 2), -6);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(-3, -2), -5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber(-3.7, -2), -6);
  });
});
