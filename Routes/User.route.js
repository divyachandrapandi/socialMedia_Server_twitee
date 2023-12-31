const Express = require("express") ;
const { deleteUser, followUser, getUser, unFollowUser, updateUser, getAllUser } = require ("../Controllers/Users.controller.js");

const authMiddleWare= require("../Middleware/authMiddleWare.js");
// import authMiddleWare from "../Middleware/authMiddleWare.js";

const router = Express.Router();

router.get('/', getAllUser)
router.get('/:id', getUser)
router.put('/:id', authMiddleWare, updateUser)
router.delete("/:id", authMiddleWare, deleteUser)
router.put("/:id/follow", authMiddleWare, followUser)
router.put("/:id/unfollow", authMiddleWare, unFollowUser)

module.exports = router