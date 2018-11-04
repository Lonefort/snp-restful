const chai = require('chai');
const request = require('supertest');
const app = require('../server');

const { expect } = chai;

describe('API Tests', () => {
  let shippingOrder = {
    firstName: 'Josh',
    lastName: 'Brook',
    email: 'josh.brook@yahoo.com',
    phoneNumber: '0981238873',
    address: '13 Tejon st',
    city: 'Denver',
    zip: '80211',
  };

  describe('Shipping Orders API Integration Tests', () => {
    describe('GET /orders', () => { 
      it('should get all existing orders', (done) => {
        request(app).get('/orders')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });
  });

  describe('Create an order ', () => { 
    it('should create a order for shipping', (done) => { 
      request(app).post('/orders').send(shippingOrder).end((err, res) => {
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
