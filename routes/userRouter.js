import { Router } from "express";

import { connection } from "../db";

const userRouter = Router();

userRouter.get("/get", (req, res) => {
  connection.query("select * from User", (error, rows) => {
    if (error) {
      console.log("error occur");
      if (error.sqlMessage.includes("doesn't exist")) {
        console.log("create table");
        connection.query(
          `create table User(
              id int, 
              name varchar(30)
          )`
        );
      }
    }
    console.log(rows);
  });
});

export { userRouter };
