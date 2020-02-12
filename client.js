const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    console.log('Name: LRC');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

console.log('Connecting...');
connect();