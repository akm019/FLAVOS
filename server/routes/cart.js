// routes/cart.js

import express from 'express';
import User from '../models/userModels.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to authenticate user
const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

router.get('/', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user.cart);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch cart" });
    }
});

router.post('/', authenticate, async (req, res) => {
    const { itemId, quantity } = req.body;

    try {
        const user = await User.findById(req.user.id);
        const itemIndex = user.cart.findIndex(item => item.itemId.toString() === itemId);
        if (itemIndex > -1) {
            user.cart[itemIndex].quantity += quantity;
        } else {
            user.cart.push({ itemId, quantity });
        }
        await user.save();
        res.json(user.cart);
    } catch (error) {
        res.status(500).json({ message: "Failed to update cart" });
    }
});

router.delete('/:itemId', authenticate, async (req, res) => {
    const { itemId } = req.params;

    try {
        const user = await User.findById(req.user.id);
        user.cart = user.cart.filter(item => item.itemId.toString() !== itemId);
        await user.save();
        res.json(user.cart);
    } catch (error) {
        res.status(500).json({ message: "Failed to remove item from cart" });
    }
});

export default router;
