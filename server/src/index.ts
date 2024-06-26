import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "./routes/AuthRoutes";
import SurveyRoutes from "./routes/SurveyRoutes";
import UserRoutes from "./routes/UserRoutes";

dotenv.config();
const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://survey-khxifs-projects.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/auth", AuthRoutes);
app.use("/api/survey", SurveyRoutes);
app.use("/api/user", UserRoutes);

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
