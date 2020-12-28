const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.json()); // Conevert data into JSON

mongoose.connect(process.env.HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error occured while connecting to MongoDB:", err.message));

// Router Connections
const User = require('./src/Router/User');

// Routers
app.use(User);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Connected to port", PORT));