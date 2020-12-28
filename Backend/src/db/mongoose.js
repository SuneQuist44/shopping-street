const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sune:admin@shopping.h5xhw.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error occured while connection to MongoDB:", err.message));