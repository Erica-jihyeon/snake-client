const net = require("net");

const connect = function () {
  //net.createConnection() -> initiates connection with socket.connect() & return net.Soket
  const conn = net.createConnection({
    host: '165.227.47.243' ,
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })

  conn.setEncoding("utf8");

  //send up message
  conn.on('connect', () => {
    conn.write('Name: ER2');
  })

  conn.on("data", (data) => {
    console.log(data);
  })
  //conn is the object === net.Soket
  //return conn;
}

console.log("Connecting ...")

module.exports = {
  net,
  connect
};

