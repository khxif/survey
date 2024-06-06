import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Trash2Icon } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface RadioButtonsProps {
  inputValues: string[];
  choices: number;
  setChoices: Dispatch<SetStateAction<number>>;
  handleInputChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function RadioButtons({
  inputValues,
  choices,
  setChoices,
  handleInputChange,
}: RadioButtonsProps) {
  return (
    <RadioGroup className="flex flex-col space-y-4">
      {[...Array(choices)].map((_: string, i: number) => (
        <div key={i} className="flex items-center space-x-2">
          <RadioGroupItem checked value="" />
          <Input
            className="dark:border-gray-600"
            value={inputValues[i]}
            onChange={(event) => handleInputChange(i, event)}
            type="text"
            placeholder={`Choice ${i + 1}`}
          />

          <Trash2Icon
            onClick={() => {
              if (choices <= 2) return;
              setChoices((prev) => prev - 1);
            }}
            className="size-5 ml-2 text-red-800 cursor-pointer"
          />
        </div>
      ))}
    </RadioGroup>
  );
}
