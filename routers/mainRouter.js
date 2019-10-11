const express = require('express');
const router = express.Router();

router.get('/main', (req, res, next) => {
  res.json({
    msg: "Router works!"
  })
})

router.get('/new', (req, res, next) => {
  res.json({
    msg: "This is a second route!"
  })
})

module.exports = router;