const mongoose = require("mongoose");
const URL = process.env.URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));
