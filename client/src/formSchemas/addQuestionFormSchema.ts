import { z } from "zod";

export const addQuestionFormSchema = z.object({
  name: z.string().min(2, {
    message: "Enter a proper name",
  }),
  title: z.string().min(4, {
    message: "Enter a proper Question.",
  }),
  type: z.enum(["text", "comment", "radiogroup", "boolean", "rating"]),
  choices: z.array(z.string()).optional(),
});
