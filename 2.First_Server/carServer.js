"use strict";

const cars = require("./cars.json");
const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(createHTML(cars));
});

server.listen(port, host, () => {
  console.log(`Server ${host} is running at port ${port}`);
});

function createHTML(data) {
  let htmlString = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Data</title>
</head>
<body>
    <h1>Cars</h1>`;
  for (let car of data) {
    htmlString += `<h2>${car.model}: ${car.licence}</h2>\n`;
  }
  htmlString += `</body>
</html>
  `;
  return htmlString;
}
