const WebSocket = require("ws");

const ws_server = process.env.SERVER_URL
const ws_protocol_prefix = "ws://"
let ws;

console.log("client calling for server %s", ws_server);

try {
  ws = new WebSocket(ws_protocol_prefix + ws_server);
} catch (e) {
  console.error("error:", e);
  process.exit(1);
}

try {
  ws.on("open", function open() {
    ws.send("Maccabi");
  });

  ws.on("message", function incoming(data) {
    console.log("client: %s", data);
  });
} catch (e) {
  console.error("error:", e);
  process.exit(1);
}
