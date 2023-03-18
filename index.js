const express = require("express");
const server = express();
const port = 9000;

server.use(express.json());

server.listen(port, () => {
  console.log(`server listening on port ${port},`);
});

server.get("/", (req, res) => {
  res.send(`<h2>Your server is working!</h2>`);
});
