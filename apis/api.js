const express = require("express");
const helmet = require("helmet");
const router = require("./routers/apiRouter");
const taskRouter = require("./routers/taskRouter");
const cors = require("cors");
const morgan = require("morgan");
const { connectDb } = require("./models/models");

const port = process.env.PORT || 4000;

const app = express();
app.use(helmet());
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}`);
//   next();
// });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Api route");
});

app.use("/", router);
app.use("/tasks", taskRouter);

app.get("/*", (req, res) => {
  res.json({
    msg: "Api route not found."
  });
});

connectDb().then(async () => {
  app.listen(port, () => console.log(`Your app listening on port ${port}!`));
});

// app.listen(4000);
