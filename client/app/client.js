const WebSocket = require('ws');

let  ws

try{
   ws = new WebSocket('ws://localhost:8080');
} catch(e) {
  console.error(e)
  process.exit(1)
}
 
ws.on('open', function open() {
  ws.send('Maccabi');
});
 
ws.on('message', function incoming(data) {
  console.log("client: %s", data);
});