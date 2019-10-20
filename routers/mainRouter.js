const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("User data goes here");
  console.log(req.user);
  res.json({
    data: req.user
  });
});

router.get("/new", (req, res, next) => {
  console.log("User data goes here");
  console.log(req.user);
  res.json({
    msg: "This is a second route!"
  });
});

module.exports = router;
