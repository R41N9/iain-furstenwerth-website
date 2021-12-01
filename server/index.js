const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(compression());
app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
