const net = require('net');
const { connect } = require('./client');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (key) => {
  console.log('exit');
  if (key === '\u0003') {
    process.exit()
  }
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function (key) {
    handleUserInput(key);
  })

  return stdin;
}

console.log('Connecting...');
connect();
