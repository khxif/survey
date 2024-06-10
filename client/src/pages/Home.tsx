import { useSurveys } from "@/hooks/useSurveys";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import "survey-core/defaultV2.min.css";

export default function Home() {
  const { surveys } = useSurveys();
  return (
    <main className="py-4 px-4 max-w-7xl mx-auto h-full">
      <h1 className="text-2xl text-center font-medium text-blue-800">
        All Surveys
      </h1>

      <div className="flex flex-col space-y-4 py-5">
        {surveys &&
          surveys.map((survey: Survey) => (
            <Link to={`/survey/${survey._id}`}>
              <div
                className="bg-transparent border border-blue-800 shadow-md px-6 py-4 rounded-md flex-1 flex
               items-center justify-between"
              >
                {survey.name}
                <div className="space-x-5">
                  <MoveRight className="size-6 text-blue-950" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
