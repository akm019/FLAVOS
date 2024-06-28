import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRouter from './routes/User.js';
import { DB_NAME } from './Constants.js';
import User from './models/userModels.js'
import cookieParser from 'cookie-parser'

const app = express();


// MIDDLEWARE
app.use(cors(
   {origin:["http://localhost:5173"],
credentials :true
}
));
app.use(express.json());
app.use(cookieParser());

// ROUTE
app.use('/auth', authRouter);

// MONGOOSE CONNECT
mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch((error) => console.error('Failed to connect', error)); // Corrected catch block

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => { // Corrected argument order
  err.statusCode = err.statusCode || 500; // Corrected spelling
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// SERVER
const PORT = process.env.PORT || 3000; // Default to 3001 if PORT is not set
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
