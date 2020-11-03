"use strict";

const person = require("./person.json");
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(person));
});

server.listen(port, host, () => {
  console.log(`Server ${host} , port ${port}`);
});
