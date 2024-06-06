import PDFViewer from "@/components/admin/survey/PdfViewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSurvey } from "@/hooks/useSurvey";
import { useModalStore } from "@/store/modalStore";
import { useTokenStore } from "@/store/tokenStore";
import { Pencil } from "lucide-react";
import { useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function EditSurvey() {
  const token = useTokenStore((state) => state.token);

  const params = useParams();
  const queryClient = useQueryClient();
  const { survey } = useSurvey(params.id);
  console.log(survey);

  const setAddQuestionModalOpen = useModalStore(
    (state) => state.setAddQuestionModalOpen
  );

  const handleDelete = async (questionId: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/survey/${
          params.id
        }/delete-question`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ questionId }),
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) return toast.error("Failed Deleting the Question");

      toast.success("Question Deleted");
      queryClient.invalidateQueries("survey");
    } catch (error) {
      console.log(error);
      toast.error("Failed Deleting the Question");
    }
  };
  return (
    <section className="flex flex-col space-y-5 max-w-5xl mx-auto w-screen h-full py-6 md:py-10 px-4">
      <div className="space-y-2">
        <Label className="text-lg">Survey Name</Label>
        <Input
          disabled
          className="dark:border-slate-200/40 text-opacity-100 disabled:cursor-pointer"
          value={survey?.name}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-lg">Instructions</Label>
        <PDFViewer pdfUrl={survey?.pdfUrl} />
      </div>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-medium">Questions</h1>

        <div className="flex items-center space-x-4">
          <Button onClick={() => setAddQuestionModalOpen(true)}>
            Add Questions
          </Button>
          <Link to={`/survey/${survey?._id}`}>
            <Button className="flex items-center space-x-2">
              <Pencil className="size-5" />
              <p>Preview</p>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-4 space-y-5">
        {survey &&
          survey.questions.map((question: Question) => (
            <div
              key={question._id}
              className="w-full border border-primary px-6 py-4 flex justify-between items-center"
            >
              <div>
                <h1>{question?.name}</h1>
                <p>{question?.title}</p>
                <span className="flex items-center space-x-2">
                  <p>Input Type:</p>
                  <p>{question?.type}</p>
                </span>

                <span>
                  {question?.type === "radiogroup" && (
                    <div className="flex items-center space-x-2">
                      <p>Choices:</p>
                      <span className="flex items-center space-x-4">
                        {question?.choices?.map((choice) => (
                          <p key={choice} className="">
                            {choice}
                          </p>
                        ))}
                      </span>
                    </div>
                  )}
                </span>
              </div>

              <div>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(question._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
