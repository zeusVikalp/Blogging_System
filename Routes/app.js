const express = require("express")
const userController = require("../Controllers/userController")
const app = express();
app.use(express.json())

app.post("/post",userController.createPost);
// app.get("/authpost", userController.authPost )
app.get("/user",userController.getBlog);

module.exports = app