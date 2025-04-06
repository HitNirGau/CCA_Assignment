const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/authroutes");
const taskRoutes = require("./routes/taskroutes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;
