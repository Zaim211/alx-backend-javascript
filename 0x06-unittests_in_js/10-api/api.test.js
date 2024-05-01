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

describe('Test payment', function() {
  it('check status code for the correct url', function() {
    request.get('http://localhost:7865/available_payments', function(err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });

  it("check correct body content for correct url", function() {
    const option = {json: true};
    const payment = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.deep.equal(payment);
      }
    });
  });
});

describe('Test Login', function() {
  it('Check the content of url, and statusCode', function(done) {
    const output = {
      url: "http://localhost:7865/login",
        json: true,
	body: {
          userName: 'Youssef'
	}
    };
    request.post(output, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for url with statusCoed", function(done) {
    const response = {
      url: "http://localhost:7865/login",
	json: true,
	body: {
          userName: 'Youssef'
	}
    };
    request.post(response, function(err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome Youssef');
      }
      done();
    });
  });

  it("check incorrect url request, status code for this request", function(done) {
    const resp = {
      url: "http://localhost:7865/login",
	json: true,
	body: {
	  usrnm: 'Youssef'
	}
    };
    request.post(resp, function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
