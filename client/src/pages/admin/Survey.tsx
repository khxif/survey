import { Button } from "@/components/ui/button";
import { useSurveys } from "@/hooks/useSurveys";
import { useModalStore } from "@/store/modalStore";

export default function Survey() {
  const { surveys } = useSurveys();
  console.log(surveys);

  const setCreateSurveyModalOpen = useModalStore(
    (state) => state.setCreateSurveyModalOpen
  );
  return (
    <section className="flex flex-col px-8  w-full">
      <Button
        className="items-end max-w-fit justify-end ml-auto mt-4"
        onClick={() => setCreateSurveyModalOpen(true)}
      >
        Add Survey
      </Button>
      <div className="py-5">
        <main className="space-y-6">
          {surveys?.map((survey: Survey) => (
            <div
              key={survey?._id}
              className="bg-secondary px-6 py-4 rounded-md flex-1 flex items-center justify-between"
            >
              {survey.name}
              <div className="space-x-5">
                <Button>Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
