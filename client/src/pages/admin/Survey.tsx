import DashBoardBreadCrumbs from "@/components/DashBoardBreadCrumbs";
import Loading from "@/components/Loading";
import SurveyCard from "@/components/admin/survey/SurveyCard";
import { Button } from "@/components/ui/button";
import { useSurveys } from "@/hooks/useSurveys";
import { useModalStore } from "@/store/modalStore";

export default function Survey() {
  const { surveys, isLoading, isError } = useSurveys();
  const setCreateSurveyModalOpen = useModalStore(
    (state) => state.setCreateSurveyModalOpen
  );
  return (
    <section className="flex flex-col px-4 md:px-8 h-full w-full">
      <div className="flex items-center justify-between w-full mt-4">
        <DashBoardBreadCrumbs page="Survey" />
        <Button
          className="items-end max-w-fit justify-end ml-auto px-4 md:px-6"
          onClick={() => setCreateSurveyModalOpen(true)}
        >
          Add Survey
        </Button>
      </div>
      <div className="py-5 h-full">
        <main className="space-y-6 h-full">
          {surveys &&
            surveys?.map((survey: Survey) => (
              <SurveyCard key={survey?._id} survey={survey} />
            ))}
          {isLoading && <Loading />}
          {isError && !isLoading && (
            <div className="w-full h-full flex items-center justify-center">
              Something went wrong.....
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
