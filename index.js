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

const port = process.env.PORT || 3001;

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

app.use("/", mainRouter);
app.use("/", authRouter);
// app.use("/", taskRouter);

// Serve page on other react routes
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./client/build/") });
});

app.listen(port, () => {
  console.log("Listening on port 3001");
});
