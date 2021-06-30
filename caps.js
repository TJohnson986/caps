// 'use strict'

// // Main Hub, logs every event to the console with timestamp and event payload

// const events = require('./events.js');
// const faker = require('faker');

// require('./driver/driver.js');
// require('./vendor/vendor.js');

// setInterval(() => {
//   const randomStore = faker.company.companyName();
//   const randomOrderId = faker.finance.routingNumber();
//   const randomName = faker.name.findName();
//   const randomAddress = faker.address.streetAddress();

//   events.emit('newOrder', {store: randomStore, orderNumber: randomOrderId, name: randomName, address: randomAddress} )
// }, 5000);