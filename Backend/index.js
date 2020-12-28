const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error occured while connecting to MongoDB:", err.message));