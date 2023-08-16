const express = require("express");

const app = express();

const appStr = "<h1>App 3</h1>";

app.get("/", (req, res) => {
  res.send(appStr);
});

app.listen(5000, () => {
  console.log(appStr);
});
