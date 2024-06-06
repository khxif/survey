import { Router } from "express";
import {
  addQuestion,
  createSurvey,
  deleteQuestion,
  deleteSurvey,
  getAllSurveys,
  getSurvey,
} from "../controllers/SurveyControllers";
import { verifyAdmin } from "../middleware/VerifyAdmin";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/", getAllSurveys);
router.get("/:id", getSurvey);
router.delete("/:id", verifyToken, verifyAdmin, deleteSurvey);
router.post("/create", verifyToken, verifyAdmin, createSurvey);
router.post("/:id/add-question", verifyToken, verifyAdmin, addQuestion);
router.delete("/:id/delete-question", verifyToken, verifyAdmin, deleteQuestion);

export default router;
