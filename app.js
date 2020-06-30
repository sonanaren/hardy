// app.js

const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const bikes = require("./routes/api/bikes");
const cars = require("./routes/api/cars");
const users = require("./routes/api/users");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/public", express.static("public"));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/bikes", bikes);
app.use("/api/cars", cars);
app.use("/api/users", users);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
