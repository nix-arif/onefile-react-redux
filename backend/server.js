const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  res.json({ username: "Your name here" });
});

app.listen(3001);
