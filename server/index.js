'use strict';

const io = require('socket.io');
const faker = require('faker');
const MessageQueue = require('../messageQueue.js');

const server = io(3000);

const orderQueue = new MessageQueue();

server.on('connection', (socket) => {
  console.log('client connected: ' +socket.id);

  // socket.on('newOrder', ()=> {
  //   server.emit('pickup', order);
  // });

  socket.on('pickup', (order) => {
    orderQueue.add(order);
    server.emit('pickup', order);
  })

  socket.on('getOrders', () => {
    const allOrders = orders.get();
    allOrders.forEach(order => {
      socket.emit('order', order);
    })
  })
  
  socket.on('inTransit', (order) => {
    server.emit('inTransit', order);
  })

  socket.on('delivered', (order) => {
    orderQueue.received(order.id);
    server.emit('delivered', order);
  })

});