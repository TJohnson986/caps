'use strict';

const io = require('socket.io');
const faker = require('faker');

const server = io(3000);

server.on('connection', (socket) => {
  console.log('client connected: ' +socket.id);

  // socket.on('newOrder', ()=> {
  //   server.emit('pickup', order);
  // });

  socket.on('pickup', (order) => {
    server.emit('pickup', order);
  })
  
  socket.on('inTransit', (order) => {
    server.emit('inTransit', order);
  })

  socket.on('delivered', (order) => {
    server.emit('delivered', order);
  })

});