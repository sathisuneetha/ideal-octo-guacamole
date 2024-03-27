// Create web server
// Create a new Express app
const express = require('express');
const app = express();
// Create a new router
const router = express.Router();
// Create a new comments array
const comments = [];
// Create a new comment counter
let commentCounter = 0;
// Create a new comment limit
const commentLimit = 10;
// Create a new comment length
const commentLength = 100;
// Create a new comment error
const commentError = 'Comment must be less than 100 characters';
// Create a new comment route
router.get('/', (req, res) => {
  res.json(comments);
});
// Create a new comment route
router.post('/', (req, res) => {
  const comment = req.body.comment;
  if (comment.length > commentLength) {
    res.status(400).json({ error: commentError });
  } else {
    comments.push({ id: commentCounter++, comment: comment });
    res.json(comments);
  }
});