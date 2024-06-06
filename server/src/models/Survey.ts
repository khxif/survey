import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["radiogroup", "comment", "text", "boolean", "rating"],
  },
  choices: {
    type: [String],
  },
});

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
  questions: [questionSchema],
});

export const Survey =
  mongoose.models.Survey || mongoose.model("Survey", surveySchema);
