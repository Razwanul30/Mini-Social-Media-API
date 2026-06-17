const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [
      {
        text: {
          type: String,
          required: true,
        },

        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  
   likes: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
], 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);