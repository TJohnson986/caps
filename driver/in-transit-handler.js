'use strict';

const events = require('../events.js');

module.exports = (order) => {
  setTimeout(() => {
    console.log('Delivered!')
    events.emit('delivered', order);
  }, 3000);
}