const WebSocket = require("ws");

console.log("Server: Listening to the fans....");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("Server: received: %s", message);
    if (message == "Yalla!") {
      const msg = "Maccabi!";
      console.log("Server: sending: %s", msg);
      ws.send(msg);
    }
  });

  // const msg = "Ready!";
  // console.log("Server: sending: %s", msg);
  // ws.send(msg);
});
