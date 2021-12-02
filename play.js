const { stdin } = require('process');
const { net, connect } = require('./client');
const { setupInput } = require('./input');

connect();

setupInput(connect());
