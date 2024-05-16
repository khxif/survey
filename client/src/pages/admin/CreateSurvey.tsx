// import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Answer type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="textbox">TextBox</SelectItem>
          <SelectItem value="large-textbox">Large Textbox</SelectItem>
          <SelectItem value="yes-or-no">Yes or NO?</SelectItem>
          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
          <SelectItem value="rating-scale">Rating scale</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center space-x-6">
        <Button>Save</Button>
        <Button>Preview</Button>
      </div>
    </section>
  );
}
