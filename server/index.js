const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");

// create new express app
const app = express();
// set port var for use in app.listen call
const port = 8000;

// make the files smaller, drop load times
app.use(compression());
// set up static service of distributed files (dist folder)
app.use(express.static(path.join(__dirname, "../dist")));
// make sure cross origin requests are accepted (Projects.jsx, Links.jsx)
app.use(cors());

// get route, sends files outlined in express.static middleware call on url navigation
app.get("/", (req, res) => {
  res.send();
});

// listen for navigation to the website on preset port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
