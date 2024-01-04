// const express = require("express");
import express from "express";

///Rest Ojbject
const app = express();

///Route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to xSpark-food by skDoDesign.");
});

///Port
const PORT = 8080;

///Listening
app.listen(PORT, () => {
  console.log("Server is running.");
});
