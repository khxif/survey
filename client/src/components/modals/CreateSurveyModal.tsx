import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { surveyFormSchema } from "@/formSchemas/surveyFormSchema";
import { useModalStore } from "@/store/modalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

export function CreateSurveyModal() {
  const navigate = useNavigate();
  const [createSurveyModalOpen, setCreateSurveyModalOpen] = useModalStore(
    (state) => [state.createSurveyModalOpen, state.setCreateSurveyModalOpen]
  );

  const form = useForm<z.infer<typeof surveyFormSchema>>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues: {
      survey_name: "",
      description: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof surveyFormSchema>) => {
    console.log(values);
    navigate("/admin/survey/create");
    setCreateSurveyModalOpen(false)
  };
  return (
    <Dialog
      open={createSurveyModalOpen}
      onOpenChange={setCreateSurveyModalOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create survey...</DialogTitle>
        </DialogHeader>

        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="survey_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Survey Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Survey Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Describe the survey..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex items-center space-x-6">
                <Button
                  variant="destructive"
                  size="lg"
                  className="w-full"
                  onClick={() => setCreateSurveyModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button size="lg" className="w-full">
                  Proceed
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
