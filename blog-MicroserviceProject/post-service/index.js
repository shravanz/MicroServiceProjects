const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// storing post in memory only
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/post", (req, res) => {
  // Generating random Id
  const id = randomBytes(4).toString("hex"); //
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
