const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "build");

app.use(express.static(publicPath));

app.get("/*", (req, res) => {
  res.sendFile(publicPath, "index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
