import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "./routes/AuthRoutes";
process.loadEnvFile(".env");

const PORT = process.env.PORT || 8888;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/auth", AuthRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${(error as Error).message}`);
  });

module.exports = app;
