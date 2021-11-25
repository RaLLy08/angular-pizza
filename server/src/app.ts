import express from "express";
import helmet from "helmet";
import cors from "cors";
require("./config/db").connect();
const bodyParser = require("body-parser"),
  path = require("path"),
  cookieParser = require("cookie-parser");

import router from "./routes";

const app = express();
const PORT = 3333;

app.use(helmet());
app.use(cors()); // disable cors
app.use(bodyParser.json());
app.use(cookieParser()); // "secret key"
app.use(bodyParser.urlencoded({
  extended: true,
}));

const STATIC = path.resolve(__dirname, "../client");
const INDEX = path.resolve(STATIC, "index.html");

app.use(express.static(STATIC));

app.get("/", (req, res, next) => {
  res.sendFile(INDEX);
});

app.use("/api/", router());

app.listen(PORT, () =>  console.log(`server is listening on ${PORT}`));
