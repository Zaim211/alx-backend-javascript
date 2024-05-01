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
