import { Router } from "express";
import {
    adminLogin,
    adminRegister,
    getUser,
} from "../controllers/AuthControllers";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.post("/admin/login", adminLogin);
router.post("/admin/register", adminRegister);
router.get("/verify-token", verifyToken, getUser);

export default router;
