import type { Request, Response } from "express";
import { Survey } from "../models/Survey";

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
