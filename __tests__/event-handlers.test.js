'use strict'

const events = require('../events.js');

const pickupHandler = require('../driver/pickup-handler.js');
const transitHandler = require('../driver/in-transit-handler.js');
const orderHandler = require('../vendor/order-handler.js');
const deliveryHandler = require('../vendor/delivery-handler.js');

describe('testing event handlers', () => {
  console.log = jest.fn();
  events.emit = jest.fn();

  it('pickup handler should console log', () => {
    orderHandler();

    expect(console.log).toHaveBeenCalled();
  })

  it('pickup handler should console log', () => {
    pickupHandler({order: 'order'});

    expect(console.log).toHaveBeenCalled();
  })

  it('pickup handler should console log', () => {
    transitHandler({order: 'order'});

    expect(console.log).toHaveBeenCalled();
  })

  it('pickup handler should console log', () => {
    deliveryHandler({order: 'order'});

    expect(console.log).toHaveBeenCalled();
  })
})