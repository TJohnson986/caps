'use strict';

const io = require('socket.io');

const server = io(3000);

server.on('connection', (socket) => {
  console.log('client connected', socket.id);
  socket.emit('success', 'yes');

});