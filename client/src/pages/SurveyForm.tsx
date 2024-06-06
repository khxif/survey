import { useSurvey } from "@/hooks/useSurvey";
import { useTheme } from "@/providers/ThemeProvider";
import { useParams } from "react-router-dom";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { LayeredDark } from "survey-core/themes/layered-dark";
import { PlainLight } from "survey-core/themes/plain-light";
import { Survey } from "survey-react-ui";

// const surveyJson = {
//   questions: [
//     {
//       name: "FirstName",
//       title: "Enter your first name:",
//       type: "comment",
//     },
//     {
//       name: "LastName",
//       title: "Enter your last name:",
//       type: "rating",
//     },
//     {
//       name: "Pets",
//       title: "Do you have pets?",
//       type: "radiogroup",
//       choices: ["Yes", "No"],
//       visibleIf: "{FirstName} notempty and {LastName} notempty",
//     },
//     {
//       name: "PetType",
//       title: "What type of pet do you have?",
//       type: "boolean",
//       choices: ["Cat", "Dog", "Other"],
//       // visibleIf: "{Pets} = 'Yes'",
//     },
//   ],
// };

export default function SurveyForm() {
  const params = useParams();
  const { theme } = useTheme();
  const { survey: surveyQuestions } = useSurvey(params.id);

  const survey = new Model(surveyQuestions);
  survey.applyTheme(theme === "dark" ? LayeredDark : PlainLight);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Survey model={survey} />
    </div>
  );
}
