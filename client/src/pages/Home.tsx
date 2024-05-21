import Loading from "@/components/Loading";
import { useSurveys } from "@/hooks/useSurveys";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import "survey-core/defaultV2.min.css";

export default function Home() {
  const { surveys, isLoading } = useSurveys();
  return (
    <main className="py-4 px-4 max-w-7xl mx-auto ">
      <h1 className="text-2xl text-center font-medium">All Surveys</h1>

      <div className="flex flex-col space-y-4 py-5">
        {surveys &&
          surveys.map((survey: Survey) => (
            <Link to={`/survey/${survey._id}`}>
              <div className="bg-secondary px-6 py-4 rounded-md flex-1 flex items-center justify-between">
                {survey.name}
                <div className="space-x-5">
                  <MoveRight className="size-6" />
                </div>
              </div>
            </Link>
          ))}
        {isLoading && <Loading />}
      </div>
    </main>
  );
}
