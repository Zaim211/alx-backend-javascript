const calculateNumber = require('./1-calcul');
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber, type `SUM`", function() {
  it("checks sum round numbers", function() {
    except(calculateNumber('SUM', 2, 2)).to.equal(4);
  });

  it("Test numbers are rounded", function() {
    except(calculateNumber('SUM', 4.49, 3.7)).to.equal(8);
  });

  it("Test numbers are rounded", function() {
    except(calculateNumber('SUM', 3.3, 2.49)).to.equal(5);
  });

  it("Test numbers are rounded", function() {
    except(calculateNumber('SUM', -8.2, 2)).to.equal(-6);
  });

  it("Test numbers are rounded", function() {
    except(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it("Test numbers are rounded", function() {
    except(calculateNumber('SUM', -3.7, -2)).to.equal(-6);
  });

});

describe("calculateNumber, type `SUBTRACT`", function() {
  it("checks Subtract round numbers", function() {
    except(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('SUBTRACT', 1.49, 3.7)).to.equal(-3);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('SUBTRACT', 3.3, 2.49)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('SUBTRACT', -8.2, 2)).to.equal(-10);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('SUBTRACT', 1000, 1.49)).to.equal(999);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('SUBTRACT', -3.7, -2)).to.equal(-2);
  });

});

describe("calculateNumber, type `DIVIDE`", function() {
  it("checks Subtract round numbers", function() {
    except(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', 4.49, 3.7)).to.equal(1);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', 3.3, 2.49)).to.equal(1.5);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', -8.2, 2)).to.equal(-4);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', 1000, 1.49)).to.equal(1000);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', -3.7, -2)).to.equal(2);
  });

  it("Test Subtract numbers are rounded", function() {
    except(calculateNumber('DIVIDE', -3.7, 0)).to.equal('Error');
  });

});
