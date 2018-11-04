const snpList = require('../controllers/snpController');

module.exports = (app) => {
  // snpList Routes
  app.route('/orders')
    .get(snpList.list_all_orders)
    .post(snpList.create_a_order);
};
