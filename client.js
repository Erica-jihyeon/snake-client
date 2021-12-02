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

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up')
    }, 1000);
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  //conn is the object === net.Soket
  //return conn;

  /*let count = 0;

  const moveL = (until) => {
    conn.write('Move: left');
    count++;
    if (count > until) {
      clearInterval(tId1)
      count = 0;
    }
  }

  const moveD = (until) => {
    conn.write('Move: down');
    count++;
    if (count > until) {
      clearInterval(tId2)
      count = 0;
    }
  }

  const moveR = (until) => {
    conn.write('Move: right');
    count++;
    if (count > until) {
      clearInterval(tId3)
      count = 0;
    }
  }

  const moveU = (until) => {
    conn.write('Move: up');
    count++;
    if (count > until) {
      clearInterval(tId4)
      count = 0;
    }
  }

  const tId1 = setInterval(moveL, 300, 5);
  const tId2 = setInterval(moveD, 300, 5);
  const tId3 = setInterval(moveR, 300, 5);
  const tId4 = setInterval(moveU, 300, 5);*/
}

console.log("Connecting ...")

module.exports = {
  net,
  connect
};


