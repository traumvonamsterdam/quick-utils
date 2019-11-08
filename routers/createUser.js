const express = require("express");
const router = express.Router();
const models = require("../apis/models/models");

const createUser = async username => {
  const user = new models.User({
    username
  });

  await user.save();
};

router.post("/signup/submit", (req, res, next) => {
  const username = req.body.user.username;
  createUser(username);
});

module.exports = router;
