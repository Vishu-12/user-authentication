const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
require("./Models/db");
const PORT = process.env.PORT || 4000;

const AuthRoutes = require("./Routes/auth");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/products", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
