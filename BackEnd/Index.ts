console.clear()

import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

dotenv.config();

const port = parseInt(process.env.PORT!, 10) || 2244; 
const app: Application = express();


app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_URL_LOCAL,
  })
);


mainApp(app);


const server = app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
  dbConfig(); 
});


process.on("uncaughtException", (error: Error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});


process.on("unhandledRejection", (reason: any) => {
  console.error("Unhandled Rejection:", reason);
  server.close(() => {
    process.exit(1);
  });
});
