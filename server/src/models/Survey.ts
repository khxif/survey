import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Survey =
  mongoose.models.Survey || mongoose.model("Survey", surveySchema);
