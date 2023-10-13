import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import newsRoute from "./routes/newsRoute.js";
import apiRoute from "./routes/apiRoute.js";
const app = express();

dotenv.config({
    path:"./config/config.env",
});

const allowedOrigins = [
  'http://127.0.0.1:5173',
  'http://localhost:5173'
];

app.use(cors({
  origin:allowedOrigins,
  credentials:true,
}));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successfull`)
}

app.use(express.json());

app.use("/api/v1",userRoute);
app.use("/api/v1",newsRoute);
app.use("/api/v1",apiRoute);

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
