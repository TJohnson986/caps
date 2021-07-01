'use strict'

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const dateTime = new Date();

socket.on('pickup', order => {
  setTimeout(() => {
    console.log(`Driver picked up order #${order.randomOrderId} on ${dateTime}`)
    socket.broadcast.emit('inTransit', order);
  }, 1500);

  setTimeout(() => {
    socket.emit('delivered', order)
  }, 3000);
});