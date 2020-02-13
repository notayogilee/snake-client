//stores the active TCP connection objects
let connection;

const handleUserInput = ('data', key => {

  if (key === 'w') {
    console.log('up');
    connection.write('Move: up');
  }
  if (key === 's') {
    console.log('down');
    connection.write('Move: down');
  }
  if (key === 'a') {
    console.log('left');
    connection.write('Move: left');
  }
  if (key === 'd') {
    console.log('right');
    connection.write('Move: right');
  }
  if (key === '\u0003') {
    process.exit()
  }
  if (key === 'l') {
    connection.write('Say: HI!');
  }
})
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)

  return stdin;
}

module.exports = { setupInput };
