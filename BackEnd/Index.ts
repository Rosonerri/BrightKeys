// server.ts or app.ts

import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

dotenv.config();

const port = parseInt(process.env.PORT!, 10) || 2244; // Default to 2244 if PORT is not defined
const app: Application = express();

// Middleware setup
app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_URL, // Ensure this is correctly set in your .env file
  })
);

// Initialize main application routes and logic
mainApp(app);

// Start the server
const server = app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
  dbConfig(); // Initialize database configuration
});

// Graceful shutdown on uncaught exceptions
process.on("uncaughtException", (error: Error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

// Graceful shutdown on unhandled promise rejections
process.on("unhandledRejection", (reason: any) => {
  console.error("Unhandled Rejection:", reason);
  server.close(() => {
    process.exit(1);
  });
});
