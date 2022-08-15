const express = require("express");
const app = express();

const hobbies = require("./hobbies");
const languages = require("./languages");
const others = require("./others");
const profile = require("./profile");
const workHistory = require("./workHistory");

app.get("/", (req, res) => {
  res.send("It's running");
});

app.get("/hobbies", (req, res) => {
  res.json(hobbies);
});

app.get("/languages", (req, res) => {
  res.json(languages);
});

app.get("/others", (req, res) => {
  res.json(others);
});

app.get("/profile", (req, res) => {
  res.json(profile);
});

app.get("/work-history", (req, res) => {
  res.json(workHistory);
});

app.listen(process.env.PORT || 4000, () => console.log("Server started"));
