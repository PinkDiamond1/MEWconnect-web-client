'use strict';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable global-require */

if (typeof window !== 'undefined') {
  if (!window._babelPolyfill) {
    // This is the primary difference between this and index.js
    require('babel-polyfill');
  }
} else if (typeof global !== 'undefined') {
  if (!global._babelPolyfill) {
    require('babel-polyfill');
  }
}
// INITIATOR CLIENT
// The initiator client is the integration end of the connection,
// and sends the connection details to
// the signal server which then waits for a corresponding receiver connection.

// RECEIVER CLIENT
// The receiver client is the Mobile/Remote end of the connection and is where the connection
// details are entered to connect to the signal server which uses the supplied details to
// match it with an initiator which triggers the exchange of information used to establish
// a direct connection.

// CRYPTO
// the crypto constructor is a collection of methods used by both the initiator and receiver
// in creating the direct connection

var MewConnect = require('./MewConnect');

module.exports.Client = MewConnect.Initiator; // core endpoint client to begin connection
module.exports.Crypto = MewConnect.Crypto; // crypto related functionality specific to mew connect
module.exports.Initiator = MewConnect.InitiatorClient; // wrapper around initiator exposing callback hooks
module.exports.Receiver = MewConnect.ReceiverClient; // (dev) wrapper around 'mobile'/remote endpoint client