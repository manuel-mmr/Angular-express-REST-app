const express = require('express');
const axios = require('axios');

const router = express.Router();
const API = 'https://jsonplaceholder.typicode.com';

/**
 * Get all posts
 */
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

/**
 * Get post detail
 */
router.get('/posts/:id', (req, res) => {
    axios.get(`${API}/posts/${req.params.id}`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
});

module.exports = router;
