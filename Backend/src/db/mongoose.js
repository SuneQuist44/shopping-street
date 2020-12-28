const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error occured while connection to MongoDB:", err.message));