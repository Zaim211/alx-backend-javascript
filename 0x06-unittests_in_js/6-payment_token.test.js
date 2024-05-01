const getPaymentTokenFromAPI = require('./6-payment_token');
const {describe, it} = require('mocha');
const expect = require('chai').expect

describe('getPaymentTokenFromAPI', function() {
  it('Check async testing with callback done', function(done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      done();
    });
  });
});
