import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0376",
  database: "Users",
});

export { connection };
