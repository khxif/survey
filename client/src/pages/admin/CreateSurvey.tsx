import { Input } from "@/components/ui/input";

export default function CreateSurvey() {
  return (
    <section
      className="flex flex-col space-y-5 max-w-5xl mx-auto items-center 
    justify-center w-screen h-full py-10"
    >
      <h1 className="font-medium text-2xl">Create your survey..</h1>
      <Input type="text" placeholder="Question for your survey?" />
      <Input type="text" placeholder="Sub Text" />
      {/* <FileUpload /> */}
    </section>
  );
}
