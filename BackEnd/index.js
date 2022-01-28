const http = require("http");
const app = http.createServer((request, response) => {
  var city, query;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`&lt;h1&gt;The city you are in is .&lt;/h1&gt;`);
  response.end();
});
app.listen(3000);