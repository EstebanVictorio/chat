import * as WebSocket from "ws";
const onClientMessage = (ws: WebSocket, message: WebSocket.MessageEvent) => {
  console.log("message from client:");
  console.log(message.data);
  ws.send(`You sent this - ${message.data}`);
};

const onConnection = (ws: WebSocket) => {
  ws.onmessage = (message) => onClientMessage(ws, message);
  console.log("Connected");
};

const onListening = (port, type: string = "WebSocket") => {
  console.log(`${type} started listening on port: ${port}`);
};

export { onConnection, onListening };
