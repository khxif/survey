import type { NextFunction, Request, Response } from "express";
import { type JwtPayload, verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Token missing!" });

    const decoded = verify(token, process.env.JWT_SECRET as string);
    console.log(decoded);

    res.locals._id = (decoded as JwtPayload)._id;
    next();
  } catch (error) {
    console.log(`Verify Token error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};
