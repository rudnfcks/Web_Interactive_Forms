const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").createServer(app);
const port = 5000;

app.use(express.json());
app.use(cors());

server.listen(port, () => {
  console.log(`My Interactive Forms Server is Running on ${port}`);
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/3D_Box_Animation/",
  express.static(path.join(__dirname, "public/projects/3D_Box_Animation"))
);
app.use(
  "/Neon_Sign_Animation/",
  express.static(path.join(__dirname, "public/projects/Neon_Sign_Animation"))
);
app.use(
  "/3D_Stairs_Animation/",
  express.static(path.join(__dirname, "public/projects/3D_Stairs_Animation"))
);
app.use(
  "/3D_RollText_Animation/",
  express.static(path.join(__dirname, "public/projects/3D_RollText_Animation"))
);

// Index(Main) Page Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Projects Page
app.get("/3D_Box_Animation/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/projects/3D_Box_Animation/index.html")
  );
});
app.get("/Neon_Sign_Animation/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/projects/Neon_Sign_Animation/index.html")
  );
});
app.get("/3D_Stairs_Animation/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/projects/3D_Stairs_Animation/index.html")
  );
});
app.get("/3D_RollText_Animation/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/projects/3D_RollText_Animation/index.html")
  );
});
