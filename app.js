// Importing required modules

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Seting up app object

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;
app.listen(3000, ()=>{
    console.log(`Server started on port ${port}`);
});