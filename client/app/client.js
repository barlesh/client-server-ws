const WebSocket = require("ws");

const ws_server = process.env.SERVER_URL
const ws_protocol_prefix = "ws://"
let ws;

console.log("Client calling for server %s", ws_server);

try {
  ws = new WebSocket(ws_protocol_prefix + ws_server);
} catch (e) {
  console.error("error:", e);
  process.exit(1);
}

try {
  ws.on("open", function open() {
    console.log("Client: connected to server!")
    const msg = "Yalla!"
    console.log("Client: sending: %s", msg)
    ws.send(msg);
  });

  ws.on("message", function incoming(data) {
    console.log("Client: received: %s", data);
  });
} catch (e) {
  console.error("error:", e);
  process.exit(1);
}
