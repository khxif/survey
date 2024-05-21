import { compare } from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/User";
import { createToken } from "../utils/createToken";
import { hashPassword } from "../utils/hashPassword";

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Missing Credentials!" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(500).json({ message: "Email not registered!" });

    const isPassValid = await compare(password, user?.password);
    if (!isPassValid)
      return res.status(401).json({ message: "Invalid Credentials!" });

    const token = createToken(
      user?._id,
      user?.username,
      user?.email,
      user?.role
    );

    res.cookie("username", user?.username);
    res.cookie("email", user?.email);
    res.status(200).json(token);
  } catch (error) {
    console.log(`Admin Login error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const adminRegister = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "Missing Credentials!" });

    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);

    const admin = new User({
      username,
      email,
      password: hashedPassword,
      role: "Super-Admin",
    });
    await admin.save();
    console.log(admin);

    res.json(admin);
  } catch (error) {
    console.log(`Admin Register error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const _id = res.locals._id;

    const user = await User.findById(_id).select("-password");
    if (!user) return res.status(401).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.log(`Admin Register error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("name");
    res.clearCookie("email");

    res.status(200).json({ message: "Logout success" });
  } catch (error) {
    console.log(`Logout error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};
