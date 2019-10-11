const express = require('express');
const router = express.Router();

router.get('/api', (req, res, next) => {
  res.json({
    msg: "Welcome to the api!"
  })
})

router.get('/new', (req, res, next) => {
  res.json({
    msg: "This is a second route!"
  })
})

module.exports = router;