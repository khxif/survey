import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSurvey } from "@/hooks/useSurvey";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSurvey() {
  const navigate = useNavigate();
  const params = useParams();
  const { survey } = useSurvey(params.id);
  console.log(survey);

  useEffect(() => {
    if (!params.id) navigate("/admin/survey");
  }, [params.id]);
  return (
    <section className="flex flex-col space-y-5 max-w-5xl mx-auto w-screen h-full py-10">
      <div className="space-y-2">
        <Label className="text-lg">Survey Name</Label>
        <Input
          disabled
          className="dark:border-slate-200/40 text-opacity-100 disabled:cursor-pointer"
          value={survey?.name}
        />
      </div>
      <div className="space-y-2">
        <Label className="text-lg">Survey Name</Label>
        <img className="dark:border-slate-200/40" src={survey?.name} />
      </div>
    </section>
  );
}
