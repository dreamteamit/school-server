const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./server");


// const DetailsRoutes = require('import from route');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Dream Team It School Management Server Working");
});


// app.use('/routes_name', DetailsRoutes);



connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.