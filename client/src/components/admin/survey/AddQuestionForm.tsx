import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addQuestionFormSchema } from "@/formSchemas/addQuestionFormSchema";
import { useModalStore } from "@/store/modalStore";
import { useTokenStore } from "@/store/tokenStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import RadioButtons from "./RadioButtons";
import { questionTypes } from "@/lib/questionTypes";

export default function AddQuestionForm() {
  const [choices, setChoices] = useState<number>(4);
  const [inputValues, setInputValues] = useState(
    Array.from({ length: choices }, (_, i) => `Choice ${i + 1}`)
  );

  const token = useTokenStore((state) => state.token);
  const setAddQuestionModalOpen = useModalStore(
    (state) => state.setAddQuestionModalOpen
  );

  const location = useLocation();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof addQuestionFormSchema>>({
    resolver: zodResolver(addQuestionFormSchema),
    defaultValues: {
      name: "",
      title: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof addQuestionFormSchema>) {
    console.log(values);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/survey/${
          location.pathname.split("/")[3]
        }/add-question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ ...values, choices: inputValues }),
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) return toast.error("Failed to create question.");

      queryClient.invalidateQueries("survey");
      toast.success("Question created!");
      setAddQuestionModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create question.");
    }
  }

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const [selectedType, setSelectedType] = useState<string>(
    form.getValues("type")
  );

  useEffect(() => {
    const subscription = form.watch((value) => setSelectedType(value.type!));

    return () => subscription.unsubscribe();
  }, [form]);
  return (
    <div className="py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the label for the question.</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Question.</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: what is your Name?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the input type.</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={field.disabled}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Ex: Text" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {questionTypes.map((questionType) => (
                          <SelectItem
                            key={questionType.id}
                            value={questionType.value}
                          >
                            {questionType.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {selectedType === "radiogroup" && (
            <RadioButtons
              choices={choices}
              handleInputChange={handleInputChange}
              inputValues={inputValues}
              setChoices={setChoices}
            />
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-blue-950 hover:bg-blue-950 hover:bg-blue-950/80"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
