const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const {describe, it} = require("mocha");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  it("checks Utils.calculateNumber will only be called once", function() {
    const stubs = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spie= sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    assert(stubs.withArgs('SUM', 100, 20).calledOnce);
    assert(spie.withArgs('The total is: 10').calledOnce);
  });
});
