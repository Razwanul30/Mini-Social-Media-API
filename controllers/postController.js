const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await Post.create({
      content,
      author: req.user.userId,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    post.content = content;

    await post.save();

    res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    await post.deleteOne();

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};