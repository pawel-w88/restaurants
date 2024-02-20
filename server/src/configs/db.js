import dotenv from "dotenv";
import mongoose from "mongoose";
// const mongoose = require('mongoose');

export const connect = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}`
    );

    console.log(`MongoDB wurde verbunden auf ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export const closeConnection = () => mongoose.connection.close();
