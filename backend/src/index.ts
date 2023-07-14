import express from "express";
import http from "http";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// import files
import router from "./router";
import { mongo_error, mongo_succ, run_server } from "./utils/variablestatic";

// important variables
const PORT = 8000;
const MONGO_URL = `mongodb://localhost:27017/rest-auth-api`;
const app = express();

// db connection with atlas
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error) => console.error(mongo_error, error));
mongoose.connection.once('open', () => console.log(mongo_succ));

// important middlewares
app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// all routers
app.use("/", router());

// run server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`${run_server} ${PORT}`)
})

