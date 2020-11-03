"use strict";

const person = require("./person.json");
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(createHTML(person));
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server is running`);
});

function createHTML(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Person Data</title>
</head>
<body>
    <h1>Person</h1>
    <h2>${data.firstName} ${data.lastName}</h2>
</body>
</html>
  `;
}
