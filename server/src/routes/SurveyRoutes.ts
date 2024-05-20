import { Router } from "express";
import {
    createSurvey,
    deleteSurvey,
    getAllSurveys,
    getSurvey,
} from "../controllers/SurveyControllers";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/", getAllSurveys);
router.get("/:id", verifyToken, getSurvey);
router.delete("/:id", deleteSurvey);
router.post("/create", createSurvey);

export default router;
