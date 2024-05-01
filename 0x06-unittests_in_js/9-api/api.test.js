const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe('the index page', function() {
  const server = {
    url: 'http://localhost:7865/',
    method: 'GET'
  }
  it('Correct status code', function(done) {
    request(server, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result', function(done) {
    request(server, function(err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('Check the content-length', function(done) {
    request(server, function(err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('test suite for the cart page', function() {
  it('Correct status code, for correct id', function(done) {
    request.get('http://localhost:7865/cart/12', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Checks status code, for incorrect id', function(done) {
    request.get('http://localhost:7865/cart/zaim', function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Check the content of correct id', function(done) {
    request.get('http://localhost:7865/cart/12', function(err, res, body) {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });
});
