import Express from "express";
import ClientConfig from "./config";
import { onListening } from "./../common/event-listeners";
const webServer = Express();
webServer.use("/", Express.static(__dirname));

webServer.listen(ClientConfig.port, () =>
  onListening(ClientConfig.port, "WebServer")
);
