const { createServer } = require("http");

const server = createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("Hello, main page!");
      res.end();
      break;
    case "/about":
      res.write("Hello, about page!");
      res.end();
      break;
    default:
      res.write("404 Not Found");
      res.end();
      break;
  }
});

server.listen(3000);
