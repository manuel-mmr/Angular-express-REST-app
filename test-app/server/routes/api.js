const express = require('express');
const router = express.Router();

const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com';

// Get all posts
router.get('/posts', (req, res) => {
    // Get posts from the mock api
    axios.get(`${API}/posts`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
});

module.exports = router;
