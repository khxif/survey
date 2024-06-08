import { Button } from "@/components/ui/button";
import { useTokenStore } from "@/store/tokenStore";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

export default function SurveyCard({ survey }: { survey: Survey }) {
  const token = useTokenStore((state) => state.token);
  const QueryClient = useQueryClient();

  const deleteSurvey = async (id: string) => {
    if (!token || !id) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/survey/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      QueryClient.invalidateQueries("surveys");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-secondary px-6 py-4 rounded-md flex-1 flex items-center justify-between">
      {survey.name}
      <div className="space-x-5">
        <Link to={`/admin/survey/${survey._id}`}>
          <Button className="bg-blue-950 hover:bg-blue-950 hover:bg-blue-950/80">
            Edit
          </Button>
        </Link>
        <Button onClick={() => deleteSurvey(survey?._id)} variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
}
