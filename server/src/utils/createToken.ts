import { sign } from "jsonwebtoken";
process.loadEnvFile(".env");

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
