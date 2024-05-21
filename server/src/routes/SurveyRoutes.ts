import { Router } from "express";
import {
  createSurvey,
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

export default router;
