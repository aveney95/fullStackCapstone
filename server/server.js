// import express from 'express';
const express = require('express')
// import cors from 'cors';
const cors = require('cors')
// import mongoose from 'mongoose';
const mongoose = require('mongoose')  
// import authRoutes from './routes/authRoutes.js';
// const authRoutes = require('./routes/authRoutes')
// import listingRoutes from './routes/listingRoutes.js';
// const listingRoutes = require('./routes/listingRoutes')
// import dotenv from 'dotenv';
// const userRoutes = require('./routes/userRoutes')   
const app = express();
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true 
  }
));
app.use(express.json());
require('dotenv').config()
//do i need to import routes from all route files?
//what do i set router as a const to then?
// app.use('/auth', authRoutes); 
// app.use('/listings', listingRoutes);  
// app.use('/users', userRoutes);    
const Router = require('../server/routes/routes')

// authRoutes(app)
// listingRoutes(app)

Router(app)
const PORT = 3000;
app.listen(PORT, () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => console.log(err));
    console.log(`Server connected at port ${PORT}`);
  });