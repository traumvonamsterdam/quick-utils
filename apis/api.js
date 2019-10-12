const express = require("express");
const helmet = require("helmet");
const router = require("./apiRouter");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Api route");
});

app.use("/", router);

app.listen(4000);
