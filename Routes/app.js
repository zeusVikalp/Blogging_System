const express = require("express")
const blogController = require("../Controllers/blogController")
const authController = require("../Controllers/authController")
const app = express();
app.use(express.json())

app.post("/createBlog",blogController.createPost);
app.post("/like",blogController.Like);
app.get("/blogDetails", blogController.Blog);
app.get("/search",blogController.Search);
app.get("/allBlogs", blogController.AllBlogs)
app.post("/publish", blogController.Publish)
app.post("/register",authController.Register)
app.get("/",blogController.Dashboard)

module.exports = app