const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
    basket: {
        type: Object,
        default: null,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;