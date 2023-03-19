const express = require("express");
const server = express();
server.use(express.json());
const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`server listening on port ${port},`);
});

server.get("/", (req, res) => {
  res.send(`<h2>Your server is working!</h2>`);
});
