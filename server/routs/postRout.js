const express = require("express")
const router = express.Router()
const post = require("../controllers/postsController")

router.post("/createPost",post.createPost)
router.get("/getAllPosts",post.getAllPosts)
router.get("/getPostById/:id",post.getPostById)
router.put("/updatePost/:id",post.updatePost)
router.delete("/deletePost/:id",post.deletePost)

module.exports = router

