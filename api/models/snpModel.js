'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  firstName: {
    type: String,
    required: 'Did you forget to enter the name?'
  },
  lastName: {
    type: String,
    required: 'Did you forget to enter the last name?'
  },
  email: {
    type: String,
    required: 'Did you forget to enter the email?'
  },
  phoneNumber: {
    type: String,
    required: 'Did you forget to enter the phone number?'
  },
  address: {
    type: String,
    required: 'Did you forget to enter the address?'
  },
  city: {
    type: String,
    required: 'Did you forget to enter the city?'
  },
  zip: {
    type: String,
    required: 'Did you forget to enter zip?'
  },
  specialNotes: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Orders', OrderSchema);