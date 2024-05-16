import { z } from "zod";

export const surveyFormSchema = z.object({
  name: z.string().min(2),
  pdfUrl: z.string().min(5, {
    message: "Enter a proper Description!",
  }),
});
