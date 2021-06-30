'use strict';

const events = require('../events.js');

module.exports = (order) => {
  console.log('-----NEW ORDER-----------------------------------------------------')
  console.log(order);
  events.emit('pickup', order);
}