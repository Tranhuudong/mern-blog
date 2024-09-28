import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch(() => {
    console.error();
    
  });

const app = express();
app.listen(3000, () => {
  console.log("server listening on port 3000");
});


app.use('/api/user', userRouter)