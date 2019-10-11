const express = require("express");
const app = express();
const helmet = require("helmet");
const router = require("./routers/apiRouter");

app.use(helmet());
app.use(express.json());
app.use(express.bodyParser());

app.get("/", (req, res) => {
  res.json("Api route");
});

app.use("/", router);

app.listen(4000);
