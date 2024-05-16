import { Router } from "express";
import { createSurvey, getAllSurveys } from "../controllers/SurveyControllers";

const router = Router();

router.get("/",getAllSurveys);
router.post("/create",createSurvey);

export default router;
