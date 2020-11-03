"use Strict";

const http = require("http");
const url = require("url");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Request info</h1>
    <h2>headers:</h2>
    <pre>${JSON.stringify(req.headers, null, 4)}</pre>
    <h2>host: ${req.headers.host}</h2>
    <h2>agent: ${req.headers["user-agent"]}</h2>
    <h2>method: ${req.method}</h2>
    <h2>url:</h2>
    <pre>${req.url}</pre>
    <h2>pathname:${url.parse(req.url).pathname}</h2>
    
</body>
</html>
  `);
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server ${host} is running at port ${port}`);
});
