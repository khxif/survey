import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals._id;

    const user = await User.findById(id);
    if (!user || user?.role !== "Super-Admin" || user?.role === "HR-Admin")
      return res
        .status(401)
        .json({ message: "Only Super Admins can access this route" });

    next();
  } catch (error) {
    console.log(`Verify super admin error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};
