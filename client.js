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
    setInterval(() => {
      conn.write('Move: up');

    }, 1000)
    conn.write('data', (data) => {
      // console.log(data);
      if (data === '')
        setInterval(() => {
          conn.write('Move: left');
        }, 1000)
    })
    //   if (data === 'w')
    //     setInterval(() => {
    //       conn.write('Move: up');
    //     }, 1000)
    //   if (data === 'a')
    //     setInterval(() => {
    //       conn.write('Move: left');
    //     }, 1000)
    //   if (data === 'f')
    //     setInterval(() => {
    //       conn.write('Move: right');
    //     }, 1000)
    // });
  });

  return conn;
}
console.log('Connecting...');
connect();
