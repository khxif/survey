import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../controllers/UserController";
import { verifyToken } from "../middleware/verifyToken";
import { verifySuperAdmin } from "../middleware/verifySuperAdmin";

const router = Router();

router.get("/", verifyToken, verifySuperAdmin, getAllUsers);
router.delete("/:username", verifyToken, verifySuperAdmin, deleteUser);
router.post("/create", verifyToken, verifySuperAdmin, createUser);

export default router;
