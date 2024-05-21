import { Router } from "express";
import {
  adminLogin,
  adminRegister,
  getUser,
  logout,
} from "../controllers/AuthControllers";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/admin/logout", logout);
router.post("/admin/login", adminLogin);
router.post("/admin/register", adminRegister);
router.get("/verify-token", verifyToken, getUser);

export default router;
