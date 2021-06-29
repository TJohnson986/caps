'use strict';

const events = require('../events.js');

module.exports = (order) => {
  setTimeout(() => {
    console.log(`Driver picked up ${order.orderNumber}`)
    events.emit('inTransit', order);
  }, 1000);
}