import type { Request, Response } from "express";
import { Survey } from "../models/Survey";
import type { IQuestion } from "../types";

export const createSurvey = async (req: Request, res: Response) => {
  try {
    const { name, pdfUrl } = req.body;
    if (!name || !pdfUrl)
      return res.status(400).json({ message: "Missing Inputs!" });

    const existingSurvey = await Survey.find({ name });
    console.log(existingSurvey);

    if (existingSurvey.length > 0)
      return res.status(400).json({ message: "Survey already exists!" });

    const survey = await new Survey({ name, pdfUrl }).save();
    console.log(survey);

    res.status(200).json(survey);
  } catch (error) {
    console.log(`Create Survey error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const getAllSurveys = async (req: Request, res: Response) => {
  try {
    const surveys = await Survey.find();
    return res.status(200).json(surveys);
  } catch (error) {
    console.log(`Get all Survey error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const getSurvey = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);

    return res.status(200).json(survey);
  } catch (error) {
    console.log(`Get Survey error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const deleteSurvey = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findOneAndDelete({ _id: id });

    return res.status(200).json(survey);
  } catch (error) {
    console.log(`Get Survey error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const addQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "SurveyID not found!" });

    const survey = await Survey.findById(id);
    if (!survey) return res.status(400).json({ message: "Survey not found!" });

    survey.questions.push(req.body);
    await survey.save();

    res.json({ message: "Question added" });
  } catch (error) {
    console.log(`Add Question error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "SurveyID not found!" });

    const { questionId } = req.body;
    if (!questionId)
      return res.status(400).json({ message: "QuestionID not found!" });

    const survey = await Survey.findById(id);
    if (!survey) return res.status(400).json({ message: "Survey not found!" });

    survey.questions = survey.questions.filter(
      (question: IQuestion) => question._id.toString() !== questionId
    );
    await survey.save();

    res.status(200).json({ message: "Question Deleted" });
  } catch (error) {
    console.log(`Delete Question error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};
