'use strict';

var app = require('../server'),
  chai = require('chai'),
  request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() { 
  var shippingOrder = { 
    firstName: 'Josh',
    lastName: 'Brook',
    email: 'josh.brook@yahoo.com',
    phoneNumber: '0981238873',
    address: '13 Tejon st',
    city: 'Denver',
    zip: '80211'
  };

  describe('Shipping Orders API Integration Tests', function() {
    describe('GET /orders', function() { 
      it('should get all existing orders', function(done) { 
        request(app).get('/orders')
          .end(function(err, res) { 
            expect(res.statusCode).to.equal(200); 
            expect(res.body).to.be.an('array'); 
            done(); 
          }); 
      });
    });
  });

  describe('Create an order ', function() { 
    it('should create a order for shipping', function(done) { 
      request(app) .post('/orders') .send(shippingOrder) .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.body.firstName).to.equal('Josh'); 
        expect(res.body.lastName).to.equal('Brook'); 
        expect(res.body.email).to.equal('josh.brook@yahoo.com'); 
        expect(res.body.phoneNumber).to.equal('0981238873'); 
        expect(res.body.address).to.equal('13 Tejon st'); 
        expect(res.body.city).to.equal('Denver'); 
        expect(res.body.zip).to.equal('80211'); 
        shippingOrder = res.body; 
        done(); 
      }); 
    }); 
  });
});