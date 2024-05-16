import { z } from "zod";

export const adminLoginFormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email!",
  }),
  password: z.string().min(5, {
    message: "Enter atleast 5 characters!",
  }),
});
