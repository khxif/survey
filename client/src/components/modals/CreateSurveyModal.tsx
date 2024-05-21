import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { useQueryClient } from "react-query";
import { z } from "zod";
import FileUpload from "../FileUpload";
import { useTokenStore } from "@/store/tokenStore";

export default function CreateSurveyModal() {
  const QueryClient = useQueryClient();

  const token = useTokenStore((state) => state.token);
  const [createSurveyModalOpen, setCreateSurveyModalOpen] = useModalStore(
    (state) => [state.createSurveyModalOpen, state.setCreateSurveyModalOpen]
  );

  const form = useForm<z.infer<typeof surveyFormSchema>>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues: {
      name: "",
      pdfUrl: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof surveyFormSchema>) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/survey/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(values),
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      QueryClient.invalidateQueries("surveys");
    } catch (error) {
      console.log(error);
    } finally {
      setCreateSurveyModalOpen(false);
    }
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
                name="name"
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
                name="pdfUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Instruction PDF</FormLabel>
                    <FormControl>
                      <FileUpload
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex items-center space-x-6">
                <DialogClose className="w-full">
                  <Button variant="destructive" size="lg" className="w-full">
                    Cancel
                  </Button>
                </DialogClose>
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
