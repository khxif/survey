import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { SharpDark } from "survey-core/themes/sharp-dark";
import { Survey } from "survey-react-ui";

const surveyJson = {
  questions: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
    {
      name: "Pets",
      title: "Do you have pets?",
      type: "radiogroup",
      choices: ["Yes", "No"],
      visibleIf: "{FirstName} notempty and {LastName} notempty",
    },
    {
      name: "PetType",
      title: "What type of pet do you have?",
      type: "radiogroup",
      choices: ["Cat", "Dog", "Other"],
      visibleIf: "{Pets} = 'Yes'",
    },
  ],
};

export default function Home() {
  const survey = new Model(surveyJson);
  survey.applyTheme(SharpDark);
  return (
    <main className="py-4 space-y-4">
      <Link to="/admin/login" className="my-4">
        <Button>Admin Dashboard</Button>
      </Link>
      <Survey model={survey} />
    </main>
  );
}
