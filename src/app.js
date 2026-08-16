const express = require("express");

const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "okok",
  });
});

app.use("/users", userRoutes);

module.exports = app;
