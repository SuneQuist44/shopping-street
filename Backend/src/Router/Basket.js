const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();

// Schema
const Basket = require('../Schema/Basket');

router.post('/basket', auth, async (req, res) => {
    const basket = new Basket({ ...req.body, user: req.user._id });

    try {
        await basket.save();
        res.status(201).send(basket);
    } catch (err) { res.status(400).send() };
});

router.get('/basket', auth, async (req, res) => {
    try {
        const basket = await Basket.find({ user: req.user._id })

        res.send(basket);
    } catch (err) { res.status(500).send(err.name + ': ' + err.message) };
});

module.exports = router;