const setupInput = function () {
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
}

module.exports = {
  setupInput
}