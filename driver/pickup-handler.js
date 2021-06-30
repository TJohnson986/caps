'use strict';

const events = require('../events.js');
const dateTime = new Date();

module.exports = (order) => {
  setTimeout(() => {
    console.log(`Driver picked up order #${order.orderNumber} on ${dateTime}`)
    events.emit('inTransit', order);
  }, 1000);
}