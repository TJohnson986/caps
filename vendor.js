'use strict'

// Declare store name in .env
// Every 5 seconds, simulate new customer order. Order should be an object, with storeName, orderId, customerName, and address.

// Emit a 'pickup' event and attach the simulated order as a payload

// Monitor the system for events - whenever the 'delivered' event occurs, log 'thank you' to the console