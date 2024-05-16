import { Request, Response } from "express";
import { User } from "../models/User";
import { hashPassword } from "../utils/hashPassword";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({ _id: { $ne: res.locals._id } });

    return res.status(200).json(users);
  } catch (error) {
    console.log(`Get all Users error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, role, password } = req.body;
    if (!username || !email || !role || !password)
      return res.status(400).json({ message: "Missing Credentials.." });

    const hashedPassword = await hashPassword(password);

    const user = await new User({
      username,
      email,
      role,
      password: hashedPassword,
    }).save();

    res.status(200).json({ message: "User created!" });
  } catch (error) {
    console.log(`Create user error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    if (!username)
      return res.status(400).json({ message: "Username not received" });

    const user = await User.findOneAndDelete({ username });
    console.log(user);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(`Create user error: ${(error as Error)?.message}`);
    res.status(500).json({ message: (error as Error)?.message });
  }
};
