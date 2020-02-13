const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: LRC');


  });

  return conn;
}

module.exports = { connect };