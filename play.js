const net = require("net");

const connect = function () {
  //net.createConnection() -> initiates connection with socket.connect() & return net.Soket
  const conn = net.createConnection({
    host: '165.227.47.243' ,
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.on('connection', () => {
    conn.write('Name:Erica');
  });

  //conn is the object === net.Soket
  //return conn;
}

console.log("Connecting ...")
connect();


