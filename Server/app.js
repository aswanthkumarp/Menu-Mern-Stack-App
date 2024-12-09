const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use("/api/menus", menuRoutes);

module.exports = app;
