// const express = require("express");
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";
import { connectDb } from "./config/db.js";

///dotenv configuration
// dotenv.config({ path: "./" });
dotenv.config();

///DB Connection
connectDb();

///Rest Ojbject
const app = express();

///Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/test", testRoutes);

///Home Route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to xSpark-food by skDoDesign.");
});

///Port
const PORT = process.env.PORT || 8080;

///Listening
app.listen(PORT, () => {
  console.log(`Node Server is running on ${PORT}`);
});
