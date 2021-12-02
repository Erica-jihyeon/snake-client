
const setupInput = function (conn) {
  connection = conn;
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}


// on any input from stdin (standard input), output a "." to stdout
//stdin.on('data', (key) => {
//  process.stdout.write('.');
//});
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0061') {
    console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === '\u0077') {
    console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === '\u0073') {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === '\u0064') {
    console.log("Move: right");
    connection.write("Move: right");
  }
}

let connection;

module.exports = {
  setupInput
}