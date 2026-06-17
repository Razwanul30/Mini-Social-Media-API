const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await Post.create({
      content,
      author: req.user.userId,
    });
    const populatedPost = await Post.findById(post._id)
  .populate("author", "name email");

    res.status(201).json(populatedPost);
    
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
      .populate("comments.user", "name email")
      .populate("likes", "name")
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

const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.comments.push({
      text,
      user: req.user.userId,
    });

    await post.save();

    res.status(201).json({
      message: "Comment added successfully",
      comments: post.comments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const userId = req.user.userId;

    const alreadyLiked = post.likes.some(
  (id) => id.toString() === userId
);

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (id) => id.toString() !== userId
      );

      await post.save();

      return res.status(200).json({
        message: "Post unliked",
        likesCount: post.likes.length,
        likedBy: post.likes,
      });
    }

    post.likes.push(userId);

    await post.save();

    res.status(200).json({
      message: "Post liked",
      likesCount: post.likes.length,
      likedBy: post.likes,
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
  addComment,
  toggleLike,
  deletePost,
};