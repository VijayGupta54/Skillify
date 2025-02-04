const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const DbConnection = require("./config/db.config");
DbConnection();
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cookieParser());


app.use("/users", userRoutes);


module.exports = app;
