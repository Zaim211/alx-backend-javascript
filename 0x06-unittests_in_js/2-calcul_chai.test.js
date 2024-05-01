const calculateNumber = require('./2-calcul_chai');
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber, type `SUM`", function() {
  it("checks sum round numbers", function() {
    expect(calculateNumber('SUM', 2, 2)).to.equal(4);
  });

  it("Test numbers are rounded", function() {
    expect(calculateNumber('SUM', 4.49, 3.7)).to.equal(8);
  });

  it("Test numbers are rounded", function() {
    expect(calculateNumber('SUM', 3.3, 2.49)).to.equal(5);
  });

  it("Test numbers are rounded", function() {
    expect(calculateNumber('SUM', -8.2, 2)).to.equal(-6);
  });

  it("Test numbers are rounded", function() {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it("Test numbers are rounded", function() {
    expect(calculateNumber('SUM', -3.7, -2)).to.equal(-6);
  });

});

describe("calculateNumber, type `SUBTRACT`", function() {
  it("checks Subtract round numbers", function() {
    expect(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('SUBTRACT', 1.49, 3.7)).to.equal(-3);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('SUBTRACT', 3.3, 2.49)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('SUBTRACT', -8.2, 2)).to.equal(-10);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('SUBTRACT', 1000, 1.49)).to.equal(999);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('SUBTRACT', -3.7, -2)).to.equal(-2);
  });

});

describe("calculateNumber, type `DIVIDE`", function() {
  it("checks Subtract round numbers", function() {
    expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', 4.49, 3.7)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', 3.3, 2.49)).to.equal(1.5);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', -8.2, 2)).to.equal(-4);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', 1000, 1.49)).to.equal(1000);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', -3.7, -2)).to.equal(2);
  });

  it("Test Subtract numbers are rounded", function() {
    expect(calculateNumber('DIVIDE', -3.7, 0)).to.equal('Error');
  });

});
