const sinon = require("sinon");
const sendPaymentRequestToApi = require('./5-payment');
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
  beforeEach("hook function", function() {
    sinon.spy(console, 'log');
  });

  afterEach("hook function", function() {
    console.log.restore();
  });

  it("checks console.log with the correct arg", function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it("checks console.log with the correct arg", function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
