const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").createServer(app);
const port = 8090;

app.use(express.json());
app.use(cors());

server.listen(port, () => {
  console.log(`My Interactive Forms Server is Running on ${port}`);
});

app.use("/", express.static(path.join(__dirname, "public")));

// Index(Main) Page Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
