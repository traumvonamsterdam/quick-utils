const express = require("express");
const app = express();
const helmet = require("helmet");
const router = require("./routers/mainRouter");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/build"));

app.use("/", router);

app.listen(3001);
