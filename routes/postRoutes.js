const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;