import express from "express";

import { connection } from "./db";
import { userRouter } from "./routes/userRouter";
const app = express();

connection;

app.use(userRouter);
app.listen(5000, () => console.log("hello world"));
