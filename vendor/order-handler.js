'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000');

setInterval(() => {
  const order = {
    randomStore: faker.company.companyName(),
    randomOrderId: faker.finance.routingNumber(),
    randomName: faker.name.findName(),
    randomAddress: faker.address.streetAddress()
  }
  console.log('-----NEW ORDER-----------------------------------------------------')
  console.log(order);

}, 500);


// module.exports = (order) => {
//   console.log('-----NEW ORDER-----------------------------------------------------')
//   console.log(order);
//   events.emit('pickup', order);
// }