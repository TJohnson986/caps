'use strict';

const events = require('../events.js');
const dateTime = new Date();

module.exports = (order) => {
  console.log(`thank you, order # ${order.orderNumber} has been delivered on ${dateTime}`);
  console.log('---------------------------------------------------------------------');
}