import { Server } from "ws";
import ServerOptions from "./config";
import { onConnection, onListening } from "./../common/event-listeners";
const server = new Server(ServerOptions);

server.on("listening", () => onListening(ServerOptions.port));
server.on("connection", onConnection);
