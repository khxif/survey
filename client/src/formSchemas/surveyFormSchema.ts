import { z } from "zod";

export const surveyFormSchema = z.object({
  survey_name: z.string().min(2),
  description: z.string().min(5, {
    message: "Enter a proper Description!",
  }),
});
