import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
           
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            cart:[]
        });

        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Failed to register user" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
         if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1hr' });
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
        return res.json({ status: true, message: "Login successful",name:user.username});
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Failed to login" });
    }
});

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not registered" });
        }

        const token = jwt.sign({ email: user.email }, process.env.KEY, { expiresIn: '1hr' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Reset Password',
            text: `Please use the following link to reset your password: http://localhost:5173/reset-password/${token}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({ message: "Error sending email" });
            } else {
                return res.json({ status: true, message: "Check your email to reset your password" });
            }
        });
    } catch (error) {
        console.error("Error during forgot password:", error);
        return res.status(500).json({ message: "Failed to process forgot password request" });
    }
});



router.post('/profile', async (req, res) => {
    const { username, phone, address } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { username },
        { phone, address },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Failed to update profile' });
    }
  });


export default router;
