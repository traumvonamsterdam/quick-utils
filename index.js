const express = require("express");
const app = express();
const createError = require("http-errors");
const path = require("path");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const mainRouter = require("./routers/mainRouter");
const authRouter = require("./routers/authRouter");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Use express session before initializing
app.use(
  session({
    secret: "Wort Wort Wort!",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve main react page
app.use(express.static("client/build"));

app.use("/", (req, res, next) => {
  if (req.user) {
    console.log("See info below");
    console.log(req.user.displayName);
  }
  next();
});

app.use("/", mainRouter);
app.use("/", authRouter);

// Serve page on other react routes
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./client/build/") });
});

app.listen(3001);

// const GitHubStrategy = require("passport-github2");
// const {
//   GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET,
//   GITHUB_CLIENT_ID,
//   GITHUB_CLIENT_SECRET
// } = require("./auth/config");
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "http://localhost:3001/auth/github/callback"
//     },
//     (accessToken, refreshToken, profile, done) => {
//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser((user, cb) => {
//   cb(null, user);
// });
