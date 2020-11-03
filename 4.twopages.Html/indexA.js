"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const { port, host } = require("./config.json");

const homePath = path.join(__dirname, "home.html");

//console.log(homePath);

const server = http.createServer((req, res) => {
  fs.readFile(homePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(err.message); // only for debbuging
    } else {
      res.writeHead(200, {
        "Content-type": "text/html",
        "Content-length": Buffer.byteLength(data, "utf-8"),
      });
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log(`${host}: ${port}`);
});
