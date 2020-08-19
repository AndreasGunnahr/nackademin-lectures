const db = require("../database");
const { v4: uuidv4 } = require("uuid");

const findAllComments = (id) => {
  return db.comments.find({ postId: id });
};

const createComment = (user, message, postId) => {
  return db.comments.insert({
    _id: uuidv4(),
    user,
    message,
    timestamp: new Date().toLocaleString(),
    postId,
  });
};

const updateComment = (commentId, message) => {
  return db.comments.update(
    { _id: commentId },
    {
      $set: {
        message,
        timestamp: new Date().toLocaleString(),
      },
    },
    {}
  );
};

const deleteComment = async (id) => {
  return db.comments.remove({ _id: id }, {});
};

module.exports = {
  findAllComments,
  createComment,
  updateComment,
  deleteComment,
};