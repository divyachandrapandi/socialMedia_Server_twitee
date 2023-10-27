const  Express =require("express") ;
const  { createPost, deletePost, getPost, getTimeline, likePost, updatePost } = require ("../Controllers/Post.controller.js");

const router = Express.Router();

router.post("/", createPost)
router.get("/:id", getPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id/timeline", getTimeline)

module.exports =  router