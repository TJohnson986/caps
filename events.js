'use strict'

// Event pool shared by all modules

const EventEmitter = require('events');

const events = new EventEmitter();

module.exports = events;