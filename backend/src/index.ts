import express from "express";
import http from "http";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// import files
import router from "./router";

// important variables
const PORT = 8000;
const app = express();
const MONGO_URL = `mongodb://localhost:27017/rest-auth-api`;

// db connection with atlas
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));
mongoose.connection.once('open', () => console.log('Connected to MongoDB!'));

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
  console.log(`Server running on: ${PORT}`)
})

