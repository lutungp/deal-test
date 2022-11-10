import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import log from "./logger";
import connect from "./database/connect";

const port = config.get<number>("port");
const host = config.get<string>("host");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://localhost:8000`);
  
  connect();
});