'use strict'

// Monitor system for events
// On the 'pickup' event, wait 1 second then log 'DRIVER: picked up [ORDER_ID]' to the console

//Emit an 'in-transit event with the payload received

// Wait 3 seconds, then log "delivered" to the console. Emit a 'delivered' event with the same payload

const events = require('../events.js');
const pickupHandler = require('./pickup-handler.js');
const transitHandler = require('./in-transit-handler.js');

events.on('pickup', pickupHandler);
events.on('inTransit', transitHandler);
