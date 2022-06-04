var express = require("express");

const fs = require("fs");
const { use } = require("express/lib/application");

const bodyParser = require("body-parser");

var app = express();

const Users = require("./data/users.json");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.get("/users", (req, res, next) => {
  res.send(Users);
});

app.get("/users/:id", (req, res, next) => {
  // SHOW USER HERE
  const user = Users.find((u) => u.id === req.params.id);
  if (!user) {
    res.status(404).send({ message: "User not found" });
  }
  res.send(user);
});

app.post("/users/:id", (req, res, next) => {
  // UPDATE USER HERE
  console.log(req.params);
  console.log(req.body);

  res.send();

});

app.delete("/users/:id", (req, res) => {
  // DELETE USER HERE
  let userId = req.params.id;
  const users = Users.filter((u) => u.id !== userId);

  res.send(users);
});
