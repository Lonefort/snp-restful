'use strict';


var mongoose = require('mongoose'),
Order = mongoose.model('Orders');

exports.list_all_orders = function(req, res) {
  Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};




exports.create_a_order = function(req, res) {
  var new_order = new Order(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};