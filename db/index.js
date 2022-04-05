import { connection } from "./config/dbConfig";

try {
  connection.connect();
  console.log("db connection succ");
} catch (error) {
  console.log("error 발생 ");
}

export { connection };
