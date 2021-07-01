'use strict'

const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000');

socket.on('delivered', (order) => {
  console.log(`Thank you, order #: ${order.randomOrderId} has been delivered!`);
})

setInterval(() => {
  const order = {
    randomStore: faker.company.companyName(),
    randomOrderId: faker.finance.routingNumber(),
    randomName: faker.name.findName(),
    randomAddress: faker.address.streetAddress()
  }
  console.log('-----NEW ORDER-----------------------------------------------------')
  console.log(order);

  socket.emit('pickup', order)
}, 500);