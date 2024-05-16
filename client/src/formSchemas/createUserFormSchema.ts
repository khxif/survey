import { z } from "zod";

export const createUserFormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Enter a user name",
    }),
    email: z.string().email({
      message: "Enter a valid email!",
    }),
    role: z.string().min(4, {
      message: "Select a Role",
    }),
    password: z.string().min(5, {
      message: "Enter atleast 5 characters!",
    }),
    confirmPassword: z.string().min(5, {
      message: "Password should contain 5 characters!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });
