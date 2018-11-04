const mongoose = require('mongoose');

const Order = mongoose.model('Orders');

exports.list_all_orders = (req, res) => {
  Order.find({}, (err, order) => {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.create_a_order = (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) res.send(err);
    res.json(order);
  });
};
