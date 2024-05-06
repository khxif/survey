import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (
  _id: string,
  username: string,
  email: string,
  role: string
) => {
  const token = sign(
    { _id, username, email, role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "10d",
    }
  );

  return token;
};
