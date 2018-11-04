'use strict';
module.exports = function(app) {
  var snpList = require('../controllers/snpController');

  // snpList Routes
  app.route('/orders')
    .get(snpList.list_all_orders)
    .post(snpList.create_a_order);
};
