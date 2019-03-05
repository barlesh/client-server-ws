const WebSocket = require('ws');
 
console.log("server.....")

const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('server: %s', message);
  });
 
  ws.send('Yalla');
});