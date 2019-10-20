const express = require("express");
const router = express.Router();
const passport = require("../auth/oauth20");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/loginFailed"
  })
);

router.get("/auth/github", passport.authenticate("github"));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/loginFailed"
  })
);

// router.get(
//   "/auth",
//   passport.authenticate("github", {
//     successRedirect: "/",
//     failureRedirect: "/loginFailed"
//   })
// );

router.get("/login", (req, res) => {
  res.json({
    text: "Login page. You're probably here because login has failed."
  });
});

module.exports = router;
