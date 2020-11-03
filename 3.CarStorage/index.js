"use strict";

const http = require("http");
const url = require("url");

const config = require("./config.json");
const { getWithLicence, getWithModel, getAllCars } = require("./carstorage");

const server = http.createServer((req, res) => {
  const urldata = url.parse(req.url, true);
  const route = urldata.pathname;
  let result = [];
  if (route === "/cars") {
    result = getAllCars();
  } else if (route === "/search/bylicence" && urldata.query.licence) {
    result = getWithLicence(urldata.query.licence);
  } else if (route === "/search/bymodel" && urldata.query.model) {
    result = getWithModel(urldata.query.model);
  }
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(result, null, 4));
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  res.end(createHtml(result));
});

server.listen(config.port, config.host, () =>
  console.log(`Server ${config.host}, port:${config.port}`)
);
function createHtml(resultArray) {
  let htmlString = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cars</title>
</head>
<body>
    <h1>Search result</h1>
    <table>
        <thead>
            <th>Model</th>
            <th>Licence</th>
        </thead>
        <tbody>`;

  for (let car of resultArray) {
    htmlString += `<tr>
    <td>${car.model}</td>
    <td>${car.licence}</td></tr>`;
  }
  htmlString += `</tbody>
    </table>
</body>
</html>
  `;
  return htmlString;
}
