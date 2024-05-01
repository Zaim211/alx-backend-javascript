const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const {describe, it} = require("mocha");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  it("checks Utils.calculateNumber will only be called once", function() {
    const spie = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spie.calledOnce);
    spie.restore();
  });
});
