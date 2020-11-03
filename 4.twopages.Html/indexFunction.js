"use strict";

const http = require("http");
const path = require("path");
const fs = require("fs");

const { port, host } = require("./config");

const homePath = path.join(__dirname, "home.html");

const server = http.createServer(async (req, res) => {
  sendFile(res, homePath);
});

server.listen(port, host, () => {
  console.log(`${host}: ${port}`);
});

async function sendFile(res, filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    res.writeHead(200, {
      "Content-Type": "text/html",
      "content-Length": Buffer.byteLength(data, "utf-8"),
    });
    res.end(data);
  } catch (err) {
    res.statusCode = 404;
    res.end(`Error: ${err.message}`);
  }
}
