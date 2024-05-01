const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber, type `SUM`", function() {
  it("checks sum round numbers", function() {
    assert.equal(calculateNumber('SUM', 2, 2), 4);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber('SUM', 4.49, 3.7), 8);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber('SUM', 3.3, 2.49), 5);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber('SUM', -8.2, 2), -6);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });

  it("Test numbers are rounded", function() {
    assert.equal(calculateNumber('SUM', -3.7, -2), -6);
  });

});

describe("calculateNumber, type `SUBTRACT`", function() {
  it("checks Subtract round numbers", function() {
    assert.equal(calculateNumber('SUBTRACT', 2, 2), 0);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.49, 3.7), -3);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('SUBTRACT', 3.3, 2.49), 1);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('SUBTRACT', -8.2, 2), -10);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('SUBTRACT', 1000, 1.49), 999);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -2), -2);
  });

});

describe("calculateNumber, type `DIVIDE`", function() {
  it("checks Subtract round numbers", function() {
    assert.equal(calculateNumber('DIVIDE', 2, 2), 1);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', 4.49, 3.7), 1);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', 3.3, 2.49), 1.5);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', -8.2, 2), -4);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', 1000, 1.49), 1000);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', -3.7, -2), 2);
  });

  it("Test Subtract numbers are rounded", function() {
    assert.equal(calculateNumber('DIVIDE', -3.7, 0), 'Error');
  });

});
